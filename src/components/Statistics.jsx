import React from 'react';

import { View, StyleSheet } from 'react-native';
import StatisticsItem from './StatisticsItem';

const styles = StyleSheet.create({
	mainContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 8,
		paddingHorizontal: 10
	}
});

const Statistics = ({ item }) => {
	return (
		<View style={styles.mainContainer}>
			<StatisticsItem
				testID='stars'
				label='Stars'
				value={
					(item.stargazersCount / 1000)
						.toFixed(1)
						.replace(/\.0$/, '') + 'k'
				}
			/>
			<StatisticsItem
				testID='forks'
				label='Forks'
				value={
					(item.forksCount / 1000).toFixed(1).replace(/\.0$/, '') +
					'k'
				}
			/>
			<StatisticsItem
				testID='reviews'
				label='Reviews'
				value={item.reviewCount}
			/>
			<StatisticsItem
				testID='rating'
				label='Rating'
				value={item.ratingAverage}
			/>
		</View>
	);
};

export default Statistics;
