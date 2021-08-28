import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import Loading from './Loading';
import theme from '../theme';
import { format } from 'date-fns';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: theme.colors.white,
		padding: 10
	},
	circleText: {
		fontSize: 20,
		color: theme.colors.primary
	},
	circleItem: {
		padding: 5
	},
	circle: {
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: theme.colors.primary,
		borderRadius: 50 / 2,
		width: 50,
		height: 50
	},
	ratingItem: {
		flexShrink: 1,
		padding: 5
	},
	separator: {
		height: 10
	},
	headerSeparator: {
		paddingBottom: 10
	}
});

const RepositoryInfo = ({ repository }) => {
	return <RepositoryItem item={repository} />;
};

const ReviewItem = ({ review }) => {
	return (
		<View key={review.node.id} style={styles.container}>
			<View style={styles.circleItem}>
				<View style={styles.circle}>
					<Text style={styles.circleText} fontWeight='bold'>
						{review.node.rating}
					</Text>
				</View>
			</View>
			<View style={styles.ratingItem}>
				<Text fontSize='subheading' fontWeight='bold'>
					{review.node.user.username}
				</Text>
				<Text fontSize='subheading' color='textSecondary'>
					{format(new Date(review.node.createdAt), `dd.MM.yyyy`)}
				</Text>
				<Text fontSize='subheading'>{review.node.text}</Text>
			</View>
		</View>
	);
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
	const { id } = useParams();

	const { loading, data } = useQuery(GET_REPOSITORY, {
		variables: { id }
	});

	if (loading) {
		return <Loading />;
	}

	const repositoryData = data.repository;
	const { reviews, ...repository } = repositoryData;

	return (
		<FlatList
			data={reviews.edges}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={({ id }) => id}
			ListHeaderComponent={() => (
				<RepositoryInfo repository={repository} />
			)}
			ListHeaderComponentStyle={styles.headerSeparator}
			ItemSeparatorComponent={ItemSeparator}
		/>
	);
};

export default SingleRepository;
