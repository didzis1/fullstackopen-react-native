import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
	${CORE_REPOSITORY_FIELDS}
	query Repository(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
		$after: String
		$first: Int
	) {
		repositories(
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
			after: $after
			first: $first
		) {
			edges {
				node {
					...CoreRepositoryFields
				}
				cursor
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
		}
	}
`;

export const GET_REPOSITORY = gql`
	${CORE_REPOSITORY_FIELDS}
	query Repository($id: ID!, $after: String, $first: Int) {
		repository(id: $id) {
			url
			...CoreRepositoryFields
			reviews(after: $after, first: $first) {
				pageInfo {
					hasPreviousPage
					hasNextPage
					startCursor
					endCursor
				}
				edges {
					cursor
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
	query User($includeReviews: Boolean!, $after: String, $first: Int) {
		authorizedUser {
			id
			username
			reviews(after: $after, first: $first)
				@include(if: $includeReviews) {
				pageInfo {
					hasPreviousPage
					hasNextPage
					startCursor
					endCursor
				}
				edges {
					cursor
					node {
						id
						repositoryId
						repository {
							fullName
						}
						rating
						text
						createdAt
						user {
							username
						}
					}
				}
			}
		}
	}
`;
