import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase-utils";

import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInRegisterPage from "./pages/sign-in-register/sign-in-register";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <Fragment>
                <Header currentUser={this.state.currentUser} />
                <main className="page-container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/shop" component={ShopPage} />
                        <Route path="/sign-in" component={SignInRegisterPage} />
                    </Switch>
                </main>
            </Fragment>
        );
    }
}

export default App;
