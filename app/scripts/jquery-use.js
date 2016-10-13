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

        $("md-tab-item").click(function(){
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });

        $(window).on('hashchange', function(e){
            $("md-tab-item").click(function(){
                $('html, body').animate({scrollTop : 0},1000);
                return false;
            });
        });
    }, 2000);
});