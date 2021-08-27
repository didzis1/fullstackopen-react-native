import React from 'react';
import convertToKPrefix from '../../utils/convertToKPrefix';
import { RepositoryListContainer } from '../../components/RepositoryList';

import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
	describe('RepositoryListContainer', () => {
		it('renders repository information correctly', () => {
			const repositories = {
				totalCount: 8,
				pageInfo: {
					hasNextPage: true,
					endCursor:
						'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
					startCursor:
						'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd'
				},
				edges: [
					{
						node: {
							id: 'jaredpalmer.formik',
							fullName: 'jaredpalmer/formik',
							description:
								'Build forms in React, without the tears',
							language: 'TypeScript',
							forksCount: 1619,
							stargazersCount: 21856,
							ratingAverage: 88,
							reviewCount: 3,
							ownerAvatarUrl:
								'https://avatars2.githubusercontent.com/u/4060187?v=4'
						},
						cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd'
					},
					{
						node: {
							id: 'async-library.react-async',
							fullName: 'async-library/react-async',
							description:
								'Flexible promise-based React data loader',
							language: 'JavaScript',
							forksCount: 69,
							stargazersCount: 1760,
							ratingAverage: 72,
							reviewCount: 3,
							ownerAvatarUrl:
								'https://avatars1.githubusercontent.com/u/54310907?v=4'
						},
						cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ=='
					}
				]
			};

			// Add your test code here
			const { getAllByTestId } = render(
				<RepositoryListContainer repositories={repositories} />
			);

			// Get both repositories from the array
			const firstRepository = repositories.edges[0].node;
			const secondRepository = repositories.edges[1].node;

			// Get rendered items by test ID
			const fullnames = getAllByTestId('fullname');
			const descriptions = getAllByTestId('description');
			const languages = getAllByTestId('language');
			const stars = getAllByTestId('stars');
			const reviews = getAllByTestId('reviews');
			const forks = getAllByTestId('forks');
			const rating = getAllByTestId('rating');

			// Test if first repository items are rendered correctly
			expect(fullnames[0]).toHaveTextContent(firstRepository.fullName);
			expect(descriptions[0]).toHaveTextContent(
				firstRepository.description
			);
			expect(languages[0]).toHaveTextContent(firstRepository.language);
			expect(stars[0]).toHaveTextContent(
				convertToKPrefix(firstRepository.stargazersCount)
			);
			expect(forks[0]).toHaveTextContent(
				convertToKPrefix(firstRepository.forksCount)
			);
			expect(reviews[0]).toHaveTextContent(firstRepository.reviewCount);
			expect(rating[0]).toHaveTextContent(firstRepository.ratingAverage);

			// Test if second repository items are rendered correctly

			expect(fullnames[1]).toHaveTextContent(secondRepository.fullName);
			expect(descriptions[1]).toHaveTextContent(
				secondRepository.description
			);
			expect(languages[1]).toHaveTextContent(secondRepository.language);
			expect(stars[1]).toHaveTextContent(
				convertToKPrefix(secondRepository.stargazersCount)
			);
			expect(forks[1]).toHaveTextContent(
				convertToKPrefix(secondRepository.forksCount)
			);
			expect(reviews[1]).toHaveTextContent(secondRepository.reviewCount);
			expect(rating[1]).toHaveTextContent(secondRepository.ratingAverage);
		});
	});
});
