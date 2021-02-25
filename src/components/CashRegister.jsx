import { useState } from "react";
import checkCashRegister from "../js/lib/checkCashRegister";
import PhotoCredit from "./partials/PhotoCredit";
import products from "../products";
import MakeProducts from "../products";
import GetCurrencies from "../currency";

const CashRegister = ({ object }) => {
  /**
   * State
   */
  const [products, setProducts] = useState(MakeProducts());
  const [currencies, setCurrencies] = useState(GetCurrencies());


  return (
    <div className="cash-register card">
      <section>
        <header>
          <h2>
            { object.heading }
          </h2>
        </header>
        <label htmlFor="products">Products</label>
        <select name="selectedProduct" id="products">
          {products.sort((a, b) => a.name > b.name).map(product => {
            return (
              <option value={product.name} key={product.id}>
                {product.name} {product.emoji}
              </option>
            );
          })}
        </select>
        <button>
          Add to cart
        </button>
        <div className="currencies">
          {currencies.map(({currency, id, value, type, color}) => {
            if (type === "coin") {
              return (
                <button>
                  {currency}: {value}
                </button>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}

export default CashRegister;
