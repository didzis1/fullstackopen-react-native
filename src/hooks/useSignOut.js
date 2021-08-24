import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignOut = () => {
	const { data } = useQuery(GET_AUTHORIZED_USER);
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const signOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};
	return { data, signOut };
};

export default useSignOut;
