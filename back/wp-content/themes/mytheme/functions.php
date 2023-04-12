<?php

function add_cors_http_header(){
	header("Access-Control-Allow-Origin: *");
}
add_action('init', 'baligo_init');

function baligo_init() {
	register_post_type('bike', [
		'label'  => 'Байки',
		'labels' => [
			'name'               => 'Байки', // основное название для типа записи
			'singular_name'      => 'Байк', // название для одной записи этого типа
			'add_new'            => 'Добавить Байк', // для добавления новой записи
			'add_new_item'       => 'Добавление Байка', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование Байка', // для редактирования типа записи
			'new_item'           => 'Новый Байк', // текст новой записи
			'view_item'          => 'Смотреть Байк', // для просмотра записи этого типа.
			'search_items'       => 'Искать Байк', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Байки', // название меню
		],
		'description'         => '',
		'public'              => true,
		'show_in_menu'        => null, // показывать ли в меню адмнки
		'show_in_rest'        => null, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => null,
		'menu_icon'           => "dashicons-products",
		'hierarchical'        => false,
		'supports'            => [ 'title'], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	]);
}

add_action('init','add_cors_http_header');

// add_action( 'rest_api_init', function( ) {

// 	// register the rest endpoint
// 	register_rest_route( 'post/v1', 'post', array(
// 			'methods' => array( 'GET', ),
// 			'get_callback' => function( $data ) {
// 				$posts = get_fields('options');
//   			return  $posts;
// 					// return 'HERE';
// 			},
// 	) );

// } );

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
      'page_title'    => __('Настройка контента'),
      'menu_title'    => __('Настройка контента'),
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
  