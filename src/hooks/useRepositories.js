import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortBy) => {
	console.log(sortBy);
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables: {
			orderBy: sortBy.orderBy,
			orderDirection: sortBy.orderDirection
		}
	});

	return { repositories: data?.repositories, error, loading };
};

export default useRepositories;
