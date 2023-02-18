'use strict';

const burger = document.querySelector('.burger'),
      menu = document.querySelector('.float-menu'),
      close = document.querySelector('.float-menu__close');

burger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

close.addEventListener('click', ()=> {
    menu.classList.remove('active');
});