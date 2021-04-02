$(document).ready(function(){
    $("#posts_link").click(function(){
        $("#test").load("https://allenriath.github.io/kazumi-site/posts.html", function() {
            alert("Load has been performed");
        });
    });
});