$(document).ready(function(){
    
    /*Прелоадер*/
    $(".center-body").css("display","none");
          
 });


/*Якорные ссылки*/
$('button[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top});
});


