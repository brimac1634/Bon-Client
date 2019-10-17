import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal, selectShippingTotal, selectCartSubtotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './order-summary.styles.scss';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	subtotalPrice: selectCartSubtotal,
	shippingPrice: selectShippingTotal,
	totalPrice: selectCartTotal
})

const OrderSummary = ({cartItems, subtotalPrice, shippingPrice, totalPrice, small }) => (

	<div className={`order-summary ${small ? 'small' : null}`}>
		<div className='cart-header'>
			{
				small
				?	<h3>Order Summary</h3>
				: 	<h2>Order Summary</h2>
			}
		</div>
		{
			cartItems.map(item => <CheckoutItem key={item.product_id} item={item}/>)
		}
		<div className='total-group'>
			<div className='total left'>
				<span>subtotal:</span>
				<span>shipping:</span>
				<span className='bold'>total:</span>
			</div>
			<div className='total right'>
				<span>HKD${ subtotalPrice }</span>
				<span>HKD${ shippingPrice }</span>
				<span className='bold'>HKD${ totalPrice }</span>
			</div>
		</div>
	</div>
)
export default connect(mapStateToProps)(OrderSummary);