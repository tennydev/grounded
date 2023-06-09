import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../contexts/cart.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <Button>Checkout</Button>
      </Link>
    </div>
  );
};
export default CartDropdown;
