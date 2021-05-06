import { useState } from "react";
/**
 * Components
 */
import PhotoCredit from "./partials/PhotoCredit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
/**
 * Functions
 */
import checkCashRegister from "../js/lib/checkCashRegister";
/**
 * Data
 */
import MakeProducts from "../products";
import GetCurrencies from "../currency";

const CashRegister = ({ object }) => {
  /**
   * State
   */
  const [products, setProducts] = useState(MakeProducts());
  const [currencies, setCurrencies] = useState(GetCurrencies());
  const [basket, setBasket] = useState([]);
  const [cashRegister, setCashRegister] = useState([]);

  /**
   * Event Handlers
   */
  const addToCartHandler = () => {
    const productSelection = document.getElementById("products").value;
    setBasket([...basket, productSelection]);
  }

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
        <button onClick={addToCartHandler}>
          Add to cart
        </button>
        <div>
          {basket.length !== 0 && basket.map(item => item)}
        </div>
        <div className="currencies">
          {basket.length !== 0 && currencies.map(({currency, id, value, type, color}) => {
              return (
                <div key={id}>
                  <FontAwesomeIcon
                    icon={type === "coin" ? faCoins : faMoneyBill}
                    color={color}
                  />
                  {currency}
                  <button>+</button>
                  <button>-</button>
                </div>
              );
          })}
        </div>
        <PhotoCredit
          bgArtistLink={object.bgArtistLink}
          bgArtistName={object.bgArtistName}
          bgPhotoLink={object.bgPhotoLink}
          bgPhotoVendor={object.bgPhotoVendor}
        />
      </section>
    </div>
  );
}

export default CashRegister;
