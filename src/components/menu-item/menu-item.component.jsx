import React from "react";
import { useNavigate } from "react-router";

import "./menu-item.scss";

const MenuItem = ({
    title,
    imageUrl,
    size = "small",
    history,
    linkUrl,
}) => {
    const navigate = useNavigate();

    return (
        <div
            className={`${size} menu-item`}
            onClick={() => navigate(`${linkUrl}`)}
        >
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                className="background-image"
            />
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
