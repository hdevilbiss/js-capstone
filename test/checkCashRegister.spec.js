const assert = require("assert");
const checkCashRegister = require("../src/js/src/checkCashRegister");

describe("Test suite for checkCashRegister", () => {
  const testArr = [];

  testArr.push(
    [
      [19.5, 20, [['PENNY', 1.01],['NICKEL', 2.05],['DIME', 3.1],['QUARTER', 4.25],['ONE', 90],['FIVE', 55],['TEN', 20],['TWENTY', 60],['ONE HUNDRED', 100]]],{status: 'OPEN', change: [['QUARTER', 0.5]]}
    ],
    [
      [3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]], {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
    ],
    [
      [19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]], {status: "INSUFFICIENT_FUNDS", change: []}
    ],
    [
      [19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]], {status: "INSUFFICIENT_FUNDS", change: []}
    ],
    [
      [19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]], {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
    ],
  );

  it(`should return an object given ${19.5, 20, [['PENNY', 1.01],['NICKEL', 2.05],['DIME', 3.1],['QUARTER', 4.25],['ONE', 90],['FIVE', 55],['TEN', 20],['TWENTY', 60],['ONE HUNDRED', 100]]}`, () => {
    assert.strictEqual(typeof checkCashRegister(19.5, 20, [['PENNY', 1.01],['NICKEL', 2.05],['DIME', 3.1],['QUARTER', 4.25],['ONE', 90],['FIVE', 55],['TEN', 20],['TWENTY', 60],['ONE HUNDRED', 100]]), "object");
  });

  // Loop through all tests
  testArr.forEach(([[price, cash, cid], expectedResult]) => {
    it(`should return ${JSON.stringify(expectedResult)} given ${price}, ${cash}, ${JSON.stringify(cid)}`, () => {
      assert.deepStrictEqual(
        checkCashRegister(price, cash, cid), expectedResult
      );
    });
  });

  it(`should not return half a $5 bill when the change is 2 quarters and the details are copied directly from freeCodeCamp`, () => {
    assert.deepStrictEqual(
      checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100]
      ]),
      { status: 'OPEN', change: [['QUARTER', 0.5]] }
    );
  });

  it(`should also not return half a $5 bill when the change is 2 quarters`, () => {
    assert.deepStrictEqual(
      checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
      ]),
      {status: "OPEN", change: [["QUARTER", 0.5]]}
    );
  });
});
