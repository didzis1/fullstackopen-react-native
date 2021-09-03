import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useAuthorizedUser = (variables) => {
	const { data, error, loading, fetchMore, refetch } = useQuery(
		GET_AUTHORIZED_USER,
		{
			fetchPolicy: 'cache-and-network',
			variables
		}
	);

	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const handleFetchMore = () => {
		console.log(data);
		const canFetchMore =
			!loading && data.authorizedUser.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.authorizedUser.reviews.pageInfo.endCursor,
				...variables
			}
		});
	};

	const signOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return {
		authorizedUser: data?.authorizedUser,
		error,
		loading,
		fetchMore: handleFetchMore,
		signOut,
		refetch
	};
};

export default useAuthorizedUser;
