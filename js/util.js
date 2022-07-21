function getRandomNumber(min,max) {
  if (min<0||max<0||min===max||max<min) {
    console.log('Числа должны быть положительными и не равны, \nВторое число должно быть больше первого');
  } else {
    let num = Math.round(Math.random()*max+min);
    num > max ? num = max : num = num;
    return num;
  }
}

function getRandomCoordinate(min,max,dec) {
  if (min<0||max<0||min===max||max<min) {
    console.log('Числа должны быть положительными и не равны, \nВторое число должно быть больше первого');
  } else {
    let num = +(Math.random()*max+min).toFixed(dec);
    num > max ? num = max - +Math.random().toFixed(dec) : num = num;
    return num;
  }
}

function getGuestsCountName(val) {
  const names = ['гостя','гостей','гостей'];
  return names[+val - 1];
}

function setFilterChange(cb) {
  const filter = document.querySelector('.map__filters');
  filter.addEventListener('change', () => {
    cb();
  });
}

function debounce(callback) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), 100);
  };
}

export {getRandomNumber,getRandomCoordinate,getGuestsCountName,setFilterChange,debounce};
