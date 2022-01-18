import React from "react";
import { useDispatch } from "react-redux";

import Button from "../button/button.component";
import { addItem } from "../../redux/cart/cart-actions";
import "./collection-item.scss";

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();
    const addItemClickHandler = (item) => dispatch(addItem(item));

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={() => addItemClickHandler(item)} inverted>
                Add to Cart
            </Button>
        </div>
    );
};

export default CollectionItem;
