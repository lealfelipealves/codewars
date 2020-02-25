function highAndLow(numbers){
  arr = numbers.split(' ');
  
  var min = arr.map(Number).reduce(function(a, b) {
    return Math.min(a, b);
  });

  var max = arr.map(Number).reduce(function(a, b) {
    return Math.max(a, b);
  });

  return `${max} ${min}`;
}

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
console.log(highAndLow("1 2 -3 4 5"))
console.log(highAndLow("42"))
