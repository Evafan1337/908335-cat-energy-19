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

  function burgerClickHandler() {
    // alert('click!');
    console.log(changeCount);
    nav.classList.toggle('navigation-menu--show');
    if(changeCount === 1){
      burgerOpen.classList.add('hidden');
      burgerClose.classList.remove('hidden');
      // burgerIcon.classList.remove('navigation__burger-icon--open');
      // burgerIcon.class
      // burgerOpen.classList.remove(b)
      // burger.style.background = 'none';
      // burger.style.background = 'url(../img/icon-close.svg)';
      changeCount = 0;
    }else if(changeCount === 0){
      burgerClose.classList.add('hidden');
      burgerClose.classList.remove('hidden');
      // burger.style.background = 'none';
      // burger.style.background = 'url(../img/icon-mobile-menu.svg);'
      changeCount = 1;
    }
    // burger.classList.toggle('header__burger--open');
  }

  burger.addEventListener('click', burgerClickHandler);

  var progress = document.querySelector('.demo__progress');

  if (progress) {
    var btnBefore = progress.querySelector('.demo__progress-button--before');
    var btnAfter = progress.querySelector('.demo__progress-button--after');
    console.log(btnBefore);
    console.log(btnAfter);

    btnBefore.addEventListener('click', function () {
      // alert('before click');
      if (progress.classList.contains('demo__progress--after')) {
        progress.classList.remove('demo__progress--after');
      }
    })

    btnAfter.addEventListener('click', function () {
      // alert('after click');
      if (!progress.classList.contains('demo__progress--after')) {
        progress.classList.add('demo__progress--after');
      }
    })

    if (docWidth >= tabletWidth) {
      var imgBefore = progress.querySelector('.demo__illustration--before');
      var imgAfter = progress.querySelector('.demo__illustration--after');
      var scale = progress.querySelector('.demo__progress-bar');
      var range = scale.querySelector('.demo__range');

      range.addEventListener('input', function() {
        imgBefore.style.width = (100 - range.value) + '%';
        imgAfter.style.width = range.value + '%';
      })

      btnBefore.addEventListener('click', function () {
        imgBefore.style.width = '100%';
        imgAfter.style.width = '0%';
        range.value = 0;
      })

      btnAfter.addEventListener('click', function () {
        imgBefore.style.width = '0%';
        imgAfter.style.width = '100%';
        range.value = 100;
      })
    }
  }

})();
