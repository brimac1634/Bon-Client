import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './checkout-details.styles.scss';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartTotal
})

class CheckoutDetails extends Component {
	state = {
		step: 1,
		email: '',
		name: '',
		address: ''
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
						onClick={()=>this.setState({step: step + 1})}
					>
						Continue
					</CustomButton>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(CheckoutDetails);