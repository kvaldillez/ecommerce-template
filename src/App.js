import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selectors";
// import { selectCollectionsForPreview } from "./redux/shop/shop-selectors";
// import { addCollectionAndDocuments } from "./firebase/firebase-utils";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import CheckoutPage from "./pages/checkout/checkout";
import SignInRegisterPage from "./pages/sign-in-register/sign-in-register";

import Header from "./components/header/header.component";
import "./App.css";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        // const { collectionsArray } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }

            setCurrentUser(userAuth);
            // addCollectionAndDocuments("collections", collectionsArray.map(({ title, items }) => ({ title, items })));
        });
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
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
