import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReviewForm from './CreateReviewForm';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: '#e1e4e8'
	}
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<Switch>
				<Route path='/' exact>
					<RepositoryList />
				</Route>
				<Route path='/signin' exact>
					<SignIn />
				</Route>
				<Route path='/signup' exact>
					<SignUp />
				</Route>
				<Route path='/create-review' exact>
					<CreateReviewForm />
				</Route>
				<Route path='/:id'>
					<SingleRepository />
				</Route>

				<Redirect to='/' />
			</Switch>
		</View>
	);
};

export default Main;
