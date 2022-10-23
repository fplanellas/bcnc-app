import { useEffect, useReducer } from "react";
import { storageReducer } from "../helpers/storageReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("addedToCart")) || [];
};

export const useLocalStorage = () => {
  const [addedToCart, dispatch] = useReducer(storageReducer, [], init);

  useEffect(() => {
    localStorage.setItem("addedToCart", JSON.stringify(addedToCart));
  }, [addedToCart]);

  const handleNewAdd = (cart) => {
    const action = {
      type: "Add to cart",
      payload: cart,
    };

    dispatch(action);
  };

  return {
    addedToCart,
    addedToCartCount: addedToCart.length,
    handleNewAdd,
  };
};
