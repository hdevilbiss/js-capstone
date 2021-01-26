/**
 *
 * @param {String} str
 * ROTCIPHER shift cipher:
 * shift the letters in the string by
 * 13; e.g., A ==> N
 */
const rotCipher = (str = "") => {
  if (typeof str !== "string") return str;
  const charArr = str.split("");
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
