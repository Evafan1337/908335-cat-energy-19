// alert('menu.js');

(function () {

var nav = document.querySelector('.navigation-menu');
// console.log(nav);
  var burger = document.querySelector('.navigation__burger');
  var burgerIcon = document.querySelector('.navigation__burger-icon');
  var burgerOpen = document.querySelector('.navigation__burger-icon--open');
  var burgerClose = document.querySelector('.navigation__burger-icon--close')
  var changeCount = 1;
  console.log(burger);
  console.log(changeCount);
  var docWidth = document.body.clientWidth;
  var tabletWidth = 768;


  nav.classList.remove('navigation-menu--nojs');
  burgerIcon.classList.remove('navigation__burger-icon--nojs');

  function burgerClickHandler() {
    console.log('burgerClickHandler');
    nav.classList.toggle('navigation-menu--show');
    if(changeCount === 1){
      console.log('open');
      burgerOpen.classList.add('hidden');
      burgerClose.classList.remove('hidden');
      changeCount = 0;
    }else if(changeCount === 0){
      console.log('closed');
      burgerClose.classList.add('hidden');
      burgerOpen.classList.remove('hidden');
      changeCount = 1;
    }
    // burger.classList.toggle('header__burger--open');
  }

  burger.addEventListener('click', burgerClickHandler);
})();
