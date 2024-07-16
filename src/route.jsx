import { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import ItemContainer from "./components/AllItems";
import JewItems from "./components/jewItems";
import Electronics from "./components/Electronics";
import Mens from "./components/mens";
import Womens from "./components/womens";
import Checkout from "./components/checkout";
import ErrorPage from "./components/ErrorPage";
import Ordered from "./components/orderedMessage";
export const CartContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ItemContainer />,
      },
      {
        path: "jewitems",
        element: <JewItems />,
      },
      {
        path: "electronics",
        element: <Electronics />,
      },
      {
        path: "mens",
        element: <Mens />,
      },
      {
        path: "womens",
        element: <Womens />,
      },
    ],
  },
  {
    path: "checkout",
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "orderedmessage",
    element: <Ordered />,
  },
]);

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default App;
