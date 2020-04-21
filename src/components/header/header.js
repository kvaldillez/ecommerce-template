import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase-utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

const Header = ({ currentUser }) => (
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
        </nav>
    </header>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
