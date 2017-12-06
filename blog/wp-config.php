<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ishou7wc_tiemprega');

/** MySQL database username */
define('DB_USER', 'ishou7wc_root');

/** MySQL database password */
define('DB_PASSWORD', 'TIOSA@2017');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'T=l{6?(6@S<aBwTBh|9M*=&?Gd:9K!U<kU9N;NR(QLITrH][D1iLb-]?!4$<~Q3%');
define('SECURE_AUTH_KEY',  'NZO?Y:7dD X-T--<mi9JS;(e&Ehra%ibu@x*n*#&^~NfL?f*nx?(fmloB>9S:6OG');
define('LOGGED_IN_KEY',    'tEg*n:AZO&f5>,%uViY9#`h{pS0hF-Ko%7HL&x AX;+MAb=dS1OOI~ZGepo8K<>I');
define('NONCE_KEY',        '9ym-Bze++CMyR#6Egqn;3ml-%31)3vVhnxjAZYiO|-K>;7Byx33{A,>Ri4[wqlH|');
define('AUTH_SALT',        ',/6dTp5CnZ%^bpx2TTmjZ9]WOGO!^ld0lBe]0_%R0h{Y}so3;0{wuRb;jL seR}r');
define('SECURE_AUTH_SALT', '5?w~d}9ZS20Ke)FgpwBrRs_^k {#4_C4 |Z7]?4_6$ H*C4t9>$~z]*<<MG?Z9B7');
define('LOGGED_IN_SALT',   '>YE58}OO0r!nenY lGdNi`8cppv5rM;0{vRYBG6wsc;TZR%<{RTz`n$P(@.8zK@t');
define('NONCE_SALT',       'B>S^kr;&6?gDZ^,Who/<82e+U5%19YHE2>WCFdzL`M~M;MyX}xTPVP94.va#9Wq|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
