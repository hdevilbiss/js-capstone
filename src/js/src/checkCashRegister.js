/**
 *
 * @param {Array}
 * Given an array containing the price of a purchase,
 * the amount of cash given by a customer,
 * and the cash-in-drawer (cid) array,
 * return the customer's change
 * as an object with a status and change key.
 */
const checkCashRegister = (price, cash, cid) => {
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

  // Get the amount of cash in drawer (unit $1.00)
  const cashInDrawer = Math.round(cid.reduce((sum, currArr) => {
    return sum + currArr[1];
  }, 0) * 100) / 100;

  // Change Amount
  let changeAmount = cash - price;

  console.log(`cashInDrawer: ${cashInDrawer}`);
  console.log(`change: ${changeAmount}`);

  let status = "";
  let change = [];

  if (cashInDrawer < changeAmount || changeAmount < 0) status = "INSUFFICIENT_FUNDS";

  if (cashInDrawer === changeAmount) {
    status = "CLOSED";
    change = [...cid];
    console.log(change);
  }

  /** Hundreds */
  console.log(changeAmount % 100);

  return {
    change: change,
    status: status
  };
}

module.exports = checkCashRegister;

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
