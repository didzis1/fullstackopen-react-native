import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	const [repositories, setRepositories] = useState();

	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network'
	});

	const fetchRepositories = () => {
		if (error) {
			throw new Error('Error while fetching data');
		}
		if (data) {
			setRepositories(data.repositories);
		}
	};

	useEffect(() => {
		fetchRepositories();
	}, []);

	return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
