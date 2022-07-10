export {createOfferArray, arrOffer}

import {getRandomNumber,getRandomCoordinate,getArrValue} from './util.js';
import {types,time,features,photos,descriptions} from './data_base.js';

// Avatar
function getAvatar() {
  let num = getRandomNumber(1,10)
  num !== 10 ? num = '0' + num.toString() : num = num.toString();

  return {avatar: `img/avatars/user${num}.png`}
}

//Location
function getLocation() {
  return {
    lat: getRandomCoordinate(35.65,35.7,5),
    lng: getRandomCoordinate(139.7,139.8,5)
  }
}

// Offer
function getOffer() {
  return {
    author: getAvatar(),
    offer: {
      title: 'Some title',
      addres: `${getRandomCoordinate(35.65, 35.7, 5)} , ${getRandomCoordinate(139.7, 139.8, 5)}`,
      price: getRandomNumber(500,10000),
      type: types[getRandomNumber(0,types.length-1)],
      rooms: getRandomNumber(1,5),
      guests: getRandomNumber(1,10),
      checkin: time[getRandomNumber(0,time.length-1)],
      checkout: time[getRandomNumber(0,time.length-1)],
      features: getArrValue(features),
      description: descriptions[getRandomNumber(0,descriptions.length-1)],
      photos: getArrValue(photos)
    },
    location: getLocation()
  }
}

function createOfferArray() {
  let offerArr = [];
  for (let i = 0; i < 10; i++) {
    offerArr.push(getOffer())
  };
  return offerArr;
}
 let arrOffer = createOfferArray();