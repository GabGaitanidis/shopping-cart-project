/* eslint-disable react/no-unescaped-entities */
import { useContext, useMemo } from "react";
import "./styles/checkout.css";
import Nav from "./nav";
import { Link } from "react-router-dom";
import { CartContext } from "../route";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  let price = useMemo(() => {
    return cart
      .reduce((total, cur) => {
        return total + cur.price * (cur.quantity || 1);
      }, 0)
      .toFixed(2);
  }, [cart]);

  function deleteItem(item) {
    const filteredArr = cart.filter((i) => i.id !== item.id);
    setCart(filteredArr);
  }

  const handleSelectChange = (event, item) => {
    const selectedQuantity = parseInt(event.target.value);
    const updatedCart = cart.map((i) =>
      i.id === item.id ? { ...i, quantity: selectedQuantity } : i
    );
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <Nav shop={false} />
      <div className="recipe">
        <div className="items-container">
          <h1>Your Cart</h1>

          {cart.length !== 0 ? (
            cart.map((item) => (
              <div key={item.id} className="item">
                <img src={item.image} alt="" />
                <div className="item-remove-name">
                  {item.title}
                  <br />
                  <div>
                    Price:{" "}
                    {item.quantity ? item.price * item.quantity : item.price} $
                    <div className="quantity-btns">
                      Qty:
                      <select
                        className="number-select"
                        value={item.quantity || 1}
                        onChange={(e) => handleSelectChange(e, item)}
                      >
                        {Array.from({ length: 9 }, (_, i) => i + 1).map(
                          (num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteItem(item)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-items">
              Nothing here! Why don't you go for <Link to="/">Shopping</Link>
            </div>
          )}
        </div>
        <div className="checkout">
          <h2>Checkout</h2>
          <div className="checkout-details">
            Total: <span>{price} $</span>
          </div>
          <Link to="orderedmessage" className="order-btn">
            <button>Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
