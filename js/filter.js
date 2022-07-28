import {markerGroup} from './map.js';
import {showOfferPopup} from './map.js';

const MAX_LOW_PRICE = 10000;
const MAX_MIDDLE_PRICE = 50000;

const filter = document.querySelector('.map__filters');
const typeElement = filter.querySelector('#housing-type');
const priceElement = filter.querySelector('#housing-price');
const roomsElement = filter.querySelector('#housing-rooms');
const guestsElement = filter.querySelector('#housing-guests');
const wifiElement = filter.querySelector('#filter-wifi');
const dishwasherElement = filter.querySelector('#filter-dishwasher');
const parkingElement = filter.querySelector('#filter-parking');
const washerElement = filter.querySelector('#filter-washer');
const conditionerElement = filter.querySelector('#filter-conditioner');

const filterType = (el) => typeElement.value === el.offer.type || typeElement.value === 'any';
const filterRooms = (el) => +roomsElement.value === +el.offer.rooms || roomsElement.value === 'any';
const filterQuests = (el) => +guestsElement.value === +el.offer.guests || guestsElement.value === 'any';

const filterPrice = (el) => {
  switch (priceElement.value) {
    case 'any':
      return true;
    case 'low':
      return el.offer.price < MAX_LOW_PRICE;
    case 'middle':
      return el.offer.price >= MAX_LOW_PRICE && el.offer.price <= MAX_MIDDLE_PRICE;
    case 'high':
      return el.offer.price > MAX_MIDDLE_PRICE;
  }
};

const filterWifi = (el) => {
  if(el.offer.features && wifiElement.checked) {
    return el.offer.features.includes(wifiElement.value);
  } else if(!wifiElement.checked) {
    return true;
  }
};

const filterDishwasher = (el) => {
  if(el.offer.features && dishwasherElement.checked) {
    return el.offer.features.includes(dishwasherElement.value);
  } else if(!dishwasherElement.checked) {
    return true;
  }
};

const filterParking = (el) => {
  if(el.offer.features && parkingElement.checked) {
    return el.offer.features.includes(parkingElement.value);
  } else if(!parkingElement.checked) {
    return true;
  }
};

const filterWasher = (el) => {
  if(el.offer.features && washerElement.checked) {
    return el.offer.features.includes(washerElement.value);
  } else if(!washerElement.checked) {
    return true;
  }
};

const filterElevator = (el) => {
  const elevator = filter.querySelector('#filter-elevator');
  if(el.offer.features && elevator.checked) {
    return el.offer.features.includes(elevator.value);
  } else if(!elevator.checked) {
    return true;
  }
};

const filterConditioner = (el) => {
  if(el.offer.features && conditionerElement.checked) {
    return el.offer.features.includes(conditionerElement.value);
  } else if(!conditionerElement.checked) {
    return true;
  }
};

const filterMap = (data) => {
  markerGroup.clearLayers();

  const filtered = data
    .filter(filterType)
    .filter(filterPrice)
    .filter(filterRooms)
    .filter(filterQuests)
    .filter(filterWifi)
    .filter(filterDishwasher)
    .filter(filterParking)
    .filter(filterWasher)
    .filter(filterElevator)
    .filter(filterConditioner);

  showOfferPopup(filtered);
};

export {filterMap};
