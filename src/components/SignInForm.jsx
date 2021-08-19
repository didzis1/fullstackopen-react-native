import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
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

const SignInForm = ({ onSubmit }) => {
	return (
		<View>
			<FormikTextInput name='username' placeholder='Username' />
			<FormikTextInput
				name='password'
				placeholder='Password'
				secureTextEntry
			/>
			<Pressable onPress={onSubmit} style={styles.submitBtn}>
				<Text
					fontSize='subheading'
					fontWeight='bold'
					style={styles.btnText}>
					Sign In
				</Text>
			</Pressable>
		</View>
	);
};

export default SignInForm;
