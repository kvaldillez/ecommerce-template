import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { signOutStart } from "../../redux/user/user-actions";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();
    const signOutStartClickHandler = () => dispatch(signOutStart());

    return (
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <nav className="nav">
                <Link to="/shop" className="nav-link">
                    Shop
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
                {currentUser ? (
                    <div className="nav-link" onClick={signOutStartClickHandler}>
                        Sign Out
                    </div>
                ) : (
                    <Link to="/sign-in" className="nav-link">
                        Sign In
                    </Link>
                )}
                <CartIcon />
            </nav>
            {hidden ? null : <CartDropdown />}
        </header>
    );
};

export default Header;
