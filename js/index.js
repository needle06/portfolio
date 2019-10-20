import Swiper from 'swiper';
import '../node_modules/swiper/css/swiper.css';

let expansionButton = document.querySelector('.expansion-panel-btn');
let educationList = document.querySelector('.education');

function changeBtnBg() {
  expansionButton.classList.toggle('up');
}
function showList() {
  if (window.getComputedStyle(educationList).display === 'none') {
    educationList.style.display = 'block';
  } else {
    educationList.style.display = 'none';
  }
  changeBtnBg();
}

expansionButton.addEventListener('click', showList);

let mySwiper = new Swiper ('.swiper-container', {

  direction: 'horizontal',
  loop: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
  
let btnDescription = document.querySelectorAll('.show-description');


function showDescription(event) {
  let target = event.target;
  let textDiv = target.nextElementSibling;
  
  if (window.getComputedStyle(textDiv).display === 'none') {
    target.innerHTML = "Hide description";
    textDiv.style.display = 'block';
  } else {
    target.innerHTML = "Show description";
    textDiv.style.display = 'none';
  }
  
}

btnDescription.forEach(el => el.addEventListener('click', showDescription));