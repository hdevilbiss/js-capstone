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
  if (isNaN(parseInt(num))) {
    return;
  }
  let returnVal = [];
  let trackNum = num;
  console.log(trackNum % 1);
  if (trackNum % 1000 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 1000); i++) {
      returnVal.push("M");
      trackNum = trackNum - 1000;
    }
  }
  if (trackNum % 900 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 900); i++) {
      returnVal.push("CM");
      trackNum = trackNum - 900;
    }
  }
  if (trackNum % 500 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 500); i++) {
      returnVal.push("D");
      trackNum = trackNum - 500;
    }
  }
  if (trackNum % 400 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 400); i++) {
      returnVal.push("CD");
      trackNum = trackNum - 400;
    }
  }
  if (trackNum % 100 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 300); i++) {
      returnVal.push("C");
      trackNum = trackNum - 100;
    }
  }
  if (trackNum % 90 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 90); i++) {
      returnVal.push("XC");
      trackNum = trackNum - 90;
    }
  }
  if (trackNum % 50 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 50); i++) {
      returnVal.push("L");
      trackNum = trackNum - 50;
    }
  }
  if (trackNum % 40 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 40); i++) {
      returnVal.push("XL");
      trackNum = trackNum - 40;
    }
  }
  if (trackNum % 10 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 10); i++) {
      returnVal.push("X");
      trackNum = trackNum - 10;
    }
  }
  if (trackNum % 9 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 9); i++) {
      returnVal.push("IX");
      trackNum = trackNum - 9;
    }
  }
  if (trackNum % 5 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 5); i++) {
      returnVal.push("V");
      trackNum = trackNum - 5;
    }
  }
  if (trackNum % 4 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 4); i++) {
      returnVal.push("IV");
      trackNum = trackNum - 4;
    }
  }
  if (trackNum % 1 < 1) {
    for (let i = 0; i <= Math.floor(trackNum % 1); i++) {
      returnVal.push("I");
      trackNum = trackNum - 1;
    }
  }
  return returnVal.join("");
}

module.exports = convertToRoman;

console.log(convertToRoman("quack"));
console.log(convertToRoman(2));
console.log(convertToRoman("1"));
console.log(convertToRoman(3000));
