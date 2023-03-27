import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import Button from "../button/button.component";

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
  
    const { deleteItemFromCart } = useContext(CartContext);
    
    const handleDeleteFromCart = () => {
        deleteItemFromCart(cartItem);
      }
  
    return (
      <div className="checkout-item-container">
        <img className="img" src={imageUrl} alt={name} />
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
        <span className="quantity">{`Quantity: ${quantity}`}</span>
        <Button className="remove-icon" onClick={handleDeleteFromCart}>X</Button>
      </div>
    );
  };
  
  export default CartItem;

