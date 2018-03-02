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
          });
    });
// $('body').append('');

// history api, 
// history.pushState() push variable with slug to update url
// so back/forward works

// submit a new quote with the forum using ajax

})(jQuery);