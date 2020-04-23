import React from "react";

import "./button.scss";

const Button = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherButtonProps
}) => (
    <button
        className={`${inverted ? "inverted " : ""}${
            isGoogleSignIn ? "google-sign-in " : ""
        }btn`}
        {...otherButtonProps}
    >
        {children}
    </button>
);

export default Button;
