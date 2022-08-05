$(document).ready(function(){
    $('#main_box').click(function(){
        $("img").removeClass("highlight");
        $("#main_box").css("background-image", ""); 
    });
   $('.mini_boxes').click(function(event){
        event.stopPropagation();
        $("img").removeClass("highlight");
        $(this).addClass("highlight");
    });
    $('img').click(function(){
        var background = $(this).attr('src');
        console.log(background);
        $("#main_box").css("background-image", "url("+background+")");
    });
});