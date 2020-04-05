import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

const Header = () => (
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
        </nav>
    </header>
);

export default Header;
