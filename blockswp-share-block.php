<?php
/**
 * Plugin Name: Share block by BlocksWP
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
        //$block->render_callback = 'blockswp_share_block_render_callback';
        WP_Block_Type_Registry::get_instance()->register($block );
        add_action( 'enqueue_block_editor_assets', 'blockswp_share_block_editor_assets' );
        add_action( 'enqueue_block_assets', 'blockswp_share_block_block_assets' );
    }

}


function blockswp_share_block_render_callback($atts){
    return $atts;
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
}
