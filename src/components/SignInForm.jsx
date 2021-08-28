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
	password: ''
};

const SignInForm = ({ onSubmit }) => {
	const validationSchema = yup.object().shape({
		username: yup.string().required('Username is required!'),
		password: yup.string().required('Password is required!')
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
						<Button text='Sign In' onPress={handleSubmit}>
							Sign In
						</Button>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default SignInForm;
