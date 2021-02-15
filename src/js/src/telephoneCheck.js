/**
 *
 * @param {String} str
 * Return whether a given string is a valid U.S. phone number: T/F
 */
const telephoneCheck = (str) => {
  const trimStr = str.trim();
  if (trimStr.length < 10) return false;
  const regex = /^(1?\s?)(\(\d{3}\)|\d{3})(-?\s?\d{3})(-?\s?\d{4})$/gm;
  const matches = trimStr.match(regex);
  return matches === null
    ? false
    : true;
}

module.exports = telephoneCheck;
