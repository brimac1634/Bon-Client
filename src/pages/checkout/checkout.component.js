import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';

import CheckoutDetails from '../../components/checkout-details/checkout-details.component';

import './checkout.styles.scss';

const Checkout = () => (
	<div className='checkout-page'>
		<StripeProvider apiKey="pk_test_hhwx13ZUDvhIwTXf8HvTCj2O00hCc0u00B">
	        <div className="example">
	            <Elements>
		            <CheckoutDetails />
	            </Elements>
	        </div>
		</StripeProvider>
	</div>
)

export default Checkout;