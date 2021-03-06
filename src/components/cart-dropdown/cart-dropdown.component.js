import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

const CartDropdown = ({ cartItems, history, toggleDropdown }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					cartItems.length
					? 	cartItems.map(item => <CartItem key={item.product_id} item={item} />)
					: 	<span className='empty-message'>Your cart is empty</span>
					
				}
			</div>
			<CustomButton 
				onClick={()=>{
					history.push('/cart')
					toggleDropdown()
				}}
			>
				CHECKOUT
			</CustomButton>
		</div>
	)
}

export default withRouter(connect(mapStateToProps)(CartDropdown));