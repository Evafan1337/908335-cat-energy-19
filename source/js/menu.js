// alert('menu.js');

(function () {

var nav = document.querySelector('.navigation-menu');
// console.log(nav);
  var burger = document.querySelector('.navigation__menu-button');
  console.log(burger);
  var docWidth = document.body.clientWidth;
  var tabletWidth = 768;


  // nav.classList.remove('header__wrapper--nojs');

  function burgerClickHandler() {
    alert('click!');
    nav.classList.toggle('navigation-menu--show');
    // burger.classList.toggle('header__burger--open');
  }

  burger.addEventListener('click', burgerClickHandler);
})();
