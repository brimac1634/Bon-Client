import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';

import { selectCartItems, selectCartTotal, selectShippingTotal } from '../../redux/cart/cart.selectors';
import { setAlert } from '../../redux/alert/alert.actions'; 

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import OrderSummary from '../../components/order-summary/order-summary.component';

import './checkout-details.styles.scss';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	shippingPrice: selectShippingTotal, 
	totalPrice: selectCartTotal
})

const mapDispatchToProps = dispatch => ({
	setAlert: alert => dispatch(setAlert(alert))
})

const CheckoutDetails = ({setAlert, totalPrice, cartItems}) => {
	const [details, setDetails] = useState({
		email: '',
		name: '',
		address: ''
	})
	const { email, name, address } = details;

	const submit = async () => {
	 	const {token} = await this.props.stripe.createToken({name: "Name"});
	 	const priceForStripe = totalPrice * 100;

	 	const order = {
	 		items: cartItems,
	 		email,
	 		shipping: {
	 			name,
	 			address
	 		},
	 		amount: priceForStripe
	 	}

		axios({
			url: 'payment',
			method: 'post',
			data: { order, token }
		}).then(res => {
			console.log('complete', res)
			setAlert('Payment Complete!')
		}).catch(err => {
			console.log('payment error: ', err)
			setAlert('There was an issue with your payment. Please make sure you use the provided credit card')
		})  
	}

	const handleChange = event => {
		const { value, name } = event.target;
		setDetails({ ...details, [name]: value });
	}

	return (
		<div className='checkout-details'>
			<div className='panel'>
				<div className='box'>
					<h3>1. Your Email</h3>
					<FormInput 
						name='email' 
						type='email' 
						value={email} 
						label='Email'
						handleChange={handleChange}
						required 
					/>
					<span>You'll receive receipts and notifications at this email address.</span>
				</div>
				<div className='box'>
					<h3>2. Shipping</h3>
					<FormInput 
						name='name' 
						type='name' 
						value={name} 
						label='Name'
						handleChange={handleChange}
						required 
					/>
					<FormInput 
						area
						name='address' 
						type='text' 
						value={address} 
						label='Address'
						handleChange={handleChange}
						required 
					/>
				</div>
				<div className='box'>
					<h3>3. Payment</h3>
					<CardElement />
				</div>
				<div className='box'>
					<h3>4. Review</h3>
					<CustomButton
						onClick={submit}
					>
						Submit
					</CustomButton>
				</div>
			</div>
			<div className='panel'>
				<div className='box'>
					<OrderSummary small />
				</div>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CheckoutDetails));