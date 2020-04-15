// https://codepen.io/fpecher/pen/BaNNMMb


let menuIcon = $('.toggle-nav');
let nav = $('.nav');
let navItem = $('.nav__item');

menuIcon.click(function () {
  $(this).toggleClass('toggle-nav--open');

  if (nav.hasClass('nav--open')) {
    navItem.removeClass('nav__item--open');

    setTimeout(function () {
      nav.removeClass('nav--open');
    }, 1200);
  }
  else {
    nav.addClass('nav--open');

    setTimeout(function () {
      navItem.addClass('nav__item--open');
    }, 550);
  }
});