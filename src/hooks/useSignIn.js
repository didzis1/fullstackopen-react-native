import { useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';

const useSignIn = () => {
	// eslint-disable-next-line no-unused-vars
	const [mutate, result] = useMutation(AUTHORIZE_USER);

	const signIn = async ({ username, password }) => {
		return await mutate({
			variables: { credentials: { username, password } }
		});
	};
	return [signIn, result];
};

export default useSignIn;
