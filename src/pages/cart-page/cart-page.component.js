import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal, selectShippingTotal, selectCartSubtotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './cart-page.styles.scss';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	subtotalPrice: selectCartSubtotal,
	shippingPrice: selectShippingTotal,
	totalPrice: selectCartTotal
})

// <StripeCheckoutButton price={totalPrice} />

const CartPage = ({ cartItems, totalPrice, subtotalPrice, shippingPrice, history }) => (
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
		<div className='total-group'>
			<div className='total left'>
				<span>subtotal:</span>
				<span>shipping:</span>
				<span>total:</span>
			</div>
			<div className='total right'>
				<span>HKD${ subtotalPrice }</span>
				<span>HKD${ shippingPrice }</span>
				<span>HKD${ totalPrice }</span>
			</div>
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