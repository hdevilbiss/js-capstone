/**
 *
 * @param {Array}
 * Given an array containing the price of a purchase,
 * the amount of cash given by a customer,
 * and the cash-in-drawer (cid) array,
 * return the customer's change
 * as an object with a status and change key.
 */
const checkCashRegister = ([price, cash, cid]) => {
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
  let change = cash - price;
  console.log(`change: ${change}`);
}

module.exports = checkCashRegister;
