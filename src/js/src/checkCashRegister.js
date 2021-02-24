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
  console.log(`input: ${price}, ${cash}, cid: ${JSON.stringify(cid)}`);
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

  // console.log(`cashInDrawer: ${cashInDrawer}`);
  // console.log(`changeAmount: ${changeAmount}`);

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

  /** You need some change */
  let remainingBalance = cid.reverse().reduce((remainingBalance, [currency, amt], idx) => {

    remainingBalance = Math.round( remainingBalance * 100 + Number.EPSILON ) / 100;
    console.log(`remainingBalance at ${currency}: ${remainingBalance}`);


    /** Get needed & actual quantities for the active currency */
    let currencyValue = CurrencyInfo[idx][1];
    let neededQty = Math.floor(((remainingBalance / currencyValue) * 100)/100);
    let actualQty = Math.floor(((amt / currencyValue)*100)/100);
    // console.log(`neededQty: ${neededQty} of ${currency}`);
    // console.log(`actualQty: ${actualQty} of ${currency}`);

    if (neededQty > 0 && actualQty > 0) {
      if (actualQty >= neededQty) {
        let returnChange = neededQty * currencyValue;
        // console.log(`returnChange: ${returnChange}`);
        CashRegister.change = [...CashRegister.change, [currency, returnChange]];
        return remainingBalance - returnChange;
      }
      else {
        let returnChange = actualQty * currencyValue;
        // console.log(`returnChange: ${returnChange}`);
        CashRegister.change = [...CashRegister.change, [currency, returnChange]];
        return remainingBalance - returnChange;
      }
    }
    else {
      return remainingBalance;
    }
  }, changeAmount);

  // console.log(`FINAL remainingBalance: ${remainingBalance}`);

  if (remainingBalance !== 0) {
    CashRegister.status = "INSUFFICIENT_FUNDS";
    CashRegister.change = [];
  }
  // console.log(JSON.stringify(CashRegister));
  return CashRegister;
}

module.exports = checkCashRegister;

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
