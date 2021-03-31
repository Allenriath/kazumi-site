$(document).ready(function(){
    $("#posts_link").click(function(){
        $("#baseContainer").load("/tagged/arts");
    });
});