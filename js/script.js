

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



$('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 100,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });



    var typed = new Typed(".typing", {
        strings: [ "2014"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    });


    var typed = new Typed(".typing-2 ", {
        strings: [ " &#8221; Небесна Сотня  &#8221; ?"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

    var typed = new Typed(".typingo", {
        strings: [ " Небесної Сотні ?"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
    
    var typed = new Typed(".typingo-2", {
        strings: [ "Небесної Сотні"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });


});





