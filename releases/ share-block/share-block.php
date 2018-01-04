<?php
/**
Plugin Name: SocialBlock by BlocksWP.com
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

add_action( 'plugins_loaded', 'blockswp_share_block_init' );

/**
 * Init plugin
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
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	wp_enqueue_style(
		'blockswp-share-block-editor', // Handle.
		plugins_url( 'editor.css', __FILE__ ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
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
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

    wp_enqueue_script(
        'blockswp-share-front',
        plugins_url( 'front.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'front.js' )
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
