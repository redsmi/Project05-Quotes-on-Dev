(function($){

// fetch a random quote post
    $('#new-quote-button').on('click', function (event) {
        event.preventDefault();
        console.log('ajax workx');
        // Grabbing a random post, https://css-tricks.com/using-the-wp-api-to-fetch-posts/
        var api_url = api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1';

        $.ajax({
            method: 'get',
            url: api_url
            }).done( function(post) {
                // alert('Success test');
                console.log('got the get');
                $('.entry-title').text(post[0].title.rendered); //Author name, just string
                $('.entry-content').html(post[0].content.rendered); //Quote, includes <p> tags
                // Conditional quote source and source url, strings
                if (post[0]._qod_quote_source && post[0]._qod_quote_source_url) {
                    $('.source').html(', <a>' + post[0]._qod_quote_source + '</a>');
                    $('.source a').attr('href', post[0]._qod_quote_source_url);
                } else if (post[0]._qod_quote_source) {
                    $('.source').html(', ' + post[0]._qod_quote_source);
                } else {
                    $('.source').html('');
                }
                // Push variable with slug to update URL with author name
                var push_url = api_vars.home_url + "/" + post[0].slug; 
                history.pushState(null, null, push_url);

                // Revert to a previously saved state
                // window.addEventListener('popstate', function(event) {
                //     console.log('popstate fired!');
                
                //     updateContent(event.state);
                // });
            });
            
    });
// $('body').append('');


})(jQuery);