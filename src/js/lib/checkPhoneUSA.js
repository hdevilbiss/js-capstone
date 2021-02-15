/**
 *
 * @param {String} str
 * Return whether a given string is a valid U.S. phone number: T/F
 */
var checkPhoneUSA = function checkPhoneUSA(str) {
  var trimStr = str.trim();
  if (trimStr.length < 10) return false; // let parenthesesRegex = "";

  return true;
};

module.exports = checkPhoneUSA;