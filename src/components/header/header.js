import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase-utils";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

const Header = ({ currentUser, hidden }) => (
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
                <div className="nav-link" onClick={() => auth.signOut()}>
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
