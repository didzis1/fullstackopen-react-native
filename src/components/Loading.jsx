import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 100
	},
	text: {
		fontSize: 35
	}
});
const Loading = () => {
	return (
		<View style={styles.container}>
			<Text
				color='textSecondary'
				fontSize='subheading'
				fontWeight='bold'
				style={styles.text}>
				Loading...
			</Text>
		</View>
	);
};

export default Loading;
