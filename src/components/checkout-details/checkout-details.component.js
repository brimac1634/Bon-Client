import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';

import { selectCartItems, selectCartTotal, selectShippingTotal } from '../../redux/cart/cart.selectors';
import { setAlert } from '../../redux/alert/alert.actions'; 

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './checkout-details.styles.scss';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	shippingPrice: selectShippingTotal, 
	totalPrice: selectCartTotal
})

const mapDispatchToProps = dispatch => ({
	setAlert: alert => dispatch(setAlert(alert))
})

class CheckoutDetails extends Component {
	state = {
		step: 1,
		email: '',
		name: '',
		address: ''
	}

	async submit(ev) {
		const { setAlert, totalPrice, cartItems } = this.props;
		const { email, name, address } = this.state;
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

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value});
	}

	handleNext = event => {
		const { step } = this.state;
		event.stopPropagation();
		this.setState({step: step + 1});
	}

	onBoxClick = box => {
		const { step } = this.state;
		if (box <= step) this.setState({ step: box })
	}

	render() {
		const { step, email, name, address } = this.state;
		const boxClass = box => step === box ? 'open' : 'close';
		const boxLevel = box => step > box ? 'complete' : 'incomplete';
		return (
			<div className='checkout-details'>
				<div 
					className={`box ${boxClass(1)} ${boxLevel(1)}`}
					onClick={()=>this.onBoxClick(1)}
				>
					<h3>1. Your Email</h3>
					<FormInput 
						name='email' 
						type='email' 
						value={email} 
						label='Email'
						handleChange={this.handleChange}
						required 
					/>
					<span>You'll receive receipts and notifications at this email address.</span>
					<CustomButton 
						onClick={this.handleNext}
					>
						Continue
					</CustomButton>
				</div>
				<div 
					className={`box ${boxClass(2)} ${boxLevel(2)}`}
					onClick={()=>this.onBoxClick(2)}
				>
					<h3>2. Shipping</h3>
					<FormInput 
						name='name' 
						type='name' 
						value={name} 
						label='Name'
						handleChange={this.handleChange}
						required 
					/>
					<FormInput 
						area
						name='address' 
						type='text' 
						value={address} 
						label='Address'
						handleChange={this.handleChange}
						required 
					/>
					<CustomButton 
						onClick={this.handleNext}
					>
						Continue
					</CustomButton>
				</div>
				<div 
					className={`box ${boxClass(3)} ${boxLevel(3)}`}
					onClick={()=>this.onBoxClick(3)}
				>
					<h3>3. Payment</h3>
					<CardElement />
				</div>
				<div 
					className={`box ${boxClass(4)} ${boxLevel(4)}`}
					onClick={()=>this.onBoxClick(4)}
				>
					<h3>4. Review</h3>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CheckoutDetails));