import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { FlatList, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

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

export class RepositoryListContainer extends React.Component {
	renderHeader = () => {
		const { setSearchValue, searchValue, selectedValue, setSelectedValue } =
			this.props;
		return (
			<>
				<Searchbar
					placeholder='Search repositories'
					onChangeText={setSearchValue}
					value={searchValue}
				/>
				<SortBar
					selectedValue={selectedValue}
					setSelectedValue={setSelectedValue}
					sortByValues={sortByValues}
				/>
			</>
		);
	};

	renderItem = ({ item }) => {
		return <RepositoryItem key={item.id} item={item} />;
	};

	render() {
		const { repositories } = this.props;
		console.log(repositories);
		const repositoryNodes = repositories
			? repositories.edges.map((edge) => edge.node)
			: [];

		return (
			<FlatList
				data={repositoryNodes}
				ItemSeparatorComponent={ItemSeparator}
				ListHeaderComponent={this.renderHeader}
				renderItem={this.renderItem}
				onEndReached={this.props.onEndReach}
				onEndReachedThreshold={0.5}
			/>
		);
	}
}

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const [selectedValue, setSelectedValue] = useState(sortByValues.latest);
	const [searchValue, setSearchValue] = useState('');
	const [debouncedSearch] = useDebounce(searchValue, 500);
	const variables = { ...selectedValue, searchKeyword: debouncedSearch };

	const { repositories, fetchMore } = useRepositories({
		...variables,
		first: 5
	});
	const onEndReach = () => {
		fetchMore();
	};

	return (
		<RepositoryListContainer
			repositories={repositories}
			setSearchValue={(query) => setSearchValue(query)}
			searchValue={searchValue}
			selectedValue={selectedValue}
			setSelectedValue={setSelectedValue}
			sortByValues={sortByValues}
			onEndReach={onEndReach}
		/>
	);
};

export default RepositoryList;
