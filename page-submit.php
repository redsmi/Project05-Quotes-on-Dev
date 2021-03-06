<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

            <section class="quote-submit-wrapper">

                <header>
                    <?php the_title('<h1 class="entry-title">'); ?>
                </header>


                <?php 
                    if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ):
                ?>
                <form name="quoteForm" id="quote-submit-form">
                    <div class="quote-content">
                        <label for="quote-author">Author of Quote</label>
                        <input type="text" name="quote_author" id="quote-author">
                    </div>
                    <div class="quote-content">
                        <label for="quote-the-quote">Quote</label>
                        <textarea name="quote_the_quote" id="quote-the-quote" cols="20" rows="3"></textarea>
                    </div>
                    <div class="quote-content">
                        <label for="quote-source">Where did you find this quote? (e.g. book name)</label>
                        <input type="text" name="quote_source" id="quote-source">
                    </div>
                    <div class="quote-content">
                        <label for="quote-source-url">Provide the URL of the quote source, if available.</label>
                        <input type="url" name="quote_source_url" id="quote-source-url">
                    </div>

                    <input type="submit" class="submit-quote" value="Submit Quote">
                </form>
                <p class="submit-success-message" style="display:none;"></p>

                <?php else: ?>
                        <p>Sorry, you must be logged in to submit a quote!</p>
                        <p>
                            <?php echo sprintf( '<a href="%1s">%2s</a>', 
                            esc_url( wp_login_url() ), 'Click here to login.' ); ?>
                        </p>
                <?php endif; ?>
            </section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>

<!-- .on('click') $('#quote-submit-form').submit(); -->
