import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selectors";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import CheckoutPage from "./pages/checkout/checkout";
import SignInRegisterPage from "./pages/sign-in-register/sign-in-register";

import Header from "./components/header/header.component";
import "./App.css";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <main className="page-container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route
                            exact
                            path="/checkout"
                            component={CheckoutPage}
                        />
                        <Route
                            exact
                            path="/sign-in"
                            render={() =>
                                this.props.currentUser ? (
                                    <Redirect to="/" />
                                ) : (
                                    <SignInRegisterPage />
                                )
                            }
                        />
                    </Switch>
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
