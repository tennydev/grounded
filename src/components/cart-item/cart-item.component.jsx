import "./cart-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import Button from "../button/button.component";

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
  
    const { cartItems,removeItemFromCart } = useContext(CartContext);
    
    const handleRemoveFromCart = () => {
        removeItemFromCart(cartItem.id);
      }
  
    return (
      <div>
        <img className="img" src={imageUrl} alt={name} />
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="quantity">{quantity}</span>
        <Button className="remove-icon" onClick={handleRemoveFromCart}>X</Button>
      </div>
    );
  };
  
  export default CartItem;
