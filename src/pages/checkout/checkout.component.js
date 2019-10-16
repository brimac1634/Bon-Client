import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Elements, StripeProvider} from 'react-stripe-elements';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutDetails from '../../components/checkout-details/checkout-details.component';

import './checkout.styles.scss';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartTotal
})

const Checkout = ({ cartItems, totalPrice }) => (
	<div className='checkout-page'>
		<div className='panel'>
			<StripeProvider apiKey="pk_test_hhwx13ZUDvhIwTXf8HvTCj2O00hCc0u00B">
		        <div className="example">
		            <Elements>
			            <CheckoutDetails />
		            </Elements>
		        </div>
			</StripeProvider>
		</div>
		<div className='panel'>
			Order Summary here

			<div className='test-warning'>
			*Please use the following for testings*
			<br/>
			4242 4242 4242 4242   EXP: 01/20  CVV: 123
		</div>
		</div>
	</div>
)

export default connect(mapStateToProps)(Checkout);