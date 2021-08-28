import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Text from '../components/Text';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.primary,
		paddingVertical: 18,
		borderRadius: 5,
		marginTop: 5,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	text: {
		color: theme.colors.white
	}
});

const Button = ({ children, style, ...props }) => {
	const buttonStyle = [styles.container, style];
	return (
		<Pressable {...props}>
			<View style={buttonStyle}>
				<Text
					fontSize='subheading'
					fontWeight='bold'
					style={styles.text}>
					{children}
				</Text>
			</View>
		</Pressable>
	);
};

export default Button;
