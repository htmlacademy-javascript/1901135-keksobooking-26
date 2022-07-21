import {getGuestsCountName} from './util.js';
import {showSuccessPopup,showErrorPopup} from './user_modals.js';
import {sendData} from './fetch.js';
import {createSlider} from './price-slider.js';

const form = document.querySelector('.ad-form');
const formFieldsetsList = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.querySelectorAll('select, fieldset');
const sliderElement = form.querySelector('.ad-form__slider');

/* Функция вкл./выкл. форму */
function toggleActiv(arr, status) {
  arr.forEach((el) => el.disabled = status)
};

function toggleFormStatus(status) {
  status ? form.classList.add(`${form.classList[0]}--disabled`) : form.classList.remove(`${form.classList[0]}--disabled`);
  status ? mapFilters.classList.add(`${mapFilters.classList[0]}--disabled`) : mapFilters.classList.remove(`${mapFilters.classList[0]}--disabled`);
  toggleActiv(formFieldsetsList, status);
  toggleActiv(mapFiltersList, status);
};

/* Валидация формы */

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error'
});

// Валидация заголовка
const validateTitle = (val) => val.length >= 30 && val.length <= 100;
pristine.addValidator(form.querySelector('#title'), validateTitle);

// Валидация количества гостей/комнат
const guestsCount = form.querySelector('#capacity');
const roomsCount = form.querySelector('#room_number');

const guestsValue  = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0]
};

const validateGuests = () => guestsValue[roomsCount.value].includes(+guestsCount.value);

const addGuestsErorr = () => {
  if (+guestsCount.value === 0 || +roomsCount.value === 100) {
    return 'Не для гостей';
  }
  return `Необходимо не более ${roomsCount.value} ${getGuestsCountName(roomsCount.value)}`;
};

const addRoomsErorr = () => {
  if (+guestsCount.value === 0 || +roomsCount.value === 100) {
    return 'Не для гостей';
  }
  return `Вмещает не более ${roomsCount.value} ${getGuestsCountName(roomsCount.value)}`;
};

pristine.addValidator(roomsCount, validateGuests, addRoomsErorr);
pristine.addValidator(guestsCount, validateGuests, addGuestsErorr);

// Слайдер с валидацией
createSlider();

const validateType = (value) => {
  if (value === 'bungalow') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100000
      },
      start: 0,
    });
  } else if (value === 'flat') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1000,
        max: 100000
      },
      start: 1000,
    });
  } else if (value === 'hotel') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 3000,
        max: 100000
      },
      start: 3000,
    });
  } else if (value === 'house') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 5000,
        max: 100000
      },
      start: 5000,
    });
  } else if (value === 'palace') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 10000,
        max: 100000
      },
      start: 10000,
    });
  };
};

pristine.addValidator(form.querySelector('#type'), validateType);

// Синхронизация полей времени
const checkInField = document.querySelector('#timein');
const checkOutField = document.querySelector('#timeout');

checkInField.addEventListener('change', (evt) => {
  checkOutField.value = evt.target.value;
});

checkOutField.addEventListener('change', (evt) => {
  checkInField.value = evt.target.value;
});


// Отправка формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const isValid = pristine.validate();

  if (isValid) {
    const formData = new FormData(evt.target);
    sendData(showSuccessPopup,showErrorPopup,formData);
  };
});

export {toggleFormStatus};
