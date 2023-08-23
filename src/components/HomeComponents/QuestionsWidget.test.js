import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import QuestionsWidget from './QuestionsWidget';
import { setAnswer } from '../../redux/actions';
import questionsData from '../../pages/api/questions'; // Import questions data
import { getByText } from '@testing-library/dom';

const mockStore = configureStore([]);

describe('QuestionsWidget', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			answers: new Array(questionsData.length).fill(null) // Initialize answers array with null values
		});
	});

	it('renders questions and answers correctly', () => {
		const { getByText, getAllByText } = render(
			<Provider store={store}>
				<QuestionsWidget />
			</Provider>
		);

		expect(getByText('How do you feel in social situations?')).toBeTruthy();

		expect(getAllByText(/Question \d+ \/ \d+/)).toHaveLength(questionsData.length);

		// Add more assertions for your specific content
	});

	it('handles answer selection correctly', () => {
		const { getByText } = render(
			<Provider store={store}>
				<QuestionsWidget />
			</Provider>
		);

		const answerElement = getByText('I feel uncomfortable and prefer to be alone.');

		fireEvent.click(answerElement);

		const expectedAction = setAnswer(0, 0); // Assuming 0 is the answer index and 0 is the question index

		expect(store.getActions()).toContainEqual(expectedAction);
	});

	// Add more test cases as needed
});
