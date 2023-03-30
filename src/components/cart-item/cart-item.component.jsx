import "./cart-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import Button from "../button/button.component";

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
  
    const { removeItemFromCart } = useContext(CartContext);
    
    const handleRemoveFromCart = () => {
        removeItemFromCart(cartItem.id);
      }
  
    return (
      <div className="cart-item-container">
        <img className="img" src={imageUrl} alt={name} />
        <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
        <span className="quantity">{`Quantity: ${quantity}`}</span>
        <Button className="remove-icon" buttonType={"transparent"} onClick={handleRemoveFromCart}>X</Button>
        </div>
      </div>
    );
  };
  
  export default CartItem;
