import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import SignInForm from '../../components/SignInForm';
import { expect } from '@jest/globals';

describe('Sign In', () => {
	describe('SignInForm', () => {
		test('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			// render the SignInContainer component, fill the text inputs and press the submit button
			const onSubmit = jest.fn();
			const { getByPlaceholderText, getByTestId } = render(
				<SignInForm onSubmit={onSubmit} />
			);
			const username = getByPlaceholderText('Username');
			const password = getByPlaceholderText('Password');
			const submitButton = getByTestId('submitButton');

			fireEvent.changeText(username, 'kalle');
			fireEvent.changeText(password, 'password');

			await waitFor(() => {
				// expect the onSubmit function to have been called once and with a correct first argument
				fireEvent.press(submitButton);
			});

			expect(onSubmit).toHaveBeenCalledTimes(1);
			expect(onSubmit.mock.calls[0][0]).toEqual({
				username: 'kalle',
				password: 'password'
			});
		});
	});
});
