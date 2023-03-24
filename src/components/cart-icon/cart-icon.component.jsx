import {ReactComponent as Icon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <Icon className='cart-icon'/>   
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon