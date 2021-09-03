import React from 'react';
import { View, Alert, FlatList, StyleSheet } from 'react-native';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns';
import Button from './Button';
import { useHistory } from 'react-router-native';
import useRemoveReview from '../hooks/useRemoveReview';

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: theme.colors.white,
		paddingBottom: 10
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
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
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	}
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review, refetch }) => {
	let history = useHistory();
	const { removeReview } = useRemoveReview();
	const handleViewRepository = () => {
		history.push(`/${review.node.repositoryId}`);
	};

	const handleRemoveReview = () => {
		removeReview(review.node.id);
		refetch();
	};

	const handlePopUp = () => {
		console.log('Delete review');
		Alert.alert(
			'Delete review',
			'Are you sure you want to delete this review?',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancelled review deletion')
				},
				{
					text: 'Delete',
					onPress: () => handleRemoveReview()
				}
			]
		);
	};

	return (
		<View style={styles.mainContainer}>
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
						{review.node.repository.fullName}
					</Text>
					<Text fontSize='subheading' color='textSecondary'>
						{format(new Date(review.node.createdAt), `dd.MM.yyyy`)}
					</Text>
					<Text fontSize='subheading'>{review.node.text}</Text>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					onPress={handleViewRepository}
					style={{ paddingHorizontal: 20 }}>
					View repository
				</Button>
				<Button
					onPress={() => handlePopUp()}
					style={{
						backgroundColor: '#cc0000',
						paddingHorizontal: 20
					}}>
					Delete review
				</Button>
			</View>
		</View>
	);
};

const UserReviews = () => {
	const { authorizedUser, fetchMore, refetch } = useAuthorizedUser({
		includeReviews: true,
		first: 7
	});

	const reviews = authorizedUser?.reviews;

	const onEndReach = () => {
		fetchMore();
	};

	return (
		<FlatList
			data={reviews?.edges}
			renderItem={({ item }) => (
				<ReviewItem review={item} refetch={refetch} />
			)}
			keyExtractor={(reviews) => reviews.node.id}
			ItemSeparatorComponent={ItemSeparator}
			onEndReached={onEndReach}
		/>
	);
};

export default UserReviews;
