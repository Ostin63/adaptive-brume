/*modal header*/
const headerMenu = document.querySelector('.header__menu');
const modalNav = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalLinks = document.querySelectorAll('.modal__link');

headerMenu.onclick = () => {
  modalNav.classList.add('show');
}

modalClose.onclick = () => {
  modalNav.classList.remove('show');
}

for (let i = 0; i < modalLinks.length; i++){
  modalLinks[i].onclick = () => {
    modalNav.classList.remove('show');
  }
}

/*Function sliders*/

const switchSlides = function (switchers, slides) {
  for (let i = 0; i < switchers.length; i++) {
    switchers[i].onclick = () => {

      for (let i = 0; i < switchers.length; i++) {
        switchers[i].classList.remove('button-active');
        slides[i].classList.remove('active');
      }

      switchers[i].classList.add('button-active');
      slides[i].classList.add('active');
    };
  }
}

/*Top slider*/

const sliderButtons = document.querySelectorAll('.header__slider-button');
const sliderItems = document.querySelectorAll('.header__item-img');

switchSlides(sliderButtons, sliderItems);

/*Slider design*/

$(function () {
  $(".slide-one").owlCarousel({
    loop: true,
    margin: 17,
    center: true,
    nav: false,
    pagination: false,
    touchDrag: true,
    responsive: {
      '0': {
        items: 1.2
      },
      '320': {
        items: 1.2
      },
      '768': {
        items: 1.2,
        margin: 40
      },
      '1360': {
        margin: 0,
        items: 1.65
      }
    }
  });
});

/*Slider services*/

const servicesButtons = document.querySelectorAll('.services__item-control');
const servicesItems = document.querySelectorAll('.services__item');

switchSlides(servicesButtons, servicesItems);

/*Slider reviews*/

const reviewsButtons = document.querySelectorAll('.reviews__slider-button');
const reviewsItems = document.querySelectorAll('.reviews__item');

switchSlides(reviewsButtons, reviewsItems);