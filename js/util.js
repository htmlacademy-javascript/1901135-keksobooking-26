export {getRandomNumber,getRandomCoordinate,getArrValue}

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