<?php
/**
Plugin Name: Share Block by BlocksWP.com
Plugin URI: https://BlocksWP.com/social-block
Description: Social share block for the WordPress Gutenberg block editor
Author: BlocksWP.com
Version: 1.0.0
Text Domain: share-block
Author URI: https://BlocksWP.com
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Version number
 *
 * @since 1.0.0
 */
define( 'WP_BLOCKS_SHARE_BLOCK', '1.0.0' );

/**
 * Make plugin go
 */
add_action( 'plugins_loaded', 'blockswp_share_block_init' );

/**
 * Init plugin if WP_Block_Type exits
 *
 * @since 0.1.0
 */
function blockswp_share_block_init(){
    if ( class_exists( 'WP_Block_Type' ) ) {
        $block = new WP_Block_Type('blockswp/share-block');
        WP_Block_Type_Registry::get_instance()->register($block );
        add_action( 'enqueue_block_editor_assets', 'blockswp_share_block_editor_assets' );
        add_action('enqueue_block_assets', 'blockswp_share_block_block_assets');

    }

    //Register each attribute as a meta field, to be shown in REST API response
    foreach( blockswp_share_block_get_attributes() as $attribute => $args ){
        register_meta( 'post', blockswp_share_block_prefix_attribute($attribute), array(
            'show_in_rest' => true,
            'single' => true,
            'type' =>  $args[ 'type' ],
        ) );
    }

    //Add one REST API field with all of the settings
    register_rest_field( 'post', 'blockswp_share', array(
        'get_callback' => 'blockswp_share_block_extra_rest_field_callback'
    ) );

}

/**
 * Callback for the extra REST API field blockswp_share we use for combining all meta as one json encoded string
 *
 * @since 1.0.0
 *
 * @param array $post_array
 * @param string $meta_key
 * @param WP_REST_Request $rest_request
 *
 * @return false|string
 */
function blockswp_share_block_extra_rest_field_callback($post_array, $meta_key, $rest_request) {

    $post = get_post($post_array['id']) ? get_post(get_post($post_array['id']))
        : $rest_request['id'] && get_post($rest_request['id']) ? get_post($rest_request['id'])
            : null;

    //@TODO probably remove this encoding - keep in mind JSON.parse is used in front-end.js for this data
    return $post ? wp_json_encode(blockswp_share_block_post_to_attributes($post)) : wp_json_encode(blockswp_share_block_get_attributes());

}

/**
 * Prefix an attribute name with namespace
 *
 * "shareTitle" - how's its addressed in React, becomes blockswp_share_shareTitle, how it's addressed in meta API.
 *
 * @since 1.0.0
 *
 * @param string $attribute Attribute name
 * @return string
 */
function blockswp_share_block_prefix_attribute($attribute){
    $attribute = 'blockswp_share_' . $attribute;
    return $attribute;
}


/**
 * Enqueue the block's assets for the editor.
 *
 * @since 0.1.0
 */
function blockswp_share_block_editor_assets() {
    wp_enqueue_script(
        'blockswp-share-block',
        plugins_url( 'block.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
        WP_BLOCKS_SHARE_BLOCK
    );

    wp_enqueue_style(
        'blockswp-share-block-editor', // Handle.
        plugins_url( 'editor.css', __FILE__ ), // Block editor CSS.
        array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
        WP_BLOCKS_SHARE_BLOCK
    );
}



/**
 * Enqueue the block's assets for the frontend.
 *
 * @since 0.1.0
 */
function blockswp_share_block_block_assets() {
    wp_enqueue_style(
        'blockswp-share-block-frontend',
        plugins_url( 'style.css', __FILE__ ),
        array( 'wp-blocks' ),
        WP_BLOCKS_SHARE_BLOCK
    );

    wp_register_script(
        'blockswp-share-front',
        plugins_url( 'front.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
        WP_BLOCKS_SHARE_BLOCK
    );

    if ( ! is_admin() ) {
        wp_enqueue_script( 'blockswp-share-front' );
        $post = null;
        if (get_post()) {
            $r = new WP_REST_Request();
            $r->set_attributes( array( 'id' => get_post()->ID ) );
            $r->set_param('id', get_post()->ID);
            $controller =  new WP_REST_Posts_Controller(get_post_type(get_post()));
            $post = rest_ensure_response($controller->get_item($r));

        }

        wp_localize_script('blockswp-share-front', 'BLOCKSWP_SHARE_FRONT', array(
                'post' => $post,
            )
        );
    }
}

/**
 * Given a WP_Post, get all saved (or default if not saved) attributes
 *
 * @since 1.0.0
 *
 * @param WP_Post $post Post object to use for shareUrl and shareTitle attributes from.
 * @return array
 */
function blockswp_share_block_post_to_attributes( WP_Post $post ){


    $attributes = blockswp_share_block_get_attributes($post);

    $prepared_attributes = array();

    foreach ( $attributes as $attribute => $args ){
        $meta_key = blockswp_share_block_prefix_attribute( $attribute );
        $value =  $post->$meta_key || 0 == $post->$meta_key ?   $post->$meta_key : $args[ 'default' ];
        if( 'boolean' === $args[ 'type' ] ) {
            $value = rest_sanitize_boolean($value);
        }elseif( 'iconSize' === $attribute ){
            $value = 32 <= absint( $value ) && 128 >= absint($value) ? intval($value) : 32;
        } elseif ( 'shareUrl' === $attribute ){
            $value = esc_url( $value );
        } else{
            $value = esc_attr($value);
        }

        $prepared_attributes[esc_attr($attribute) ]= $value;

    }

    return $prepared_attributes;

}

/**
 * Get all of our attributes with defaults
 *
 * @since 1.0.0
 *
 * @param WP_Post|null $post Optional Post object to use for shareUrl and shareTitle attributes from. Default is null, which will attempt to use get_post()
 * @return array
 */
function blockswp_share_block_get_attributes(WP_Post $post = null ) {
    if( ! $post ){
        $post = get_post();
    }

    $attributes = array(
        'shareUrl' => array(
            'default' => $post ? get_permalink($post) : '',
            'type' => 'string'
        ),
        'shareTitle' => array(
            'default' => $post ? $post->post_title : '',
            'type' => 'string'
        ),
        'showCounts' => array(
            'default' => false,
            'type' => 'boolean'
        ),
        'showIcon' => array(
            'default' => true,
            'type' => 'boolean'
        ),
        'iconSize' => array(
            'default' => 32,
            'type' => 'integer'
        ),
        'showFacebook' => array(
            'default' => true,
            'type' => 'boolean'
        ),
        'showTwitter' => array(
            'default' => true,
            'type' => 'boolean'
        ),
        'showWhatsapp' => array(
            'default' => true,
            'type' => 'boolean'
        ),
        'showPinterest' => array(
            'default' => 1,
            'type' => 'boolean'
        ),
        'showLinkedin' => array(
            'default' => true,
            'type' => 'boolean'
        ),
        'showReditt' => array(
            'default' => true,
            'type' => 'boolean'
        ),
        'showTumblr' => array(
            'default' => true,
            'type' => 'boolean'
        ),
        'showEmail' => array(
            'default' => true,
            'type' => 'boolean'
        )
    );
    return $attributes;
}
