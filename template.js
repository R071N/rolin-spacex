// Углы для кнопки
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(180, 0, 1, 5);
ctx.fillRect(176, 0, 5, 1);
ctx.fillRect(0, 29, 1, 5);
ctx.fillRect(0, 33, 5, 1);

// Бургер Меню
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');
  document.body.classList.toggle('stop-scroll');
})
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');
  })
})
