import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";

function App() {
    return (
        <Fragment>
            <Header />
            <main className="page-container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                </Switch>
            </main>
        </Fragment>
    );
}

export default App;
