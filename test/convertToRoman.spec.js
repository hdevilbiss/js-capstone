const assert = require("assert");
const convertToRoman = require("../src/js/src/convertToRoman");

describe("convertToRoman function test suite", () => {
  const testArr = [];
  testArr.push(
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [9, "IX"],
    [10, "X"],
    [12, "XII"],
    [16, "XVI"],
    [29, "XXIX"],
    [44, "XLIV"],
    [45, "XLV"],
    [68, "LXVIII"],
    [83, "LXXXIII"],
    [97, "XCVII"],
    [99, "XCIX"],
    [400, "CD"],
    [500, "D"],
    [501, "DI"],
    [649, "DCXLIX"],
    [798, "DCCXCVIII"],
    [891, "DCCCXCI"],
    [1000, "M"],
    [1004, "MIV"],
    [1006, "MVI"],
    [1023, "MXXIII"],
    [2014, "MMXIV"],
    [3999, "MMMCMXCIX"]
  );
  testArr.forEach((arr) => {
    it(`should return ${arr[1]} given ${arr[0]}`, () => {
      assert.strictEqual(convertToRoman(arr[0]), arr[1])
    });
  });
  it("should return undefined if given nothing", () => {
    assert.strictEqual(convertToRoman(), undefined);
  });
  it("should return undefined if given anything other than a number", () => {
    assert.strictEqual(convertToRoman("quack"), undefined);
  });
  it("should return I given the string '1'", () => {
    assert.strictEqual(convertToRoman("1"), "I");
  });
});
