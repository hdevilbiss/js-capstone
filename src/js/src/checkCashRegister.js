const checkCashRegister = ([price, cash, cid]) => {
  if (cash - price < 0) return {status: "INSUFFICIENT FUNDS", change: []};
  const cashInDrawer = cid.map(cashArr => {
    let amt = cashArr[1];
    let qty = Math.floor(amt);
    let val = amt % 1;
    return qty * val;
  }).reduce((sum, curr) => sum + curr);
  if (cashInDrawer < (cash - price)) return {status: "INSUFFICIENT FUNDS", change: []};
}

module.exports = checkCashRegister;
