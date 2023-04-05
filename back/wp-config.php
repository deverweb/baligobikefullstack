<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'baligo' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'baligouser' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

define('JWT_AUTH_SECRET_KEY', 'secret');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(A,jI0Yuq|quB_H!m^T<6h0Sj=MU02(Xe4EihA>[OAC#s9T1O4yO$e{9,/;vq_d,' );
define( 'SECURE_AUTH_KEY',  'hPKPO!t]4ah6w`B!M0@/b+iQ}q2|_=(6XQ+u:e0F*=HK^uj49#ux;.A)Rc=L0(Ak' );
define( 'LOGGED_IN_KEY',    'I@]3p`[X2&sJ4<A{RgJ>A~?Q(&ZSLwwJQO?zAdK/ow`AF0t.Q;uWU(ddex_*x;j)' );
define( 'NONCE_KEY',        'Ac><If-v%*=q3V`84ELS4hrQ8#tzXqtB.YL6kLr~G-!CoR31kX6V8swD^$mcC#x9' );
define( 'AUTH_SALT',        'YI~z0ihbT0sOOQ[~As# H{XkW<f&snc?sv|2$>Z[pAj688VR|y2Kfe9>K ~>}D*F' );
define( 'SECURE_AUTH_SALT', 'E%kBRmNI:si<|4b**FP5:75Q[)2Vz8y^:X7!@Y!h:TBPP4rD{.>K!-v0Hks_;AMJ' );
define( 'LOGGED_IN_SALT',   'q5T-le|P:B2_R(r?{r|6qY4bUE}juuO8MI>ngF%[K2YnyA-G,9aK0T~0#&2K#pAN' );
define( 'NONCE_SALT',       'XNWg#gQl?YTH]=(Myp&6<NiAit?Hy0J6@qaZ-IJ5jjQMdwV5;[PADT2*$+w2k*%]' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
