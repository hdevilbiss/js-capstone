const checkCashRegister = ([price, cash, cid]) => {
  let change = cash - price;
  console.log(`change: ${change}`);
  if (change < 0) {
    return {status: "INSUFFICIENT FUNDS", change: []};
  }
  const cashInDrawer = cid.map(cashArr => {
    let amt = cashArr[1];
    return Math.floor(amt) * (amt % 1);
  }).reduce((sum, curr) => sum + curr);
  if (cashInDrawer < change) {
    return {status: "INSUFFICIENT FUNDS", change: []};
  }
  else if (cashInDrawer === change) {
    return {status: "CLOSED", change: cid};
  }
  else {
    return {status: "OPEN", change: []};
  }
}

module.exports = checkCashRegister;
