import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
	username: '',
	password: ''
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		padding: 15
	}
});

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required!'),
	password: yup.string().required('Password is required!')
});

const SignIn = () => {
	const [signIn] = useSignIn();
	let history = useHistory();

	const onSubmit = async (values) => {
		const { username, password } = values;
		try {
			await signIn({ username, password });
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}>
				{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
			</Formik>
		</View>
	);
};

export default SignIn;
