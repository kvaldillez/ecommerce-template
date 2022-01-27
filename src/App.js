import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserSession } from "./redux/user/user-actions";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import "./App.scss";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SignInRegisterPage = lazy(() => import("./pages/sign-in-register/sign-in-register"));

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
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner />}>
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
                        </Suspense>
                    </ErrorBoundary>
                </Switch>
            </main>
        </Fragment>
    );
}

export default App;
