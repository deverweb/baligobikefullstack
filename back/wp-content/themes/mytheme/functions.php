<?php

function add_cors_http_header(){
	header("Access-Control-Allow-Origin: *");
}

function remove_editor() {
  remove_post_type_support('page', 'editor');
}
add_action('admin_init', 'remove_editor');



add_action('rest_api_init', function () {
  register_rest_route('markers/v1', '/save-file', [
    'methods' => 'POST',
    'callback' => 'markers_save_file',
    
  ]);
});

function markers_save_file(WP_REST_Request $request) {
  $file = $request->get_file_params()['file'];
  if (!$file) {
    return new WP_Error('no_file', 'Файл не найден.', ['status' => 400]);
  }
  $file_type = wp_check_filetype($file['name']);
  if (!$file_type || !in_array($file_type['ext'], ['jpg', 'jpeg', 'png'])) {
    return new WP_Error('invalid_file_type', 'Пожалуйста, выберите только изображение!', ['status' => 400]);
  }
  if (!wp_is_upload_file($file['tmp_name'])) {
    return new WP_Error('upload_failed', 'Не удалось загрузить файл.', ['status' => 500]);
  }
  $upload_dir = wp_upload_dir();
  $target_dir = $upload_dir['path'] . '/' . basename($file['name']);
  $target_url = $upload_dir['url'] . '/' . basename($file['name']);
  if (move_uploaded_file($file['tmp_name'], $target_dir)) {
    return ['file_url' => $target_url];
  } else {
    return new WP_Error('upload_failed', 'Не удалось загрузить файл.', ['status' => 500]);
  }
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
 
	$bikes = [];
	$bikesOrigin = get_posts([
		'post_type' => 'bike',
		'post_status' => 'publish',
		'numberposts' => -1
		// 'order'    => 'ASC'
	]);
	
	foreach ($bikesOrigin as $bike) {
		array_push($bikes, get_fields($bike->ID));
	}
  $common = get_fields('options');
  $main_page = get_fields(24);
  $invest_page = get_fields(141);
  $contacts_page = get_fields(143);
  $about_page = get_fields(139);
  $faq_page = get_fields(137);
	$posts = [
		'main_page' => $main_page,
		'invest_page' => $invest_page,
		'contacts_page' => $contacts_page,
		'about_page' => $about_page,
		'faq_page' => $faq_page,
		'common' => $common,
		'bikes' => $bikes
	];
  return  $posts;
}
  