import React from 'react';
import { View } from 'react-native';
import SignUpForm from './SignUpForm';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const SignUp = () => {
	let history = useHistory();
	const [signUp] = useSignUp();
	const [signIn] = useSignIn();

	const onSubmit = async ({ username, password }) => {
		try {
			await signUp({ username, password });
			await signIn({ username, password });
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<View>
			<SignUpForm onSubmit={onSubmit} />
		</View>
	);
};

export default SignUp;
