import React from "react";
import { connect } from "react-redux";
import "./sign-in.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user-actions";
class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart } = this.props;
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="btns">
                        <Button type="submit" value="Submit Form">
                            Sign In
                        </Button>
                        <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
                            Sign In with Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
