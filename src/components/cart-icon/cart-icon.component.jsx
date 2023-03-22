import {ReactComponent as Icon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <Icon className='cart-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon