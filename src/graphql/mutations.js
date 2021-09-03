import { gql } from '@apollo/client';

export const AUTHORIZE_USER = gql`
	mutation authorize($credentials: AuthorizeInput!) {
		authorize(credentials: $credentials) {
			accessToken
		}
	}
`;

export const CREATE_REVIEW = gql`
	mutation createReview($review: CreateReviewInput!) {
		createReview(review: $review) {
			repositoryId
		}
	}
`;

export const CREATE_USER = gql`
	mutation createUser($user: CreateUserInput!) {
		createUser(user: $user) {
			username
		}
	}
`;

export const DELETE_REVIEW = gql`
	mutation deleteReview($id: ID!) {
		deleteReview(id: $id)
	}
`;
