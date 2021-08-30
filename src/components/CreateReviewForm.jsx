import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import Button from './Button';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';

const initialValues = {
	ownerName: '',
	repositoryName: '',
	rating: '',
	text: ''
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		padding: 15
	}
});

const CreateReviewForm = () => {
	const [createReview] = useCreateReview();
	let history = useHistory();

	const onSubmit = async ({ ...data }) => {
		const formattedData = { ...data, rating: Number(data.rating) };
		const response = await createReview(formattedData);
		history.push(response.createReview.repositoryId);
	};

	const validationSchema = yup.object().shape({
		ownerName: yup.string().required("Owner's name is required"),
		repositoryName: yup.string().required('Repository name is required'),
		rating: yup
			.number()
			.min(0, 'Minimun rating is 0')
			.max(100, 'Max rating is 100')
			.typeError('You must specify a number.'),
		review: yup.string().notRequired()
	});

	return (
		<View>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}>
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

						<FormikTextInput
							name='text'
							placeholder='Review'
							multiline
						/>

						<Button onPress={handleSubmit}>Create a review</Button>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default CreateReviewForm;
