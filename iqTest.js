function iqTest(numbers){
  let obj = {
    par: 0,
    impar: 0
  }

  let arr = numbers.split(' ').map(a => Number(a%2 == 0))
  let rs = arr.map(a => a ? obj.par++ : obj.impar++, obj)
  return arr.findIndex(a => (obj.par > obj.impar) ? a === 0 : a === 1, obj) + 1;
}

const iqTest = numbers => {
  numbers = numbers.replace(/(\d+\s)|(\d+$)/g, c => c % 2);
  return numbers.indexOf(numbers.match(/0/g).length > 1 ? '1' : '0') + 1;
}


function iqTest(numbers){
  var nums = numbers.split(" ").map( (x) => x & 1 )
  return  ( nums.reduce( ( a, b ) => a + b ) == 1 ? nums.indexOf(1) + 1 : nums.indexOf(0) + 1 )
}

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

console.log(iqTest("2 4 7 8 10"))
console.log(iqTest("1 2 2"))
console.log(iqTest("1 2 1 1"))