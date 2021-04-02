$(document).ready(function(){
    $("#posts_link").click(function(){
        $("#test").load("https://allenriath.github.io/kazumi-site/posts.html", function( response, status, xhr) {
            if ( status == "error") {
                var msg = "Error while loading file: ";
                console.log( msg + xhr.status + " " + xhr.statusText);
            }
        });
    });
});