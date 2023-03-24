import "./navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as Logo } from "../../../assets/crown.svg";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
