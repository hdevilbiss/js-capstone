/**
 *
 * @param {String} str
 * Return whether a given string is a valid U.S. phone number: T/F
 */
const checkPhoneNumberIsUSA = (str) => {
  let trimStr = str.trim();
  if (trimStr.length < 10) return false;
  // let parenthesesRegex = "";
  return true;
}

module.exports = checkPhoneNumberIsUSA;
