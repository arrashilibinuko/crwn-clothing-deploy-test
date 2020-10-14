import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HZnKBL4FxxXmGjnWkegIWYv9Sujt35xavbOwdhJXndLWOZP2THXf5jtyOv8H13Z4djVM9CEAKsp0JznJthPL9X800Yr9bMgkG';

    const onToken = token => {
        axios({ 
            url: 'http://localhost:5000/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            } 
         }).then(response => {
             console.log(response)  
             alert('sucessful payment')
         }).catch(error => {
             console.log('Payment error: ' + error);
             alert('There was an issue with payment ')
         })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CWN Clothing'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='paynow'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton