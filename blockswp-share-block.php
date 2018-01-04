<?php
/**
Plugin Name: SocialBlock by BlocksWP.com
Plugin URI: https://BlocksWP.com/social-block
Description: Social share block for the WordPress Gutenberg block editor
Author: BlocksWP.com
Version: 1.0.0-b-2
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
define( 'WP_BLOCKS_SHARE_BLOCK', '1.0.0-b-2' );

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
        add_action( 'enqueue_block_assets', 'blockswp_share_block_block_assets' );
    }

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

    wp_enqueue_script(
        'blockswp-share-front',
        plugins_url( 'front.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
        WP_BLOCKS_SHARE_BLOCK
    );

    $post = null;
    if( get_post( ) ){
        $r = new WP_REST_Request();
        $r->set_attributes( ['id' => get_post()->ID ] );
        $r->set_param( 'id', get_post()->ID  );
        $post = rest_ensure_response(
            ( new WP_REST_Posts_Controller(get_post_type( get_post() ) ) )
                ->get_item($r)
        );

    }
    wp_localize_script('blockswp-share-front', 'BLOCKSWP_SHARE_FRONT', array(
            'post' => $post
        )
    );
}
