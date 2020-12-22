export const navbar = document.querySelector('#navbar');
export const hamburger = document.querySelector('.menu-btn');
export const menuClose = document.querySelector('.menu-close');
export const appWrapper = document.querySelector('#app-wrapper');
export const menuOverlay = document.querySelector('.menu-overlay');
export const showcase = document.querySelector('#showcase');
export const card = document.querySelectorAll('.card');
export const collection = document.querySelector('#collection');
export const arrivalItem = document.querySelectorAll('.arrival__item');
export const video = document.querySelector('.video');

hamburger.addEventListener('click', (e) => {
  navbar.style.transform = 'translateX(0)';
  menuOverlay.classList.add('menu-overlay--on');
  if (menuOverlay.classList.contains('menu-overlay--off')) {
    menuOverlay.classList.remove('menu-overlay--off');
  }
});

menuClose.addEventListener('click', (e) => {
  menuOverlay.classList.remove('menu-overlay--on');
  menuOverlay.classList.add('menu-overlay--off');
  navbar.style.transform = 'translateX(-100%)';
});

// Menu Close on Overlay Click
menuOverlay.addEventListener('click', (e) => {
  menuOverlay.classList.remove('menu-overlay--on');
  menuOverlay.classList.add('menu-overlay--off');
  navbar.style.transform = 'translateX(-100%)';
});

window.addEventListener('scroll', () => {
  if (pageYOffset >= 205) {
    card.forEach((card) => {
      card.classList.add('slideIn');
    });
  } else {
    card.forEach((card) => {
      card.classList.remove('slideIn');
    });
  }

  if (pageYOffset >= 600) {
    collection.style.opacity = '1';
  } else {
    collection.style.opacity = '0';
  }

  // if (pageYOffset >= 900) {
  //   arrivalItem.forEach((item) => {
  //     item.classList.add('slideIn');
  //   });
  // } else {
  //   arrivalItem.forEach((item) => {
  //     item.classList.remove('slideIn');
  //   });
  // }
  if (pageYOffset >= 900) {
    arrivalItem.forEach((item) => {
      item.classList.add('fadeIn');
    });
  } else {
    arrivalItem.forEach((item) => {
      item.classList.remove('fadeIn');
    });
  }
});
