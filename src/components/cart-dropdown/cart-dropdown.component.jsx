import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <h3 className="empty">Your cart is currently empty</h3>
            )}
        </div>
        <Button
            onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </Button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));