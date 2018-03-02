(function($){
var lastPage = '';
// fetch a random quote post
    $('#new-quote-button').on('click', function (event) {
        event.preventDefault();
        console.log('ajax workx');
        lastPage = document.URL;
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

            });
            $(window).on('popstate', function() {
                console.log("popstate fired!");
                if (window.location.hash.indexOf('qm-overview or whatever') === 1) {
                  return false;
                }else {
                  window.location.replace(lastPage);
                }
            });
    });
// $('body').append('');


    $('.submit-quote').on('click', function (event) {
        event.preventDefault();
        $.ajax({
            method: 'post',
            url: api_vars.root_url + 'wp/v2/posts/',
            data: {
                title: 'testing string',
                _qod_quote_source: 'testing source'
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce );
            }
        }).done( function(data) {
            console.log(data);
            alert('Success! Comments are closed for this post.');
        });
    
    });


    // $('#close-comments').on('click', function(event) {
    //     event.preventDefault();
    //     $.ajax({
    //        method: 'post',
    //        url: red_vars.rest_url + 'wp/v2/posts/' + red_vars.post_id,
    //        data: {
    //           comment_status: 'closed'
    //        },
    //        beforeSend: function(xhr) {
    //           xhr.setRequestHeader( 'X-WP-Nonce', red_vars.wpapi_nonce );
    //        }
    //     }).done( function(response) {
    //        alert('Success! Comments are closed for this post.');
    //     });
    //  });


})(jQuery);
