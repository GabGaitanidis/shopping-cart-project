import { useEffect, useState, useContext } from "react";
import "./styles/main.css";
import { CartContext } from "../route";
import Item from "./Item";

export default function ItemContainer({ category = "" }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const JsonData = await fetch(
          `https://fakestoreapi.com/products${
            category === "" ? "" : `/category/${category}`
          }`
        );
        const data = await JsonData.json();
        setData(data);
      } catch (error) {
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <Item loading={loading} data={data} cart={cart} />
    </div>
  );
}
