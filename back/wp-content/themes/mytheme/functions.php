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
					return 'HERE';
			},
	) );

} );