function squareDigits(num) {
  let numbers = num.toString().split('')
  let result = []
  numbers.forEach(number => result.push(number * number), result);
  return parseInt(result.join(''));
}

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

console.log(squareDigits(9119))