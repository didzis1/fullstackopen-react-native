import React from 'react';

import { View, StyleSheet, Image } from 'react-native';

import Description from './Description';
import Statistics from './Statistics';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF'
	}
});

const RepositoryItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Description item={item} />
			<Statistics item={item} />
		</View>
	);
};

export default RepositoryItem;
