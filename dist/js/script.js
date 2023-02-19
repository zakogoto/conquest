'use strict';

const burger = document.querySelector('.burger'),
      menu = document.querySelector('.float-menu'),
      menuItems = document.querySelectorAll('.float-menu__item'),
      overlay = document.querySelector('.float-menu__overlay'),
      close = document.querySelector('.float-menu__close');

burger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

function closeMenu(target) {
    target.classList.remove('active');
}

close.addEventListener('click', ()=> {
    closeMenu(menu);
});

overlay.addEventListener('click', ()=> {
    closeMenu(menu);
});
menuItems.forEach(item  => {
    item.addEventListener('click', ()=> {
        closeMenu(menu);
    })
})