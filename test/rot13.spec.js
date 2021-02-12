const assert = require("assert");
const rot13 = require("../src/js/src/rot13");

describe("rot13 function test suite", () => {
  const testVars = [
    {
      "given": "SERR PBQR PNZC",
      "expected": "FREE CODE CAMP"
    },
    {
      "given": "SERR CVMMN!",
      "expected": "FREE PIZZA!"
    },
    {
      "given": "SERR YBIR?",
      "expected": "FREE LOVE?"
    },
    {
      "given": "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.",
      "expected": "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    }
  ];

  testVars.forEach((obj) => {
    it(`should return ${obj.expected} when given ${obj.given}`, () => {
      assert.strictEqual(rot13(obj.given), obj.expected);
    });
  });
  it('should return "F" when given "S"', () => {
    assert.strictEqual(rot13("S"), "F");
  });
  it('should return an empty string when given an empty string', () => {
    assert.strictEqual(rot13(), "");
  });
  it('should return a number(s) unharmed when given a number', () => {
    assert.strictEqual(rot13(123), 123);
  });
})
