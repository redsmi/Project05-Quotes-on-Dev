# Quotes on Dev
Inspired by quotesondesign.com, Quotes on Dev is a website that uses WordPress REST API to display posts of programming quotes.

## Pages and functions:
A Homepage that displays an initial random post/quote.<br />
A button to fetch additional random posts on the front page using the WP API. Updates the URL and popstates.<br />
A blog post index page and a single view for blog posts.<br />
An About page and an Archives page sorting posts by Author, Categories, and Tags.<br />
A Submit a Quote page that accepts new quote submissions from the front-end of the site using WP API (for logged in users only), and sets those submissions to Draft by default. Displays a response for successful/unsuccessful submission.<br />
A 404 page with a search form, a Search Results page.<br />
All pages responsiveley designed using a mobile-first approach.<br />

## Technologies used:

MAMP – To install a local server environment in order to install and use WordPress.<br />
Node modules and Gulp – For running build tasks such as browser sync, code error checking, converting SASS to CSS, code minification.<br />
HTML, SASS/CSS – Structure and style website for mobile, tablet, and desktop view.<br />
Javascript, jQuery, AJAX – <br />
1. Make a GET request to a WP API endpoint using Ajax to dynamically add a new quote to the front page, and corresponding update the URL using the History API<br />
2. Make a POST request to a WP API endpoint using Ajax to submit a new quote to the quote to the site<br />
3. Clear the quote submission form and show an affirmative message when a quote is successfully submitted to the database<br />
4. Show an error message when a quote is not successfully submitted to the database<br />

PHP – The language of WordPress. PHP built-in functions, variables, arrays, loops, including, to create page templates, following the Wordpress Template Heiarchy. PHP files generate the site on the server (with the help of the Apache web server) so it can be rendered as HTML in the browser. Used along with Wordpress built-in functions to retrieve and output desired data. Hooks, Actions, Filters.<br />
1. Submit a Quote page display conditional if user is logged in and can edit posts<br />
2. Check if WordPress REST URL exists, then enqueue site scripts<br />
3. Localize a script (REST URL), using REST API nonce, to pass data to JavaScript<br />
4. Change the placeholder text in the back-end post editing<br />
5. Filter different pages to display different (1, 5, 10) items per page<br />

### WordPress back-end/dashboard, plugins: 
Select/utilize the desired custom theme directory<br />
Structure the Menu that will be fixed at the bottom of each page<br />
WordPress importer plugin - To import an XML file to populate the site with content<br />

