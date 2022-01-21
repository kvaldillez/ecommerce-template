import React, { Fragment, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserSession } from "./redux/user/user-actions";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInRegisterPage from "./pages/sign-in-register/sign-in-register";

import Header from "./components/header/header.component";
import "./App.scss";

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

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
                            currentUser ? (
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

export default App;
