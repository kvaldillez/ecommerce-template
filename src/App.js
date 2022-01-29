import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route path="/shop/*" element={<ShopPage />} />
                            <Route
                                exact
                                path="/checkout"
                                element={<CheckoutPage />}
                            />
                            <Route
                                exact
                                path="/sign-in"
                                element={currentUser ? <Navigate to="/" /> : <SignInRegisterPage />}
                            />
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </Fragment>
    );
}

export default App;
