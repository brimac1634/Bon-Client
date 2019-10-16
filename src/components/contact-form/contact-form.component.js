import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { startLoading, stopLoading } from '../../redux/loading/loading.actions';
import { setAlert } from '../../redux/alert/alert.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './contact-form.styles.scss';

const mapDisptachToProps = dispatch => ({
	startLoading: message => dispatch(startLoading(message)),
	stopLoading: () => dispatch(stopLoading()),
	setAlert: message => dispatch(setAlert(message))
})

const ContactForm = ({startLoading, stopLoading, setAlert}) => {
	const [form, setForm] = useState({
			fullName: '',
			email: '',
			subject: '',
			message: ''
		});
	const { fullName, email, subject, message } = form;

	const handleSubmit = async event => {
		event.preventDefault();
		startLoading();
		axios({
			url: 'contact-us',
			method: 'post',
			data: form
		}).then(res => {
			stopLoading();
			setAlert('Your message has been sent')
			setForm({ 
				fullName: '',
				email: '',
				subject: '',
				message: ''
			})
		}).catch(err => {
			stopLoading();
			console.log(err)
		});
	}

	const handleChange = event => {
		const { value, name } = event.target;
		setForm({ ...form, [name]: value});
	}

	return (
		<div className='contact-form'>
			<form onSubmit={handleSubmit}>
				<FormInput 
					name='fullName' 
					type='text' 
					value={fullName} 
					label='Full Name'
					handleChange={handleChange}
					required 
				/>
				<FormInput 
					name='email' 
					type='email' 
					value={email} 
					label='Email'
					handleChange={handleChange}
					required 
				/>
				<FormInput 
					name='subject' 
					type='text' 
					value={subject} 
					label='Subject'
					handleChange={handleChange}
					required 
				/>
				<FormInput 
					area
					name='message' 
					type='text' 
					value={message} 
					label='Message'
					handleChange={handleChange}
					required 
				/>
				<div className='buttons'>
					<CustomButton type='submit'> Submit </CustomButton>
				</div>
			</form>
		</div>
	)
}

export default connect(null, mapDisptachToProps)(ContactForm);