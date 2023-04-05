<?php

function add_cors_http_header(){
	header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');

add_action( 'rest_api_init', function( ) {

	// register the rest endpoint
	register_rest_route( 'post/v1', 'post', array(
			'methods' => array( 'GET', ),
			'get_callback' => function( $data ) {
				$posts = get_fields('options');
  			return  $posts;
					// return 'HERE';
			},
	) );

} );

add_action('rest_api_init', function() {
  register_rest_route( 'markers/v1', '/post/', array(
      'methods' => 'GET',
      'callback' => 'markers_endpoint'
  ));
});
add_action('acf/init', 'my_acf_op_init');
function my_acf_op_init()
{

  // Check function exists.
  if (function_exists('acf_add_options_page')) {

    // Register options page.
    $option_page = acf_add_options_page(array(
      'page_title'    => __('Theme options'),
      'menu_title'    => __('Theme options'),
      'menu_slug'     => 'options',
      'capability'    => 'edit_posts',
      'redirect'      => false
    ));

}}


function  markers_endpoint( $request_data ) {
  // $posts = [
  //   'offer_title' => get_field('offer_title', 'options'),
  //   'offer_title2' => get_field('offer_title', 'options')
  // ];
  $posts = get_fields('options');
  return  $posts;
}
  