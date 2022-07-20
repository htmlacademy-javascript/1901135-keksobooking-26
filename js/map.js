import {toggleFormStatus} from './form.js';
import {createCard} from './create_card.js';

export {showOfferPopup,markerGroup}

// Старотовые координаты
const START_LAT = 35.69755;
const START_LNG = 139.76097;

toggleFormStatus(true);

const map = L.map('map-canvas')
  .on('load', () => {toggleFormStatus(false)})
  .setView({
    lat: START_LAT,
    lng: START_LNG,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


// Главная метка
const mainMarkIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarkMarker = L.marker({
  lat: START_LAT,
  lng: START_LNG,
}, {
  draggable: true,
  icon: mainMarkIcon,
}, );

mainMarkMarker.addTo(map);

//Выбор адреса
const roundCoordinate = coord => coord.toFixed(5);

const addressInput = document.querySelector('#address');
addressInput.readOnly = true;
addressInput.value = `${roundCoordinate(START_LAT)}, ${roundCoordinate(START_LNG)}`;
mainMarkMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  addressInput.value = `${roundCoordinate(latLng.lat)}, ${roundCoordinate(latLng.lng)}`;
});

// Добавление объявлений
const markerGroup = L.layerGroup().addTo(map);

const ordinaryPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Балун
function showOfferPopup(offers) {
  offers.slice(0,10).forEach((card) =>  {
    const marker = L.marker({
      lat: card.location.lat,
      lng: card.location.lng,
    }, {
      ordinaryPinIcon,
    }, );

    marker
      .addTo(markerGroup)
      .bindPopup(createCard(card));
  });
}



