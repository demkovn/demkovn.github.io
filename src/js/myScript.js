$(document).ready(function(){
    
    /*Прелоадер*/
    $(".preloader").css("display","none");
    
    /*Калькулятор*/
    function calculate(){
        let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
        let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
        $(".days .digit").text(days);
        $(".price .digit").text(sum);
    }
    $("select").on("change", function(){
        calculate();
    });
    calculate();
    
    
    /*Скроллиниг*/
    $(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();

               $('.section').each((i, el) => {

                   if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           });
    
/*Бегущие цифры (не работает)*/
 const time = 2000; // ms
const step = 1; 

function outNum(num, elem) {
	let l = document.querySelector('#' + elem);
	n = 0;
	let t = Math.round(time/(num/step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(interval);
		}
		l.innerHTML = n;
	},
		t);
}

outNum(120, 'benefits_num');
outNum(4600, 'benefits_num1');    
outNum(340, 'benefits_num2');
outNum(23, 'benefits_num3');   
    
    

    /*Отложенная аннимация (не работает)*/
    let options = {threshold:[0.7]};
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.skills_item');
        elements.each((i, el) => {
            observer.observe(el);
        });
  
     });

function onEntry(entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('.show_skills_item');
            }
        })
    }
    
/*Якорные ссылки*/
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top -20 + "px"});
});

/*Картинка в модальном окне (не работает)*/
$(function(){
 $('.modal_window').magnificPopup({type: 'image'
 });
 });


