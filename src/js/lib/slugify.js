"use strict";

var slugify = function slugify() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var regex = /\s|,|-|\./;
  var arr = str.toLowerCase().split(regex);
  return arr.filter(function (char) {
    char !== "";
  }).join("-");
};

module.exports = slugify;