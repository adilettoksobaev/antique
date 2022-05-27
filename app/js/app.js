import $ from "jquery";
// import '~/app/libs/wow/wow.min.js';

$(function() {
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done')) {
          preloader.classList.add('done');
        }
    }, 1000);

    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".menu-mobile__content").toggleClass("open");
        $(".menu__bg").toggleClass("open");
    });
    
    $(".menu-mobile__content li a").click(function() {
        $(".menu-mobile__content").removeClass("open");
        $(".menu__bg").removeClass("open");
        $(".btn_mnu").removeClass("active");
    });

    $(".menu__bg").click(function() {
        $(".menu-mobile__content").removeClass("open");
        $(".menu__bg").removeClass("open");
        $(".btn_mnu").removeClass("active");
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 102) {
           $('.header__fixed').addClass('fixed');
        } else {
           $('.header__fixed').removeClass('fixed');
        }
    });

    $(".contact").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top - 40},'slow');
    });

    $('.sidebar__row li').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active'); 
        $('.dropdown').stop().slideUp();
        $('.active .dropdown').stop().slideDown();
        return false;
    });
    
});