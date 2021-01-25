/**
 *
 * @param {String} str
 * ROT13 shift cipher:
 * shift the letters in the string by
 * 13; e.g., A ==> N
 */
const rot13 = (str = "") => {
  if (typeof str !== "string") return str;
  const charArr = [...str];
  const minChar = "A".charCodeAt();
  const maxChar = "Z".charCodeAt();
  return charArr.map((char) => {
    let charToCheck = char.charCodeAt();
    return (charToCheck < minChar || charToCheck > maxChar)
      ? String.fromCharCode(charToCheck)
      : ((charToCheck - 13) < minChar)
        ? String.fromCharCode(maxChar - (13 - (charToCheck - minChar + 1)))
        : String.fromCharCode(charToCheck - 13);
  }).join("");
}

module.exports = rot13;

// FREE CODE CAMP
console.log(rot13("SERR PBQR PNZC"))

// FREE PIZZA!
console.log(rot13("SERR CVMMN!"))

// FREE LOVE?
console.log(rot13("SERR YBIR?"))

// 123
console.log(rot13(123));
