import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_aOM8SmReJ3VH4nCEV3jq1OZI";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Business Name"
            billingAddress
            shippingAddress
            image="https://svgshare.com/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;