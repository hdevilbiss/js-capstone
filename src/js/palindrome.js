/**
 *
 * @param {String} strToCheck
 * Given a string, create a new string by removing
 * a set of special chars, then convert it to lowercase.
 * Create two substrings from the new string using slice.
 * The slice indices will depend on whether the new string
 * has an even number or an odd number of characters.
 * The middle-to-end substring (str2) will be split into an array,
 * reversed, then rejoined.
 * The strict comparison of these two substrings is the
 * return value.
 *
 */
const palindrome = (strToCheck = "") => {
  const newStr = strToCheck.replaceAll(/[,\/\-\.|_\s:()]/g, "").toLowerCase();
  let len = newStr.length;
  let str1 = "";
  let str2 = "";

  if (len % 2 === 0) {
    str1 = newStr.slice(0, len / 2);
    str2 = newStr.slice(len / 2, len).split("").reverse().join("");
  }
  else {
    str1 = newStr.slice(0, Math.floor(len / 2) + 1);
    str2 = newStr.slice(Math.floor(len / 2), len).split("").reverse().join("");
  }
  // console.log(`newStr: ${newStr}`);
  // console.log(`str1: ${str1}`);
  // console.log(`str2: ${str2}`);
  return str1 === str2;
}

module.exports = palindrome;

console.log(palindrome())
console.log(palindrome("eye"))
