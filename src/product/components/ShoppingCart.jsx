import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const ShoppingCart = () => {
  const { userCart } = useContext(UserContext);

  return (
    <div className="shoping-container">
      <div className="user-cart">{userCart}</div>
    </div>
  );
};
