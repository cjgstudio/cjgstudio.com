if (navigator.cookieEnabled === true) {

    if (document.cookie.indexOf("visited") == -1) {
        jQuery('body').prepend('<div id="cookie" style="font-size:60%;line-height:190%"><div id="wrapper"><h2>Cookies on this website</h2><p>If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies from this website. If you would like to change your preferences you may do so by following the instructions <a href="http://www.aboutcookies.org/Default.aspx?page=1" rel="nofollow">here</a>.</p><div id="close"><a href="#" id="closecookie">&#x2716; Close</a></div><div style="clear:both"></div></div></div>');
        jQuery('head').append('<style type="text/css">#cookie {position:fixed;left:0;bottom:0;width:100%;height:100%;background:rgb(0,0,0);background:rgba(0,0,0,0.9);z-index:9999;}#cookie #wrapper {padding:20px;}#cookie h2 {color:#ffffff;padding-top:0;display:block;text-align:center;font-family:Montserrat,ariel,sans-serif;font-size:2em}#cookie p {color:#BEBEBE;display:block;font-family:ariel,sans-serif;font-size:1.8em}#cookie #close{text-align:center;}#closecookie{color:#ffffff;font-family:ariel,sans-serif;font-size:2em;text-decoration:none}@media only screen and (min-width: 480px) {#cookie {height:auto;}#cookie #wrapper{max-width:980px;margin-left:auto;margin-right:auto;}#cookie h2{width:18%;margin-top:0;margin-right:2%;float:left;text-align:right;}#cookie p {width:68%;margin:0 1%;float:left;}#cookie #close{width:9%;float:right;}}</style>');
        jQuery('#cookie').fadeIn("fast");
        jQuery('#closecookie').click(function() { jQuery('#cookie').fadeOut("fast"); });
        document.cookie = "visited=yes; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
    }
}