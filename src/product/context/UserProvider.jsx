import { useState } from "react";
import { UserContext } from "./UserContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserProvider = ({ children }) => {
  const { addedToCartCount } = useLocalStorage();
  const [userCart, setUserCart] = useState(addedToCartCount);

  return (
    //<UserContext.Provider value={{ hola: 'mundo', user:user}}>
    <UserContext.Provider value={{ userCart, setUserCart }}>
      {children}
    </UserContext.Provider>
  );
};
