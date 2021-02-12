"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var rotCipher = function rotCipher() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  if (typeof str !== "string") return str;

  var charArr = _toConsumableArray(str);

  var minChar = "A".charCodeAt();
  var maxChar = "Z".charCodeAt();
  return charArr.map(function (char) {
    var charToCheck = char.charCodeAt();
    return charToCheck < minChar || charToCheck > maxChar ? String.fromCharCode(charToCheck) : charToCheck - 13 < minChar ? String.fromCharCode(maxChar - (13 - (charToCheck - minChar + 1))) : String.fromCharCode(charToCheck - 13);
  }).join("");
};

module.exports = rotCipher;