import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Loader from '../loader/loader.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { emailSignInStart } from '../../redux/user/user.actions';
import { selectIsUserFetching, selectUserError } from '../../redux/user/user.selectors';

import './sign-in.styles.scss';

const mapStateToProps = createStructuredSelector({
	isLoadingUser: selectIsUserFetching,
	userError: selectUserError
})

const mapDispatchToProps = dispatch => ({
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

const SignIn = ({ emailSignInStart, isLoadingUser, userError }) => {
	const [userCredentials, setCredentials] = useState({email: '', password: ''});
	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();
		emailSignInStart(email, password);
	}

	const handleChange = event => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	}

	return (
		<div className='sign-in'>
			<h2>Admin Portal</h2>
			<form onSubmit={handleSubmit}>
				<FormInput 
					name='email' 
					type='email' 
					value={email} 
					label='email'
					handleChange={handleChange}
					required 
				/>
				<FormInput 
					name='password' 
					type='password' 
					value={password} 
					label='password'
					handleChange={handleChange}
					required 
				/>
				<div className='buttons'>
					<CustomButton 
						type='submit'> 
						Sign In 
					</CustomButton>
				</div>
				<span className={`error ${userError ? 'show' : null}`}>{userError ? userError.title : ''}</span>
			</form>
			{
				isLoadingUser &&
				<Loader />
			}
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);