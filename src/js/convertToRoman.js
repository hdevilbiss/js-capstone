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
  /**
   *
   * @param {Integer} floor
   * @param {String} smallestNumeral
   * @param {String} midNumeral
   * @param {String} largestNumeral
   * Given a number, `floor`, from 1 to 9,
   * create a return array. Push the other string parameters
   * onto the array depending on the value of floor.
   */
  const pusher = (floor, smallestNumeral, midNumeral, largestNumeral) => {
    return floor <= 3
      ? smallestNumeral.repeat(floor)
      : floor === 4
        ? smallestNumeral.repeat(floor)
        : floor === 5
          ? midNumeral
          : (floor > 5 && floor < 9)
            ? midNumeral.concat(smallestNumeral.repeat(floor - 5))
            : smallestNumeral.concat(largestNumeral);
    if (floor > 10){
      return;
    }
    else if (floor <= 3) {
      return smallestNumeral.repeat(floor);
    }
    else if (floor === 4) {
      return smallestNumeral.concat(midNumeral);
    }
    else if (floor === 5) {
      return midNumeral;
    }
    else if (floor > 5 && floor < 9) {
      return midNumeral.concat(smallestNumeral.repeat(floor - 5));
    }
    else {
      return smallestNumeral.concat(largestNumeral);
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
    returnArr.push(pusher(floor, "C", "D", "M"));
    mutateNum = mutateNum - (floor * 100);
  }
  if (mutateNum >= 10) {
    let floor = Math.floor(mutateNum / 10);
    returnArr.push(pusher(floor, "X", "L", "C"));
    mutateNum = mutateNum - (floor * 10);
  }
  if (mutateNum >= 1) {
    returnArr.push(pusher(mutateNum, "I", "V", "X"));
  }
  return returnArr.join("");
}

module.exports = convertToRoman;

console.log(convertToRoman("quack"));
console.log(convertToRoman(2));
console.log(convertToRoman("1"));
console.log(convertToRoman(3493));
