import {markerGroup} from './map.js';
import {showOfferPopup} from './map.js';

const filter = document.querySelector('.map__filters');
const type = filter.querySelector('#housing-type');
const price = filter.querySelector('#housing-price');
const rooms = filter.querySelector('#housing-rooms');
const guests = filter.querySelector('#housing-guests');
const wifi = filter.querySelector('#filter-wifi');
const dishwasher = filter.querySelector('#filter-dishwasher');
const parking = filter.querySelector('#filter-parking');
const washer = filter.querySelector('#filter-washer');
const conditioner = filter.querySelector('#filter-conditioner');

const filterType = (el) => type.value === el.offer.type || type.value === 'any';
const filterRooms = (el) => +rooms.value === +el.offer.rooms || rooms.value === 'any';
const filterQuests = (el) => +guests.value === +el.offer.guests || guests.value === 'any';

const filterPrice = (el) => {
  switch (price.value) {
    case 'any':
      return true;
    case 'low':
      return el.offer.price < 10000;
    case 'middle':
      return el.offer.price >= 10000 && el.offer.price <= 50000;
    case 'high':
      return el.offer.price > 50000;
  }
};

const filterWifi = (el) => {
  if(el.offer.features && wifi.checked) {
    return el.offer.features.includes(wifi.value);
  } else if(!wifi.checked) {
    return true;
  }
};

const filterDishwasher = (el) => {
  if(el.offer.features && dishwasher.checked) {
    return el.offer.features.includes(dishwasher.value);
  } else if(!dishwasher.checked) {
    return true;
  }
};

const filterParking = (el) => {
  if(el.offer.features && parking.checked) {
    return el.offer.features.includes(parking.value);
  } else if(!parking.checked) {
    return true;
  }
};

const filterWasher = (el) => {
  if(el.offer.features && washer.checked) {
    return el.offer.features.includes(washer.value);
  } else if(!washer.checked) {
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
  if(el.offer.features && conditioner.checked) {
    return el.offer.features.includes(conditioner.value);
  } else if(!conditioner.checked) {
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
