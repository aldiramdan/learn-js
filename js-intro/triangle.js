function printSegitiga(x) {
  let result = ""
  for (let i = x; i > 0; i--) {
    for (let j = 1; j <= x; j++) {
      if (i >= j) {
        result += j + " "
      } else {
        result += " "
      }
    }
    result += '\n'
  }
  return result
}
console.log(printSegitiga(5));