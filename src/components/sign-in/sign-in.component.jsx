import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./sign-in.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user-actions";

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const dispatch = useDispatch();
    const googleSignInStartClickHandler = () => dispatch(googleSignInStart());
    const emailSignInStartHandler = (email, password) => dispatch(emailSignInStart({ email, password }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        emailSignInStartHandler(email, password);
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setCredentials({...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    label="Email"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    label="Password"
                    handleChange={handleChange}
                    required
                />
                <div className="btns">
                    <Button type="submit" value="Submit Form">
                        Sign In
                    </Button>
                    <Button type="button" onClick={googleSignInStartClickHandler} isGoogleSignIn>
                        Sign In with Google
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
