import React from 'react';
import { withRouter } from 'react-router-dom';

import OrderSummary from '../../components/order-summary/order-summary.component';
import CustomButton from '../../components/custom-button/custom-button.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './cart-page.styles.scss';

// <StripeCheckoutButton price={totalPrice} />

const CartPage = ({ history }) => (
	<div className='cart-page'>
		<OrderSummary />
		<div className='checkout-button'>
			<CustomButton 
				onClick={()=>history.push('/checkout')}
			>
				Checkout
			</CustomButton>
			
		</div>
	</div>
)

export default withRouter(CartPage);