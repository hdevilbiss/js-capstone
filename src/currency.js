import { v4 as uuidv4 } from "uuid";
function GetCurrencies() {
  return [
    {
      currency: "PENNY",
      id: uuidv4(),
      value: 0.01,
      type: "coin",
      color: "red"
    },
    {
      currency: "NICKEL",
      id: uuidv4(),
      value: 0.05,
      type: "coin",
      color: "silver"
    },
    {
      currency: "DIME",
      id: uuidv4(),
      value: 0.1,
      type: "coin",
      color: "silver"
    },
    {
      currency: "QUARTER",
      id: uuidv4(),
      value: 0.25,
      type: "coin",
      color: "silver"
    },
    {
      currency: "ONE",
      id: uuidv4(),
      value: 1,
      type: "bill",
      color: "green"
    },
    {
      currency: "FIVE",
      id: uuidv4(),
      value: 5,
      type: "bill",
      color: "green"
    },
    {
      currency: "TEN",
      id: uuidv4(),
      value: 10,
      type: "bill",
      color: "green"
    },
    {
      currency: "TWENTY",
      id: uuidv4(),
      value: 20,
      type: "bill",
      color: "green"
    },
    {
      currency: "ONE HUNDRED",
      id: uuidv4(),
      value: 100,
      type: "bill",
      color: "green"
    },
  ];
}

export default GetCurrencies;
