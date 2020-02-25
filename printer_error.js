function printerError(s) {
  let str = s.split('')
  let soma = 0
  str.forEach((a) => !(a.charCodeAt() >= 97 && a.charCodeAt() <= 109) ? soma++ : null, soma)
  return `${soma}/${str.length}`
}

Test.describe("printerError",function() {
  Test.it("Basic tests",function() {   
      var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
      Test.assertEquals(printerError(s), "3/56")
  })})

  function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}