(function($){
var lastPage = '';
    // fetch a random quote post
    $('#new-quote-button').on('click', function (event) {
        event.preventDefault();
        lastPage = document.URL;
        // Grabbing a random post, https://css-tricks.com/using-the-wp-api-to-fetch-posts/
        var api_url = api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1';

        $.ajax({
            method: 'get',
            url: api_url
            }).done( function(post) {
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
                var push_url = api_vars.home_url + '/' + post[0].slug; 
                history.pushState(null, null, push_url);

            });
            $(window).on('popstate', function() {
                // console.log("popstate fired!");
                if (window.location.hash.indexOf('qm-overview ') === 1) {
                  return false;
                } else {
                  window.location.replace(lastPage);
                }
            });
    }); // End new quote button


    // Submit a quote
    $('.submit-quote').on('click', function (event) {
        event.preventDefault();
        $.ajax({
            method: 'post',
            url: api_vars.root_url + 'wp/v2/posts/',
            data: {
                title: $('#quote-author').val(),
                content: $('#quote-the-quote').val(),
                _qod_quote_source: $('#quote-source').val(),
                _qod_quote_source_url: $('#quote-source-url').val(),
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce );
            }
        }).done( function(data) {
            $('#quote-author').val('');
            $('#quote-the-quote').val('');
            $('#quote-source').val('');
            $('#quote-source-url').val('');
            $('#quote-submit-form').hide({duration:300});
            $('.quote-submit-wrapper .entry-title').append('<p>' + api_vars.success + '</p>');
        }).fail(function () {
            $('.quote-submit-wrapper .entry-title').append('<p>' + api_vars.failure + '</p>');
        });
    }); // End submit quote button

// $('body').append('');
})(jQuery);
