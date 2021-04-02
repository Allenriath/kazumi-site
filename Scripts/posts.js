$(document).ready(function(){
    $("#posts_link").click(function(){
        $("#test").load("https://allenriath.github.io/kazumi-site/posts.html", function( response, status, xhr) {
               console.log ("Response: "+ response +"Status: "+ xhr.status +"Status Text "+ xhr.statusText);
        });
    });
});