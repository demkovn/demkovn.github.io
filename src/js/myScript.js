"use strict"

let ready = confirm("Расчитать стоимость и сроки создания вашего сайта?");
if(ready != true){
    calculator = null;
}

let sum = 0, days = 0;

function calculator(){
let site = prompt("Какой тип сайта?      1 - Сайт-визитка        2 - Корпоративный сайт      3 - Интернет-магазин");
    
if(site == "1"){
    sum += 1000;
    days += 2;
    }
else if(site == "2"){
    sum += 3000;
    days += 3;
    }
else if( site== "3"){
    sum += 6000;
    days += 5;
    }
else{
    alert("Выберите один из предложенных вариантов!");
    calc();
    }
    
let design = prompt("Какой тип дизайна?      1 - Шаблонный       2 - Уникальный        3 - WOW-дизайн");
    
if(design == "1"){
    sum += 2000;
    days += 1;
    }
else if(design == "2"){
    sum += 5000;
    days += 3;
    }
else if(design == "3"){
    sum += 8000;
    days += 5;
    }
else{
    alert("Выберите один из предложенных вариантов!");
    calc();
    }
    
let adaptive = prompt("Какой тип адаптивности?       1 - Только ПК        2 - Только мобильный сайт        3 - ПК + Мобильный");

if(adaptive == "1"){
    sum += 3000;
    days += 1;
    }
else if(adaptive == "2"){
    sum += 3000;
    days += 2;
    }
else if(adaptive == "3"){
    sum += 5000;
    days += 5;
    }
else{
    alert("Выберите один из предложенных вариантов!");
    calc();
    }
    
}
calculator();

alert("Стоимость: " + sum + " рублей        Сроки: " + days + " дней");