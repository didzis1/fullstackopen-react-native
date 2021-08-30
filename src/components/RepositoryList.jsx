import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import SortBar from './SortBar';

const styles = StyleSheet.create({
	separator: {
		height: 10
	}
});

const sortByValues = {
	latest: {
		orderBy: 'CREATED_AT'
	},
	highest: {
		orderBy: 'RATING_AVERAGE',
		orderDirection: 'DESC'
	},
	lowest: {
		orderBy: 'RATING_AVERAGE',
		orderDirection: 'ASC'
	}
};

export const RepositoryListContainer = ({ repositories }) => {
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

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const [selectedValue, setSelectedValue] = useState(sortByValues.latest);
	const { repositories } = useRepositories(selectedValue);

	return (
		<>
			<SortBar
				selectedValue={selectedValue}
				setSelectedValue={setSelectedValue}
				sortByValues={sortByValues}
			/>
			<RepositoryListContainer repositories={repositories} />
		</>
	);
};

export default RepositoryList;
