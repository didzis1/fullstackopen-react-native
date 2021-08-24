import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query {
		repositories {
			edges {
				node {
					id
					description
					forksCount
					fullName
					language
					ownerAvatarUrl
					stargazersCount
					reviewCount
					ratingAverage
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
