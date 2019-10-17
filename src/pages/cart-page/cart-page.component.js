import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import OrderSummary from '../../components/order-summary/order-summary.component';
import CustomButton from '../../components/custom-button/custom-button.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './cart-page.styles.scss';

// <StripeCheckoutButton price={totalPrice} />

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

const CartPage = ({ history, cartItems }) => (
	<div>
		{
			cartItems
			? 	<div className='cart-page'>
					<OrderSummary />
					<div className='checkout-button'>
						<CustomButton 
							onClick={()=>history.push('/checkout')}
						>
							Checkout
						</CustomButton>
						
					</div>
				</div>
			: 	<span>Your shopping cart is empty</span>
		}
	</div>
)

export default withRouter(connect(mapStateToProps)(CartPage));