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
var convertToRoman = function convertToRoman(num) {
  var parseNum = parseInt(num);

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
   * return a string of characters made from the
   * string parameters. The string make-up
   * depends on the value of floor.
   */


  var getRomanNumeral = function getRomanNumeral() {
    var floor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var smallestNumeral = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var midNumeral = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var largestNumeral = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    return floor <= 3 ? smallestNumeral.repeat(floor) : floor === 4 ? smallestNumeral.concat(midNumeral) : floor === 5 ? midNumeral : floor > 5 && floor < 9 ? midNumeral.concat(smallestNumeral.repeat(floor - 5)) : smallestNumeral.concat(largestNumeral);
  };

  var romanNumerals = "";
  /** Thousands */

  romanNumerals += "M".repeat(Math.floor(parseNum / 1000));
  parseNum %= 1000;
  /** Hundreds */

  romanNumerals += getRomanNumeral(Math.floor(parseNum / 100), "C", "D", "M");
  parseNum %= 100;
  /** Tens */

  romanNumerals += getRomanNumeral(Math.floor(parseNum / 10), "X", "L", "C");
  parseNum %= 10;
  /** Ones */

  romanNumerals += getRomanNumeral(parseNum, "I", "V", "X");
  return romanNumerals;
};

module.exports = convertToRoman;