import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = [style];

	const styles = StyleSheet.create({
		textInput: {
			backgroundColor: '#FFF',
			padding: 10,
			marginVertical: 5,
			borderWidth: 1,
			borderColor: error ? '#d73a4a' : theme.colors.textSecondary,
			borderRadius: 4
		}
	});

	return (
		<NativeTextInput
			style={(textInputStyle, styles.textInput)}
			{...props}
		/>
	);
};

export default TextInput;
