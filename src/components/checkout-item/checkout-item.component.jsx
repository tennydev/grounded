import './checkout-item.styles.scss'
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import Button from "../button/button.component";
import Dropdown from "../dropdown/dropdown.component";


const quantityOptions = Array.from({length: 10}, (_, i) => i + 1);

const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
  
    const { modifyCartItemQuanity, deleteItemFromCart } = useContext(CartContext);

    const handleQuantityChange = (event) => {
      const selectedQuantity = parseInt(event.target.value);
      modifyCartItemQuanity(cartItem, selectedQuantity);
    };
    
    const handleDeleteFromCart = () => {
      deleteItemFromCart(cartItem);
    };
  
    
    return (
      <div className="checkout-item-container">
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
        </div>  
        <span className="name">{name}</span>
        <span className="quantity">
          <Dropdown options={quantityOptions} selectedOption={quantity} handleChange={handleQuantityChange} />
        </span>
        <span className="price">{`$${price}`}</span>
        <Button className="remove-button" buttonType="transparent" onClick={handleDeleteFromCart}>X</Button>
      </div>
    );
  };
  
  export default CheckoutItem;