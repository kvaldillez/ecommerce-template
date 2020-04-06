import React from "react";

import "./button.scss";

const Button = ({ children, isGoogleSignIn, ...otherButtonProps }) => (
    <button
        className={`${isGoogleSignIn ? "google-sign-in" : ""} btn`}
        {...otherButtonProps}
    >
        {children}
    </button>
);

export default Button;
