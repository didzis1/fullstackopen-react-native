import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import useSignOut from '../hooks/useSignOut';

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
	const { data, signOut } = useSignOut();

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
				{data?.authorizedUser ? (
					<Link
						to='/signin'
						component={AppBarTab}
						text='Sign Out'
						onPress={handleSignOut}
					/>
				) : (
					<Link to='/signin' component={AppBarTab} text='Sign In' />
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;
