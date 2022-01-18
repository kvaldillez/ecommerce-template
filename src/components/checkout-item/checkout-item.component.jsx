import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart-actions';

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const addItemClickHandler = (item) => dispatch(addItem(item));
    const removeItemClickHandler = (item) => dispatch(removeItem(item));
    const clearItemClickHandler = (item) => dispatch(clearItemFromCart(item));

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow" onClick={() => removeItemClickHandler(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItemClickHandler(cartItem)}>&#10095;</div>
            </div>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItemClickHandler(cartItem)}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
