import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
			<CheckoutDetails />
		</div>
		<div className='panel'>
			Order Summary here
		</div>
	</div>
)

export default connect(mapStateToProps)(Checkout);