
function getRandomNumber(min,max) {
  if (min<0||max<0||min===max||max<min) {
    console.log('Числа должны быть положительными и не равны, \nВторое число должно быть больше первого')
  } else {
    let num = Math.round(Math.random()*max+min);
    num > max ? num = max : num = num;
    return num;
  }
}

function getRandomCoordinate(min,max,dec) {
  if (min<0||max<0||min===max||max<min) {
    console.log('Числа должны быть положительными и не равны, \nВторое число должно быть больше первого')
  } else {
    let num = +(Math.random()*max+min).toFixed(dec);
    num > max ? num = max - +Math.random().toFixed(dec) : num = num; 
    return num;   
  }
}

// Avatar
function getAvatar() {
  let num = getRandomNumber(0,10)
  num !== 10 ? num = '0' + num.toString() : num = num.toString();

  return {avatar: `img/avatars/user${num}.png`}
}

// Offer
function getOffer() {
  const types = ['palace','flat','house','bungalow','hotel'];
  const time = ['12:00','13:00','14:00'];
  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const photos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ]

  function getArrValue(arr) {
    let newArr = [];
    for (let i = 0; i < getRandomNumber(0,arr.length); i++) {
      let randomFeature = arr[getRandomNumber(0,arr.length-1)];
      if (newArr.indexOf(randomFeature) === -1) {
        newArr.push(randomFeature)
      }
    };
    return newArr
  }

  return {
    title: 'Some title',
    addres: `${getRandomCoordinate(35.65,35.7,5)} , ${getRandomCoordinate(139.7,139.8,5)}`,
    price: getRandomNumber(500,10000),
    type: types[getRandomNumber(0,types.length-1)],
    rooms: getRandomNumber(1,5),
    guests: getRandomNumber(1,10),
    checkin: time[getRandomNumber(0,time.length-1)],
    checkout: time[getRandomNumber(0,time.length-1)],
    features: getArrValue(features),
    description: 'Some description',
    photos: getArrValue(photos)
  }
}


//Location
function getLocation() {
  return {
    lat: getRandomCoordinate(35.65,35.7,5),
    lng: getRandomCoordinate(139.7,139.8,5)
  }
}



console.log(getOffer())