import React from 'react';
import Text from './Text';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		padding: 15
	},
	submitBtn: {
		backgroundColor: theme.colors.primary,
		paddingVertical: 18,
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	btnText: {
		color: theme.colors.white
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
						<Pressable
							onPress={handleSubmit}
							testID='submitButton'
							style={styles.submitBtn}>
							<Text
								fontSize='subheading'
								fontWeight='bold'
								style={styles.btnText}>
								Sign In
							</Text>
						</Pressable>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default SignInForm;
