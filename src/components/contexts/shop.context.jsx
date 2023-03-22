import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../../shop-data.json";

export const ShopContext = createContext({});

export const ShopProvider = ({ children }) => {
  const [currentShop, setCurrentShop] = useState([]);

  useEffect(() => {
    setCurrentShop(SHOP_DATA)
  }, []);

  return (
    <ShopContext.Provider value={currentShop}>
      {children}
    </ShopContext.Provider>
  );
};