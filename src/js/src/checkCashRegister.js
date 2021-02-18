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
  const cashInDrawer = cid.map(([currency, amount]) => {
    const unitOfCurrency = refArr.find(arr => arr[0] === currency);
    return amount / unitOfCurrency[1];
  }).reduce((sum, curr) => sum + curr);
  console.log(`cashInDrawer: ${cashInDrawer}`);
  let changeAmount = cash - price;
  console.log(`change: ${changeAmount}`);

  let status = "";
  let change = [];

  if (changeAmount < 0 || changeAmount > cashInDrawer) status = "INSUFFICIENT_FUNDS";

  /** Hundreds */
  console.log(changeAmount % 100);

  return {
    change: change,
    status: status
  };
}

module.exports = checkCashRegister;

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
