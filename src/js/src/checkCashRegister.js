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
  const CurrencyInfo = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ].reverse();

  /** Get the amount of cash in drawer (unit $1.00) */
  const cashInDrawer = Math.round(cid.reduce((sum, [,amtCash]) => sum + amtCash, 0) * 100) / 100;

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

  /** You need some change.
   * Reduce the cash in drawer;
   * the accumulator is remainingBalance starting at changeAmount:
   * try to reduce it to 0
  */
  let remainingBalance = cid.reverse().reduce((remainingBalance, [currency, amt], idx) => {

    /** Round remainingBalance to 2 decimals */
    remainingBalance = Math.round( remainingBalance * 100 + Number.EPSILON ) / 100;

    /** Get needed & actual quantities for the active currency */
    let currencyValue = CurrencyInfo[idx][1];
    let neededQty = Math.floor(((remainingBalance / currencyValue) * 100)/100);
    let actualQty = Math.floor(((amt / currencyValue)*100)/100);

    if (neededQty > 0 && actualQty > 0) {
      let returnChange = (actualQty >= neededQty)
        ? neededQty * currencyValue
        : actualQty * currencyValue;
      CashRegister.change = [...CashRegister.change, [currency, returnChange]];
      return remainingBalance - returnChange;
    }
    else {
      return remainingBalance;
    }
  }, changeAmount);

  /** Did the drawer have enough for exact change? */
  if (remainingBalance !== 0) {
    CashRegister.status = "INSUFFICIENT_FUNDS";
    CashRegister.change = [];
  }
  return CashRegister;
}

module.exports = checkCashRegister;
