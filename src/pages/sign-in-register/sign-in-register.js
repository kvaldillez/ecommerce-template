import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import "./sign-in-register.scss";

const SignInRegisterPage = () => (
    <div className="sign-in-register">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInRegisterPage;
