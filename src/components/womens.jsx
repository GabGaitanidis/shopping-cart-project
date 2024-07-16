import ItemContainer from "./AllItems";
import { CartContext } from "../route";
import { useContext } from "react";
export default function Womens() {
  const { cart } = useContext(CartContext);

  return <ItemContainer category="women's clothing" cart={cart} />;
}
