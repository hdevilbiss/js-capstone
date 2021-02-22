/**
 *
 * @param {Number} price
 * @param {Number} cash
 * @param {Array} cid
 * Given the price of a purchase,
 * the amount of cash given by a customer,
 * and the cash-in-drawer (cid) array,
 * return the customer's change
 * as an object with a status and change key.
 */
const checkCashRegister = (price = 0, cash = 0, cid = []) => {

  let changeAmount = cash - price;

  const CashRegister = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  const refArr = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  /** Get the amount of cash in drawer (unit $1.00) */
  const cashInDrawer = Math.round(cid.reduce((sum, currArr) => {
    return sum + currArr[1];
  }, 0) * 100) / 100;

  console.log(`cid: ${JSON.stringify(cid)}`);
  console.log(`cashInDrawer: ${cashInDrawer}`);
  console.log(`changeAmount: ${changeAmount}`);

  /** Not enough cash in register or not enough cash given by customer */
  if (cashInDrawer < changeAmount || changeAmount < 0) {
    CashRegister.status = "INSUFFICIENT_FUNDS";
  }
  /** Return all the cash in drawer and close */
  else if (cashInDrawer === changeAmount) {
    CashRegister.status = "CLOSED";
    CashRegister.change = [...cid];
  }
  else {
    let remainingBalance = changeAmount;

    for (let i = refArr.length - 1; i >= 0; i--) {
      let currency = refArr[i][0];
      let value = refArr[i][1];
      let neededQty = Math.round(((remainingBalance / value) * 100) / 100);
      let actualQty = Math.round(((cid[i][1] / value) * 100) / 100);

      console.log(`neededQty of ${value}: ${neededQty}`);
      console.log(`actualQty of ${value}: ${actualQty}`);

      if (neededQty > 0 && actualQty >= neededQty) {
        CashRegister.change = [...CashRegister.change, [currency, neededQty * value]];
        remainingBalance %= value;
      }
      else if (neededQty > 0 && actualQty < neededQty) {
        CashRegister.change = [...CashRegister.change, [currency, actualQty * value]];
        remainingBalance -= (actualQty * value);
      }
      console.log(`remainingBalance: ${remainingBalance}`);
    }
    console.log(`remainingBalance: ${remainingBalance.toFixed(2)}`);
    if (remainingBalance.toFixed(2) !== 0) {
      CashRegister.status = "INSUFFICIENT_FUNDS";
      CashRegister.change = [];
    }
  }

  return CashRegister;
}

module.exports = checkCashRegister;

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
