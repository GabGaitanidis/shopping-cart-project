import ItemContainer from "./AllItems";
import { CartContext } from "../route";
import { useContext } from "react";
export default function JewItems() {
  const { cart } = useContext(CartContext);

  return <ItemContainer category="jewelery" cart={cart} />;
}
