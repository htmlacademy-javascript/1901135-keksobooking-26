
function getRandomNumber(min,max) {
  if (min<0||max<0||min===max||max<min) {
    console.log('Числа должны быть положительными и не равны, \nВторое число должно быть больше первого')
  } else{
    let num = Math.round(Math.random()*max+min);
    num > max ? num = max : num = num;
    console.log(num);
    return num;
  }
}

function getRandomCoordinate(min,max,dec) {
  if (min<0||max<0||min===max||max<min) {
    console.log('Числа должны быть положительными и не равны, \nВторое число должно быть больше первого')
  } else {
    let num = +(Math.random()*max+min).toFixed(dec);
    num > max ? num = max - +Math.random().toFixed(dec) : num = num;
    console.log(num);  
    return num;   
  }
}


getRandomNumber(9,18)

getRandomCoordinate(5,10,4)
