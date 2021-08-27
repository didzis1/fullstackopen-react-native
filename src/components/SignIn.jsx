import React from 'react';

import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

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

	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
