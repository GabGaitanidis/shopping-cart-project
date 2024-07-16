import "./styles/nav.css";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { mdiHomeOutline } from "@mdi/js";
import { Link } from "react-router-dom";
import { CartContext } from "../route";
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
export default function Nav({ shop = true }) {
  const { cart } = useContext(CartContext);
  return (
    <nav>
      <h2>Fake store </h2>
      {shop ? (
        <div>
          <Link to="checkout" className="links-btns">
            <Icon
              path={mdiCartOutline}
              size={1.4}
              color="white"
              className="nav-links"
            />{" "}
            <p>{cart.length}</p>
          </Link>
          <div className="cart-icon"></div>
        </div>
      ) : (
        <Link to="/" className="links-btns">
          <Icon
            path={mdiHomeOutline}
            size={1.4}
            color="white"
            className="nav-links"
          />
        </Link>
      )}
    </nav>
  );
}
