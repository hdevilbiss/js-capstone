/**
 *
 * @param {String} strToCheck
 * @return {Boolean}
 * Given a string, determine whether it is valid input.
 * Next, determine whether the lowercase version of the string,
 * with all special characters removed, is indeed a palindrome.
 * Return true/false.
 */
const palindromeChecker = (strToCheck) => {

  let n = strToCheck.length;
  let str1 = "";
  let str2 = "";

  switch (n % 2) {
    case 0:
      str1 = strToCheck.slice(0, n / 2);
      str2 = strToCheck.slice(n / 2, n).split("").reverse().join("");
      break;
    case 1:
      str1 = strToCheck.slice(0, Math.floor(n / 2) + 1);
      str2 = strToCheck.slice(Math.floor(n / 2), n).split("").reverse().join("");
      break;
    default:
      break;
  }
  return str1 === str2;
}

export default palindromeChecker;
