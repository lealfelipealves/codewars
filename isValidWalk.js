// function isValidWalk(walk) {
//   if(walk.length > 0 && walk.length <= 10) {
//     let flag = []
//     walk.filter(i => RegExp('[n|s|w|e]').test(i) ? flag.push(true) : flag.push(true), flag)
//     if(flag.find(j => j === true)) {
//       return `should return true`;
//     } else {
//       return `should return false`;
//     }
//   }
//   return 'should return false';
// }


function isValidWalk(walk) {
  let obj = {
    n:0,
    s:0,
    w:0,
    e:0
  }
  
  walk.filter(i => i === 'n' ? obj.n++ : '', obj)
  walk.filter(i => i === 's' ? obj.s++ : '', obj)
  walk.filter(i => i === 'w' ? obj.w++ : '', obj)
  walk.filter(i => i === 'e' ? obj.e++ : '', obj)

  return walk.length === 10 && (obj.n === obj.s && obj.e === obj.w)
}

console.log(isValidWalk([]))
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))

// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function(a){return a==val;}).length;
//   }
//   return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }

function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}