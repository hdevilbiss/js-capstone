/**
 *
 * @param {String} str
 * ROTCIPHER shift cipher:
 * shift the letters in the string by
 * 13; e.g., A ==> N
 * If a char is less than the minChar or the maxChar,
 * then return it, unharmed. Otherwise, if a decoded
 * char is less than the minChar, then return the value
 * of the maxChar minus the difference of 13 and the difference of
 * the char and the minChar, plus 1.
 * Otherwise, just return the difference of the char and 13.
 */
const rotCipher = (str = "") => {
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

module.exports = rotCipher;
