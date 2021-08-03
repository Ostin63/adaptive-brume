/* eslint-disable no-shadow */
/* eslint-disable id-length */
/* eslint-disable no-undef */
/*modal header*/
const body = document.querySelector('body');
const headerMenu = body.querySelector('.header__menu');
const modalNav = body.querySelector('.modal');
const modalClose = body.querySelector('.modal__close');
const modalLinks = body.querySelectorAll('.modal__link');

const sliderButtons = body.querySelectorAll('.header__slider-button');
const sliderItems = body.querySelectorAll('.header__item-img');

const reviewsButtons = body.querySelectorAll('.reviews__slider-button');
const reviewsItems = body.querySelectorAll('.reviews__item');

const contactsForm = body.querySelector('.contacts__form');
const inputName = contactsForm.querySelector('.contacts__input--name');
const inputPhone = contactsForm.querySelector('.contacts__input--phone');
const inputMail = contactsForm.querySelector('.contacts__input--mail');
// const fields = contactsForm.querySelectorAll('.contacts__input');

const getTemplateContent = (block, item) =>
  block.querySelector(`#${item}`)
    .content
    .querySelector(`.${item}`);

const success = getTemplateContent(body, 'alert__success');
const errorLoading = getTemplateContent(body, 'alert__error-loading');

const dataSabmitUrl = 'https://echo.htmlacademy.ru/';

const onAddModalNav = () => modalNav.classList.add('show');
const onremoveModalNav = () => modalNav.classList.remove('show');

const successElement = success.cloneNode(true);
const successErrorLoading = errorLoading.cloneNode(true);

const resetForm = () => {
  inputName.value = '';
  inputPhone.value = '';
  inputMail.value = '';
};

// const onChangInput = (evt) => {
//   if (!inputName.value || !inputPhone.value || !inputMail.value) {
//     evt.preventDefault();
//     for (let i = 0; i < fields.length; i++){
//       // eslint-disable-next-line prefer-const
//       let field = fields[i];
//       if (!field.value) {
//         field.classList.add('error');
//       }
//     }
//   }
// };

const switchSlides = (switchers, slides) => {
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
};

switchSlides(sliderButtons, sliderItems);

$(() => {
  $('.slide-one').owlCarousel({
    loop: true,
    margin: 17,
    center: true,
    nav: false,
    pagination: false,
    touchDrag: true,
    responsive: {
      '0': {
        items: 1.2,
      },
      '320': {
        items: 1.2,
      },
      '768': {
        items: 1.2,
        margin: 40,
      },
      '1360': {
        margin: 20,
        items: 1.65,
      },
    },
  });
});

const servicesButtons = document.querySelectorAll('.services__item-control');
const servicesItems = document.querySelectorAll('.services__item');

switchSlides(servicesButtons, servicesItems);

const isEscEvent = (evt) => evt.key === keys.escape || evt.key === keys.esc;

const onSuccessRemove = () => {
  successElement.remove();
  document.removeEventListener('click', onSuccessRemove);
};

const onElementEscRemove = () => {
  if (isEscEvent) {
    onSuccessRemove();
    document.removeEventListener('keydown', onElementEscRemove);
  }
};

const alertSuccess = () => {
  body.append(successElement);
  document.addEventListener('keydown', onElementEscRemove);
  document.addEventListener('click', onSuccessRemove);
};

const onErrorRemove = () => {
  successErrorLoading.remove();
  document.removeEventListener('click', onErrorRemove);
};

const onErrorEscRemove = () => {
  if (isEscEvent) {
    onErrorRemove();
    document.removeEventListener('keydown', onErrorEscRemove);
  }
};

const alertError = () => {
  body.append(successErrorLoading);
  document.addEventListener('keydown', onErrorEscRemove);
  document.addEventListener('click', onErrorRemove);
};

const sendData = (url, bodyForm, alertSucces, error) => {
  fetch(url, {
    method: 'POST',
    body: bodyForm,
  })
    .then((response) => {
      if (response.ok) {
        alertSucces();
      } else {
        error();
      }
    })
    .catch(() => {
      error();
    });
};

const alertForm = () => {
  alertSuccess();
  resetForm();
};

const onFormSend = (evt) => {
  evt.preventDefault();
  // onChangInput();
  const formData = new FormData(evt.target);

  sendData(dataSabmitUrl, formData, alertForm, alertError);
};

switchSlides(reviewsButtons, reviewsItems);

headerMenu.addEventListener('click', onAddModalNav);
modalClose.addEventListener('click', onremoveModalNav);

for (let i = 0; i < modalLinks.length; i++) {
  modalLinks[i].addEventListener('click', onremoveModalNav);
}

contactsForm.addEventListener('submit', onFormSend);
