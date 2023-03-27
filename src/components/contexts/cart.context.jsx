import { createContext, useState } from "react";

const defaultCart = {
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  totalItemsCount: 0,
  setTotalItemsCount: () => {},
  deleteItemFromCart: () => {},
};

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

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter(item => item.id !== productToDelete.id);
}

export const CartContext = createContext(defaultCart);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(defaultCart.isCartOpen);
  const [cartItems, setCartItems] = useState(defaultCart.cartItems);
  const [totalItemsCount, setTotalItemsCount] = useState(defaultCart.totalItemsCount);

  const addItemToCart = (productToAdd) => {
    setCartItems((cartItems) => {
      const updatedCartItems = addCartItem(cartItems, productToAdd);
      setTotalItemsCount(totalItemsCount + 1);
      return updatedCartItems;
    });
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems((cartItems) => {
      const updatedCartItems = removeCartItem(cartItems, productToRemove);
      setTotalItemsCount(totalItemsCount - 1);
      return updatedCartItems;
    });
  };

  const deleteItemFromCart = (productToDelete) => {
    
    setCartItems((cartItems) => {
      setTotalItemsCount(totalItemsCount - productToDelete.quantity);
      const updatedCartItems = deleteCartItem(cartItems, productToDelete);
      return updatedCartItems;
    });
  
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    totalItemsCount,
    setTotalItemsCount,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};