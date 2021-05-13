/*modal header*/
const headerMenu = document.querySelector('.header__menu');
const modalNav = document.querySelector('.modal__nav');

headerMenu.onclick = () => {
  modalNav.classList.add('show');
}

/*Function sliders*/

const switchSlides = function (switchers, slides) {
  for (let i = 0; i < switchers.length; i++) {
    switchers[i].addEventListener('click', function () {

      for (let i = 0; i < switchers.length; i++) {
        switchers[i].classList.remove('button-active');
        slides[i].classList.remove('active');
      }

      switchers[i].classList.add('button-active');
      slides[i].classList.add('active');
    });
  }
}

/*Top slider*/

const sliderButtons = document.querySelectorAll('.header__slider-button');
const sliderItems = document.querySelectorAll('.header__item-img');

switchSlides(sliderButtons, sliderItems);