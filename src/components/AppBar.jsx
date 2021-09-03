import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		height: 100,
		backgroundColor: 'rgba(0, 0, 0, 0.85)',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end'
	}
});

const AppBar = () => {
	const variables = {
		includeReviews: false
	};
	const { authorizedUser, signOut } = useAuthorizedUser(variables);

	const handleSignOut = async () => {
		try {
			await signOut();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<Link to='/' component={AppBarTab} text='Repositories' />
				{authorizedUser ? (
					<>
						<Link
							to='/create-review'
							component={AppBarTab}
							text='Create a review'
						/>
						<Link
							to='/my-reviews'
							component={AppBarTab}
							text='My reviews'
						/>
						<Link
							to='/signin'
							component={AppBarTab}
							text='Sign out'
							onPress={handleSignOut}
						/>
					</>
				) : (
					<>
						<Link
							to='/signin'
							component={AppBarTab}
							text='Sign in'
						/>
						<Link
							to='/signup'
							component={AppBarTab}
							text='Sign up'
						/>
					</>
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;
