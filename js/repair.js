let btnSwitch = document.querySelector('.switch-size');
let container = document.querySelector('.container');
function switchSize() {
  if (parseInt(window.getComputedStyle(container).width) > 375) {
    container.style.width = '375px'
    btnSwitch.innerHTML = 'Desktop';
    container.classList.add('centred');
    document.body.style.background = 'gray';
  } else {
    btnSwitch.innerHTML = 'Mobile';
    container.style.width = '';
    document.body.style.background = 'white';
    container.classList.remove('centred');
  }
}
btnSwitch.addEventListener('click', switchSize);
