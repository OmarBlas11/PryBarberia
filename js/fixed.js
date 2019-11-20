$(document).ready(function(){
    var altura=$('.nav-top').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop()>altura){
            $('.nav-top').addClass('fixed-header');
        }else{
            $('.nav-top').removeClass('fixed-header'); 
        }
    })
});