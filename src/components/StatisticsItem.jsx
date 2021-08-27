import React from 'react';

import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
	itemContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
});

const StatisticsItem = ({ label, value, testID }) => {
	return (
		<View style={styles.itemContainer}>
			<Text testID={testID} fontWeight='bold' fontSize='subheading'>
				{value}
			</Text>
			<Text color='textSecondary' fontSize='subheading'>
				{label}
			</Text>
		</View>
	);
};

export default StatisticsItem;
