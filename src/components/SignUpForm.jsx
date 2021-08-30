import React from 'react';
import Button from './Button';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		padding: 15
	}
});

const initialValues = {
	username: '',
	password: '',
	passwordConfirmation: ''
};

const SignInForm = ({ onSubmit }) => {
	const validationSchema = yup.object().shape({
		username: yup
			.string()
			.max(30, 'Username length cannot be higher than 30 characters')
			.required('Username is required'),

		password: yup
			.string()
			.min(5, 'Password length must be over five characters')
			.max(50, 'Password length cannot be higher than 50')
			.required('Password is required'),
		passwordConfirmation: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords do not match')
			.required('Password confirmation is required')
	});
	return (
		<View style={styles.container}>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}>
				{({ handleSubmit }) => (
					<View>
						<FormikTextInput
							name='username'
							placeholder='Username'
						/>
						<FormikTextInput
							name='password'
							placeholder='Password'
							secureTextEntry
						/>

						<FormikTextInput
							name='passwordConfirmation'
							placeholder='Password confirmation'
							secureTextEntry
						/>
						<Button onPress={handleSubmit}>Sign Up</Button>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default SignInForm;
