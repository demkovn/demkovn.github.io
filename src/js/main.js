$(document).ready(function(){
    
    /*Прелоадер*/
    $(".preloader").css("display","none");
          
 });


/*Якорные ссылки*/
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top -20 + "px"});
});


