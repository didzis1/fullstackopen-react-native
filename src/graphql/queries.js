import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
	${CORE_REPOSITORY_FIELDS}
	query Repository(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
	) {
		repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
			edges {
				node {
					...CoreRepositoryFields
				}
			}
		}
	}
`;

export const GET_REPOSITORY = gql`
	${CORE_REPOSITORY_FIELDS}
	query Repository($id: ID!) {
		repository(id: $id) {
			url
			...CoreRepositoryFields
			reviews {
				edges {
					node {
						id
						text
						rating
						createdAt
						user {
							id
							username
						}
					}
				}
			}
		}
	}
`;

export const GET_AUTHORIZED_USER = gql`
	query {
		authorizedUser {
			id
			username
		}
	}
`;
