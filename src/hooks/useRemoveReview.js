import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useRemoveReview = () => {
	const [mutate, result] = useMutation(DELETE_REVIEW);

	const removeReview = async (id) => {
		const { data } = await mutate({
			variables: { id }
		});

		return data;
	};

	return {
		removeReview,
		result
	};
};

export default useRemoveReview;
