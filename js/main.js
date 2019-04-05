$(function() {
    $(".nav-link").on('click', function() {
        $("#nav-bar").removeClass("responsive");
        //$("#main").css("width", "100%");
        //$("#footer").css("width", "100%");
        $("#container").css("width", "100%");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    })
})

//var menuOpened = false;

function toggleMenu() {
    $("#nav-bar").toggleClass("responsive");
    /*$("#main").css("display", "inline-block");*/
    if ($("#nav-bar").hasClass("responsive")) {
        //$("#main").css("width", "50%");
        //$("#footer").css("width", "50%");
        $("#container").css("width", "50%");
        $(".line").removeClass("hidden");
        $(".fas").removeClass("fa-bars");
        $(".fas").addClass("fa-times");
    } else {
        $("#container").css("width", "100%");
        //$("#main").css("width", "100%");
        //$("#footer").css("width", "100%");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    }


    /*if (menuOpened === false) {
        menuOpened = true;
        $("#main").css("width", "50%");
    } else {
        menuOpened = false;
        $("#main").css("width", "100%");
    }*/
}

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 786) {
        $("#nav-bar").removeClass("responsive");
        $("#container").css("width", "100%");
        //$("#main").css("width", "100%");
        //$("#footer").css("width", "100%");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    }
});