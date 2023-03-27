import { useContext } from 'react';

import CheckoutItem from '../../checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return(
        <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
    )
};

export default Checkout;
