<div id="kommentar_formular">
    
<h3 id="respond">Kommentare auf dieses öffentliche Tagebuch, welches über das weltweite Netz verfügbar ist schreiben:</h3>
 
<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">
 
   <p>
      <input type="text" name="author" id="author" value="<?php echo $comment_author; ?>" size="22"/>
      <label for="author">Name</label>
   </p>
 
   <p>
      <input type="text" name="email" id="email" value="<?php echo $comment_author_email; ?>" size="22" tabindex="2" />
      <label for="email">Email <small>(wird veröffentlicht und alle daten an die fbi weitergeleitet)</small></label>
   </p>
 
   <p>
      Kommentar
    </p><p>
      <textarea name="comment" id="comment" style="width: 300px;" rows="2" tabindex="4"></textarea>
   </p>
 
   <p>
      <input name="submit" type="submit" id="submit" tabindex="5" value="Kommentar abschicken" />
      <input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" />
   </p>
 
   <?php do_action('comment_form', $post->ID); ?>
 
</form>
 
</div> <!-- kommentar_formular -->
    
<!-- Kommentar Zeile -->
<ol class="comment-list">
            <?php
                wp_list_comments( array(
                    'style'       => 'ol',
                    'short_ping'  => true,
                    'avatar_size' => 50,
                ) );
            ?>
        </ol>