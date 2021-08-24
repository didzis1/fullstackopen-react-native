import React from 'react';
import useRepositories from '../hooks/useRepositories';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10
	}
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const { repositories } = useRepositories();

	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	const renderItem = ({ item }) => {
		return <RepositoryItem key={item.id} item={item} />;
	};
	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={renderItem}
		/>
	);
};

export default RepositoryList;