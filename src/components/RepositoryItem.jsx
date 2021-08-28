import React from 'react';
import Button from './Button';
import { View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from 'react-router-native';
import * as Linking from 'expo-linking';

import Description from './Description';
import Statistics from './Statistics';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF'
	}
});

const RepositoryItem = ({ item }) => {
	const history = useHistory();
	const handleSelectRepository = () => {
		history.push(`/${item.id}`);
	};

	const handleOpenURL = () => {
		return Linking.openURL(item.url);
	};

	return (
		<Pressable onPress={handleSelectRepository}>
			<View style={styles.container}>
				<Description item={item} />
				<Statistics item={item} />
				{item.url ? (
					<Button onPress={handleOpenURL} style={{ margin: 15 }}>
						Open in GitHub
					</Button>
				) : null}
			</View>
		</Pressable>
	);
};

export default RepositoryItem;
