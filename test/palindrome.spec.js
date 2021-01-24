const assert = require("assert");
const palindrome = require("../src/js/palindrome");

describe("palindrome test suite", () => {
 it('should return a boolean value for a valid palindrome, "eye"', () => {
  assert.strictEqual(typeof palindrome('eye'), "boolean")
 });
 it('should return a boolean for non-palindromes, such as no value', () => {
  assert.strictEqual(typeof palindrome(), "boolean");
 });
 it('should return true for palindrome "eye"', () => {
   assert.strictEqual(palindrome("eye"), true);
 });
 it('should return true for palindromes containing special chars, such as "_eye"', () => {
    assert.strictEqual(palindrome("_eye"), true);
  });
  it('should return true for "race car"', () => {
    assert.strictEqual(palindrome("race car"), true);
  });
  it('should return false for "not a palindrome"', () => {
    assert.strictEqual(palindrome("not a palindrome"), false);
  });
  it('should return true for "A man, a plan, a canal. Panama"', () => {
    assert.strictEqual(palindrome("A man, a plan, a canal. Panama"), true);
  });
  it('should return true for "never odd or even"', () => {
    assert.strictEqual(palindrome("never odd or even"), true);
  });
  it('should return false for "nope"', () => {
    assert.strictEqual(palindrome("nope"), false);
  });
  it('should return false for "almostomla"', () => {
    assert.strictEqual(palindrome("almostomla"), false);
  });
  it('should return true for "My age is 0, 0 si ega ym."', () => {
    assert.strictEqual(palindrome("My age is 0, 0 si ega ym."), true);
  });
  it('should return false for "1 eye for of 1 eye."', () => {
    assert.strictEqual(palindrome("1 eye for of 1 eye."), false);
  });
  it('should return true for "0_0 (: /-\ :) 0-0"', () => {
    assert.strictEqual(palindrome("0_0 (: /-\ :) 0-0"), true);
  });
  it('should return false for "five|\_/|four"', () => {
    assert.strictEqual(palindrome("five|\_/|four"), false);
  });
});
