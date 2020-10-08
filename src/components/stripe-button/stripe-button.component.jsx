import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HZnKBL4FxxXmGjnWkegIWYv9Sujt35xavbOwdhJXndLWOZP2THXf5jtyOv8H13Z4djVM9CEAKsp0JznJthPL9X800Yr9bMgkG';

    const onToken = token => {
        console.log(token);
        alert(`successful`)
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='paynow'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton