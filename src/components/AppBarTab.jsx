import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
	flexItem: {
		flexGrow: 0,
		padding: 10
	},
	linkText: {
		color: '#FFFFFF',
		fontSize: 18
	}
});

const AppBarTab = ({ text, onPress }) => {
	return (
		<Pressable onPress={onPress} style={styles.flexItem}>
			<Text fontWeight='bold' style={styles.linkText}>
				{text}
			</Text>
		</Pressable>
	);
};

export default AppBarTab;
