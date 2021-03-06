/**
 *
 * @param {String} strToCheck
 * A palindrome is a sequence of characters
 * that reads the same backward as forward.
 * Given a string, create a new string by removing
 * special chars, then converting to lowercase.
 * Create two substrings from the new string using slice.
 * The slice indices will depend on whether the new string
 * has an even number or an odd number of characters.
 * The middle-to-end substring will be split into an array,
 * reversed, then rejoined.
 * The strict comparison of these two substrings is the
 * return value.
 *
 */
const palindrome = (strToCheck = "") => {
  const newStr = strToCheck.replace(/[,/\-.|_\s:()]/g, "").toLowerCase();
  let len = newStr.length;
  return (len % 2 === 0)
    ? newStr.slice(0, len / 2) === newStr.slice(len / 2, len).split("").reverse().join("")
    : newStr.slice(0, Math.floor(len / 2) + 1) === newStr.slice(Math.floor(len / 2), len).split("").reverse().join("");
}

module.exports = palindrome;
