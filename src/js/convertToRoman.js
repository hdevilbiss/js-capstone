/**
 *
 * @param {Number} num
 * Convert a given number to its Roman numeral equivalent.
 * I = 1
 * IV = 4
 * V = 5
 * IX = 9
 * X = 10
 * XL = 40
 * L = 50
 * XC = 90
 * C = 100
 * CD = 400
 * D = 500
 * CM = 900
 * M = 1000
 * This should be using recursion or reduce method,
 * but here we are using `if` statements, crutch vars,
 * and `for` loops
 */
const convertToRoman = (num) => {
  let parseNum = parseInt(num);
  let mutateNum = parseNum;
  if (isNaN(parseNum) || parseNum > 9999 || parseNum < 0) {
    return;
  }
  const pusher = (floor, numMin, numMid, numMax) => {
    if (floor > 10){
      return;
    }
    else if (floor <= 3) {
      for (let i = 0; i < floor; i++) {
        returnArr.push(numMin);
      }
    }
    else if (floor === 4) {
      returnArr.push(numMin.concat(numMid));
    }
    else if (floor === 5) {
      returnArr.push(numMid);
    }
    else if (floor > 5 && floor < 9) {
      returnArr.push(numMid);
      for (let i = 0; i < floor; i++) {
        returnArr.push(numMin);
      }
    }
    else {
      returnArr.push(numMin.concat(numMax));
    }
  }
  const returnArr = [];
  if (parseNum > 999) {
    let floor = Math.floor(parseNum / 1000);
    for (let i = 0; i < floor; i++) {
      returnArr.push("M");
      mutateNum = mutateNum - 1000;
    }
  }
  if (mutateNum >= 100) {
    let floor = Math.floor(mutateNum / 100);
    pusher(floor, "C", "D", "M");
    mutateNum = mutateNum - (floor * 100);
  }
  if (mutateNum >= 10) {
    let floor = Math.floor(mutateNum / 10);
    pusher(floor, "X", "L", "C");
    mutateNum = mutateNum - (floor * 10);
  }
  if (mutateNum >= 1) {
    pusher(mutateNum, "I", "V", "X");
  }
  return returnArr.join("");
}

module.exports = convertToRoman;

console.log(convertToRoman("quack"));
console.log(convertToRoman(2));
console.log(convertToRoman("1"));
console.log(convertToRoman(3493));
