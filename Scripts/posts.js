$(document).ready(function(){
    $("#posts_link").click(function(){
        $("#test").load("https://allenriath.github.io/kazumi-site/posts.html", function( response, status, xhr) {
               console.log (response +" "+ xhr.status +" "+ xhr.statusText);
        });
    });
});