import React from "react";

import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { signInWithGoogle } from "../../firebase/firebase-utils";

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: "", password: "" });
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="btns">
                        <Button type="submit" value="Submit Form">
                            Sign In
                        </Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
