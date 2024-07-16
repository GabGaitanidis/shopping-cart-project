import ItemContainer from "./AllItems";
import { CartContext } from "../route";
import { useContext } from "react";
export default function Mens() {
  const { cart } = useContext(CartContext);

  return <ItemContainer category="men's clothing" cart={cart} />;
}
