<?php
/**
 * Grundeinstellungen für WordPress
 *
 * Diese Datei wird zur Erstellung der wp-config.php verwendet.
 * Du musst aber dafür nicht das Installationsskript verwenden.
 * Stattdessen kannst du auch diese Datei als „wp-config.php“ mit
 * deinen Zugangsdaten für die Datenbank abspeichern.
 *
 * Diese Datei beinhaltet diese Einstellungen:
 *
 * * MySQL-Zugangsdaten,
 * * Tabellenpräfix,
 * * Sicherheitsschlüssel
 * * und ABSPATH.
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL-Einstellungen - Diese Zugangsdaten bekommst du von deinem Webhoster. ** //
/**
 * Ersetze datenbankname_hier_einfuegen
 * mit dem Namen der Datenbank, die du verwenden möchtest.
 */
define( 'DB_NAME', 'wordpress' );

/**
 * Ersetze benutzername_hier_einfuegen
 * mit deinem MySQL-Datenbank-Benutzernamen.
 */
define( 'DB_USER', 'wordpress' );

/**
 * Ersetze passwort_hier_einfuegen mit deinem MySQL-Passwort.
 */
define( 'DB_PASSWORD', 'wordpress' );

/**
 * Ersetze localhost mit der MySQL-Serveradresse.
 */
define( 'DB_HOST', 'db' );

/**
 * Der Datenbankzeichensatz, der beim Erstellen der
 * Datenbanktabellen verwendet werden soll
 */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Der Collate-Type sollte nicht geändert werden.
 */
define('DB_COLLATE', '');

/**#@+
 * Sicherheitsschlüssel
 *
 * Ändere jeden untenstehenden Platzhaltertext in eine beliebige,
 * möglichst einmalig genutzte Zeichenkette.
 * Auf der Seite {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * kannst du dir alle Schlüssel generieren lassen.
 *
 * Du kannst die Schlüssel jederzeit wieder ändern, alle angemeldeten
 * Benutzer müssen sich danach erneut anmelden.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ug?/5xm/S?=g].|*kCu/c)?70rD:8]G:Dri:LzlaZ4:P_i?iH3pn}tY 2.<n-/;v' );
define( 'SECURE_AUTH_KEY',  ']7v>w|72S4lV?~.%,jjG uUoofedP~-ka?Kj4`5F$yVgPy MjhVQvwS&$=x+!S%%' );
define( 'LOGGED_IN_KEY',    'x>i<Z5aJ~+lHTa$`QuzkNqw@YI=mj^D0mliHmTxJi:-a{fCW86(=B./cUGgETjM+' );
define( 'NONCE_KEY',        'i|g~%MtIQ`{M/.ErKHngu+.~KC9jrNN*(! qYw/Mr#6*m=}B2_,2DX>yK`%b3dqb' );
define( 'AUTH_SALT',        '*Y2`St,ZVNkv&A:z{W^(!Ug_wF=.$y}cu$yCf&w~OnEpcy2-T1naOaIRL$0{#Jyv' );
define( 'SECURE_AUTH_SALT', 'P=[43!|-wXau|A/;*;-JB08J<,PEEe[&U|<j}p%f=&u4^$Aopn32t|WAAoEqCJT.' );
define( 'LOGGED_IN_SALT',   'E7mz-sO@?TGyZ)OTAQ-9lZi:MEHCp~Y]S|:{!L!%/-Ui>{(Fl<(-c:o/vG:n0?*:' );
define( 'NONCE_SALT',       'aTEP17bLWp;4bkUdG^?wzKHwSkRw^[3 1SvJ^(i7Rvn=h_R .]Zjm23ENOK9vgG^' );
define( 'WC_GZD_ENCRYPTION_KEY', 'c5eca80542e6e95d306a09ae32dd60903e986e4dac0476c1bd575cce22849b8f' );

/**#@-*/

/**
 * WordPress Datenbanktabellen-Präfix
 *
 * Wenn du verschiedene Präfixe benutzt, kannst du innerhalb einer Datenbank
 * verschiedene WordPress-Installationen betreiben.
 * Bitte verwende nur Zahlen, Buchstaben und Unterstriche!
 */
$table_prefix = 'wp1_';

/**
 * Für Entwickler: Der WordPress-Debug-Modus.
 *
 * Setze den Wert auf „true“, um bei der Entwicklung Warnungen und Fehler-Meldungen angezeigt zu bekommen.
 * Plugin- und Theme-Entwicklern wird nachdrücklich empfohlen, WP_DEBUG
 * in ihrer Entwicklungsumgebung zu verwenden.
 *
 * Besuche den Codex, um mehr Informationen über andere Konstanten zu finden,
 * die zum Debuggen genutzt werden können.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Füge individuelle Werte zwischen dieser Zeile und der „Schluss mit dem Bearbeiten“ Zeile ein. */



/* Das war’s, Schluss mit dem Bearbeiten! Viel Spaß. */
/* That's all, stop editing! Happy publishing. */

/** Der absolute Pfad zum WordPress-Verzeichnis. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Definiert WordPress-Variablen und fügt Dateien ein.  */
require_once ABSPATH . 'wp-settings.php';
