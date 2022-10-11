/*Отложенная аннимация skills*/

function delayAnimSkill(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('show_skills_item');
    }
  });
}

let optionsDelaySkill = {
  threshold: [0.5] };
let observerDelaySkill = new IntersectionObserver(delayAnimSkill, optionsDelaySkill);
let elementsDelaySkill = document.querySelectorAll('.skills_item');

for (let elm of elementsDelaySkill) {
  observerDelaySkill.observe(elm);
}

/*Отложенная аннимация statistics*/
function delayAnimStat(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('show_statistic_item');
    }
  });
}

let optionsDelayStat = {  threshold: [0.3] };
let observerDelayStat = new IntersectionObserver(delayAnimStat, optionsDelayStat);
let elementsDelayStat = document.querySelectorAll('.statistic_item');

for (let elm of elementsDelayStat) {
  observerDelayStat.observe(elm);
}

/*Подгрузка image*/
function delayImage(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.src = change.target.dataset.src;
    }
  });
}

let optionsImage = {  threshold: [0.3] };
let observerImage = new IntersectionObserver(delayImage, optionsImage);
let elementsImage = document.querySelectorAll('section');

for (let elm of elementsImage) {
  observerImage.observe(elm);
}