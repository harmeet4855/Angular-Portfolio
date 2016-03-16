// A $( document ).ready() block.
$( document ).ready(function() {
    setTimeout(function(){ 
        $("#visible-menu").click(function(){
            $("md-tabs-wrapper").fadeOut();
            $("#visible-menu").fadeOut();
            $("#hidden-menu").fadeIn();
        });

        $("#hidden-menu").click(function(){
            // $(".menu-visibility").fadeIn();
            $("md-tabs-wrapper").fadeIn();
            $("#hidden-menu").fadeOut();
            $("#visible-menu").fadeIn();
        });
    }, 2000);
});