
<div class="bg-dark">
<a href="https://via.placeholder.com/500x90.png?text=there+is+no+impressum" target="_blank">Impressum</a>
</div>
<nav id="footer-navigation" class="site-navigation footer-navigation" role="navigation">
       <?php wp_nav_menu( array( 'theme_location' => 'footer', 'menu_class' => 'nav-menu', 'fallback_cb' => false ) ); ?>
</nav>

</duv>
</div>
<?php wp_footer(); ?>

<script type="text/javascript">


function lastwindow(){
    window.history.back();
};

    (function($) {

function yeah(){
    $("#ja").animate({rotate: '+=360deg'}, 3000);
    yeah();
};

var angle = 0;
setInterval(function() {
    $("#ja")
        .css('-webkit-transform', 'rotate('+angle+'deg)')
        .css('-moz-transform', 'rotate('+angle+'deg)')
        .css('-ms-transform', 'rotate('+angle+'deg)');
    angle++;
}, 20);

    })(jQuery);
</script>

<script>

</script>
</body>
</html>