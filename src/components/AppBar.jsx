import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

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
	const handleRepositoriesTab = () => {
		console.log('Repositories tab');
	};

	const handleSignIn = () => {
		console.log('Sign in tab');
	};

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<Link
					to='/'
					component={AppBarTab}
					text='Repositories'
					onPress={handleRepositoriesTab}
				/>
				<Link
					to='/signin'
					component={AppBarTab}
					text='Sign In'
					onPress={handleSignIn}
				/>
			</ScrollView>
		</View>
	);
};

export default AppBar;
