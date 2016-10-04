// A $( document ).ready() block.
$( document ).ready(function() {
    setTimeout(function(){ 
        $("#visible-menu").click(function(){
            $("md-tabs-wrapper").slideUp();
            $("#visible-menu").fadeOut();
            $("#hidden-menu").fadeIn();
        });

        $("#hidden-menu").click(function(){
            // $(".menu-visibility").fadeIn();
            $("md-tabs-wrapper").slideDown();
            $("#hidden-menu").fadeOut();
            $("#visible-menu").fadeIn();
        });

        $("#visible-about").click(function(){
            $("#profile-about").slideUp();
            $("#visible-about").fadeOut();
            $("#hidden-about").fadeIn();
        });

        $("#hidden-about").click(function(){
            $("#profile-about").slideDown();
            $("#hidden-about").fadeOut();
            $("#visible-about").fadeIn();
        });


    }, 2000);
});