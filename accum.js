function accum(s) {
  const letters = s.split('').map((a, i) => {
    return a.charAt(0).toUpperCase() + a.repeat(i).toLowerCase()
  })
  return letters.join('-')
}

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
console.log(accum("MjtkuBovqrU"))
console.log(accum("EvidjUnokmM"))
console.log(accum("HbideVbxncC"))