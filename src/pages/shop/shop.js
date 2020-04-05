import React, { Fragment } from "react";

import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <Fragment>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </Fragment>
        );
    }
}

export default ShopPage;
