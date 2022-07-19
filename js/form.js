export {toggleFormStatus}

import {getGuestsCountName} from './util.js';
import {showSuccessPopup,showErrorPopup} from './user_modals.js';
import {sendData} from './fetch.js';

const form = document.querySelector('.ad-form');
const formFieldsetsList = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.querySelectorAll('select, fieldset');

/* Функция вкл./выкл. форму */
function toggleActiv(arr, status) {
  arr.forEach(el => el.disabled = status)
}

function toggleFormStatus(status) {
  status ? form.classList.add(`${form.classList[0]}--disabled`) : form.classList.remove(`${form.classList[0]}--disabled`)
  status ? mapFilters.classList.add(`${mapFilters.classList[0]}--disabled`) : mapFilters.classList.remove(`${mapFilters.classList[0]}--disabled`)
  toggleActiv(formFieldsetsList, status);
  toggleActiv(mapFiltersList, status);
};

/* Валидация формы */
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_ROOMS = 100;

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error'
});

const validateTitle = (val) => val.length >= MIN_TITLE_LENGTH && val.length <= MAX_TITLE_LENGTH;
pristine.addValidator(form.querySelector('#title'), validateTitle);

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
  if (+guestsCount.value === 0 || +roomsCount.value === MAX_ROOMS) {
    return 'Не для гостей';
  }
  return `Необходимо не более ${roomsCount.value} ${getGuestsCountName(roomsCount.value)}`;
};

const addRoomsErorr = () => {
  if (+guestsCount.value === 0 || +roomsCount.value === MAX_ROOMS) {
    return 'Не для гостей';
  }
  return `Вмещает не более ${roomsCount.value} ${getGuestsCountName(roomsCount.value)}`;
};

pristine.addValidator(roomsCount, validateGuests, addRoomsErorr);
pristine.addValidator(guestsCount, validateGuests, addGuestsErorr);

const priceInput = form.querySelector('#price');
const TypeField = document.querySelector('#type');
const TypePrice = {
  bungalow : 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const typeChanging = (evt) => {
  const minRoomPrice = TypePrice[evt.target.value];
  priceInput.placeholder = minRoomPrice;
  priceInput.min = minRoomPrice;
  pristine.validate(priceInput);
};

TypeField.addEventListener('change', typeChanging);

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
    const formData = new FormData(evt.target)
    sendData(showSuccessPopup,showErrorPopup,formData)
  }
});