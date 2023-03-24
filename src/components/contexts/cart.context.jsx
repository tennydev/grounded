import { createContext, useState, useEffect } from "react";

const defaultCart = {
    isCartOpen: false,
    setIsCartOpen: () => {},
}

export const CartContext = createContext(defaultCart);


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(defaultCart);
  
  
    const value = { isCartOpen, setIsCartOpen };
  
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  };
