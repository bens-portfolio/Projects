

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <?php if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' ); ?>
    <?php wp_head(); ?>
</head>

<body>

<div id="page">
<nav class="navbar navbar-expand-md navbar-light sticky-top" style="background-color: #F0E68C;" role="navigation" id="navbar">
<!-- Brand and toggle get grouped for better mobile display -->
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<a style="text-decoration: none;" href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a>
<?php
wp_nav_menu( array(
'theme_location'    => 'primary',
'depth'             => 2,
'container'         => 'div',
'container_class'   => 'dropdown',
'container_id'      => 'bs-example-navbar-collapse-1',
'menu_class'        => 'nav navbar-nav',
'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
'walker'            => new WP_Bootstrap_Navwalker()
) );
?>
</nav>
<div id="content">
	<div style="background-color: rgb(51, 53, 55);" id="sidebar">
				<?php get_sidebar('primary'); ?>
</div>
		<div id="main">
		<div style="text-align:center;">
	<h1>Sorry.. You're on the wrong site buddy..</h1>
	<a href="<?php echo home_url(); ?>">Back to Home</a>
</div>
<div style="text-align:center;">
<img src="http://localhost:8080/wp-content/uploads/2021/10/wack.png" id="ja" data-angle="0">
</div>



<?php get_footer(); ?> 

