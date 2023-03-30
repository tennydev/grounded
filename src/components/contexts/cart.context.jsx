import { createContext, useState } from "react";

const defaultCart = {
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  totalItemsCount: 0,
  deleteItemFromCart: () => {},
  modifyCartItemQuantity: () => {},
  calcCartTotal: () => {},
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
};

const modifyItemQuantity = (cartItems, productToModify, selectedQuantity) => {
  if (selectedQuantity === 0) {
    return deleteCartItem(cartItems, productToModify);
  }

  const updatedCartItems = cartItems.map(item =>
    item.id === productToModify.id ? { ...item, quantity: selectedQuantity } : item
  );

  return updatedCartItems;
};

export const CartContext = createContext(defaultCart);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(defaultCart.isCartOpen);
  const [cartItems, setCartItems] = useState(defaultCart.cartItems);
  const [totalItemsCount, setTotalItemsCount] = useState(defaultCart.totalItemsCount);
  

  const addItemToCart = (productToAdd) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = addCartItem(prevCartItems, productToAdd);
      setTotalItemsCount((prevTotalItemsCount) => prevTotalItemsCount + 1);
      return updatedCartItems;
    });
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = removeCartItem(prevCartItems, productToRemove);
      setTotalItemsCount((prevTotalItemsCount) => prevTotalItemsCount - 1);
      return updatedCartItems;
    });
  };

  const deleteItemFromCart = (productToDelete) => {
    
    setCartItems((prevCartItems) => {
      setTotalItemsCount((prevTotalItemsCount) => prevTotalItemsCount - productToDelete.quantity);
      const updatedCartItems = deleteCartItem(prevCartItems, productToDelete);
      return updatedCartItems;
    });
  
  };

  const calcCartTotal = () => {
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return total;
  }

  const modifyCartItemQuanity = (cartItem, selectedQuantity) => {
    setCartItems((cartItems) => {
      const updatedCartItems = modifyItemQuantity(cartItems, cartItem, selectedQuantity);
      return updatedCartItems;
    });
  
    setTotalItemsCount((totalItemsCount) => {
      const updatedTotalItemsCount = totalItemsCount - cartItem.quantity + selectedQuantity;
      return updatedTotalItemsCount;
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
    calcCartTotal,
    modifyCartItemQuanity
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};