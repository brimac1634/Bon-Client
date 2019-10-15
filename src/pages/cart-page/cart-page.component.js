import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './cart-page.styles.scss';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartTotal
})

// <StripeCheckoutButton price={totalPrice} />

const CartPage = ({ cartItems, totalPrice, history }) => (
	<div className='cart-page'>
		<div className='cart-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(item => <CheckoutItem key={item.product_id} item={item}/>)
		}
		<div className='total'>
			<span>subtotal: HKD${ totalPrice }</span>
		</div>
		<div className='test-warning'>
			*Please use the following for testings*
			<br/>
			4242 4242 4242 4242   EXP: 01/20  CVV: 123
		</div>
		<div className='checkout-button'>
			<CustomButton 
				onClick={()=>history.push('/checkout')}
			>
				Checkout
			</CustomButton>
			
		</div>
	</div>
)

export default withRouter(connect(mapStateToProps)(CartPage));