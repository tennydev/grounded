import { createContext, useState } from "react";


const defaultCart = {
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
}

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
  
    if (existingCartItem) {
      return cartItems.map(item =>
        item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  const removeCartItem = (cartItems, productIdToRemove) => {
    const existingCartItemIndex = cartItems.findIndex(item => item.id === productIdToRemove);
    
    if (existingCartItemIndex === -1) {
      console.log("item not found, returning current cartItems array: ", cartItems);
      return cartItems;
    }
    
    const existingCartItem = cartItems[existingCartItemIndex];
    
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(item => item.id !== productIdToRemove);
    }
    
    return cartItems.map((item, index) => {
      if (index !== existingCartItemIndex) return item;
      return { ...item, quantity: item.quantity - 1 };
    });
  };

export const CartContext = createContext(defaultCart);

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(defaultCart.isCartOpen);
    const [cartItems, setCartItems] = useState(defaultCart.cartItems);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove))
    }
  
    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart,
        removeItemFromCart
    };
  
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  };
