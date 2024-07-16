import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../route";

// eslint-disable-next-line react/prop-types
export default function Item({ cart, data, loading }) {
  const { setCart } = useContext(CartContext);

  const addToCart = (e, item) => {
    setCart((prevCart) => {
      if (!prevCart.some((cartItem) => cartItem.id === item.id)) {
        e.target.textContent = "Added to cart!";
        e.target.style.backgroundColor = "#166534";
        return [...prevCart, item];
      }
      return prevCart;
    });
  };

  return (
    <div className="">
      <div className="items">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          // eslint-disable-next-line react/prop-types
          data.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt="" />
              <h5>{item.title}</h5>
              <h5 className="prices-stars margin-top ">
                {item.rating.rate}⭐ ({item.rating.count})
              </h5>
              <h5 className="prices-stars ">{item.price}💵</h5>
              <div className="btns">
                <Button
                  style={{
                    // eslint-disable-next-line react/prop-types
                    backgroundColor: cart.some(
                      (cartItem) => cartItem.id === item.id
                    )
                      ? "#166534"
                      : "#32587e",
                  }}
                  onClick={(e) => addToCart(e, item)}
                  text={
                    // eslint-disable-next-line react/prop-types
                    cart.some((cartItem) => cartItem.id === item.id)
                      ? "Added to cart!"
                      : "Add to cart "
                  }
                ></Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
