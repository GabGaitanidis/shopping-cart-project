import ItemContainer from "./AllItems";
import { CartContext } from "../route";
import { useContext } from "react";

export default function Electronics() {
  const { cart } = useContext(CartContext);

  return <ItemContainer category="electronics" cart={cart} />;
}
