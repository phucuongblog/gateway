jQuery(function($) {
    // Smooth Scrolling
    $(".backtop a, a.register").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });
    // Show - Hide Back To Top Button
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $(".backtop").addClass("show");
        } else {
            $(".backtop").removeClass("show");
        }
    });
    $(".backtop").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    // Change icon navbar-toggler
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('actived').delay(300).queue(function(next){
            $(this).toggleClass('is-active');
            next();
        });
    });
    // Search Form
    $('.search-btn').click(function(){
        $('.search-form').css('display','block');
    });
    // Menu Popup
    $('.menu-toggle').click(function(){
        $('.menu-popup').addClass('active');
    });
    $('.close-menu').click(function(){
        $('.menu-popup').removeClass('active');
    });
    // Header Noti
    $('.close-noti').click(function(){
        $('.header-noti').slideUp(600);
    });
    // Story Carousel
    $('.story-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        dots:true,
        dotsSpeed:1000,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
    // Hoptac Carousel
    $('.hoptac-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        dots:true,
        dotsSpeed:1000,
        mouseDrag:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    });
    // CSVC Carousel
    $('.csvc-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        dots:true,
        dotsSpeed:1000,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // Founder Carousel
    $('.founder-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots:true,
        dotsSpeed:500,
        mouseDrag:false,
        items:1
    });
    // Video Popup 1
    $('.show-1').click(function(){
        var videoURL1 = $('.playerID1').prop('src');
        videoURL1 += "?autoplay=1";
        $('.playerID1').prop('src',videoURL1);
        $('.video-1').addClass('active');
    });
    $('.close-1').click(function(){
        var videoURL1 = $('.playerID1').prop('src');
        videoURL1 = videoURL1.replace("?autoplay=1", "");
        $('.playerID1').prop('src','');
        $('.playerID1').prop('src',videoURL1);
        $('.video-1').removeClass('active');
    });
    // Video Popup 2
    $('.show-2').click(function(){
        var videoURL2 = $('.playerID2').prop('src');
        videoURL2 += "?autoplay=1";
        $('.playerID2').prop('src',videoURL2);
        $('.video-2').addClass('active');
    });
    $('.close-2').click(function(){
        var videoURL2 = $('.playerID2').prop('src');
        videoURL2 = videoURL2.replace("?autoplay=1", "");
        $('.playerID2').prop('src','');
        $('.playerID2').prop('src',videoURL2);
        $('.video-2').removeClass('active');
    });
    // English Block
    $('.eng-block:nth-child(2n+2) .eng-col-1').addClass('order-1 order-lg-2');
    $('.eng-block:nth-child(2n+2) .eng-col-2').addClass('order-2 order-lg-1');
});
$(document).mouseup(function(e) {
    if (!$(".search-form").is(e.target) && $(".search-form").has(e.target).length === 0) {
        $(".search-form").css('display','none');
    }
});
