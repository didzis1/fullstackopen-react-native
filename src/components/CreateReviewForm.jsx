import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import Button from './Button';

const initialValues = {
	ownerName: '',
	repositoryName: '',
	rating: '',
	review: ''
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		padding: 15
	}
});

const CreateReviewForm = () => {
	const onSubmit = () => {
		console.log('New review created');
	};

	return (
		<View>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ handleSubmit }) => (
					<View style={styles.container}>
						<FormikTextInput
							name='ownerName'
							placeholder='Repository owner name'
						/>

						<FormikTextInput
							name='repositoryName'
							placeholder='Repository name'
						/>

						<FormikTextInput
							name='rating'
							placeholder='Rating between 0 and 100'
						/>

						<FormikTextInput name='review' placeholder='Review' />

						<Button onPress={handleSubmit}>Create a review</Button>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default CreateReviewForm;
