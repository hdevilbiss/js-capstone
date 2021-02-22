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
    status: "OPEN",
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
  const cashInDrawer = Math.round(cid.reduce((sum, [,amtCash]) => sum + amtCash, 0) * 100) / 100;

  // console.log(`cid: ${JSON.stringify(cid)}`);
  console.log(`cashInDrawer: ${cashInDrawer}`);
  console.log(`changeAmount: ${changeAmount}`);

  /** Customer gave insufficient funds */
  if (cash - price < 0) {
    CashRegister.status = "INSUFFICIENT_FUNDS";
    return CashRegister;
  }

  /** Customer gave exact change */
  if (cash - price === 0) return CashRegister;

  /** Not enough cash in drawer to give change */
  if (cashInDrawer < changeAmount) {
    CashRegister.status = "INSUFFICIENT_FUNDS";
    return CashRegister;
  }

  /** Drawer has just enough change */
  if (cashInDrawer === changeAmount) {
    CashRegister.status = "CLOSED";
    CashRegister.change = [...cid];
    return CashRegister;
  }

  /** You need change */
}

module.exports = checkCashRegister;

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
