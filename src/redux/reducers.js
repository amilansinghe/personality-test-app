// redux/reducers.js

import { combineReducers } from 'redux';
import { SET_ANSWER } from './actions';

// Initial state
const initialState = {
	answers: []
};

// Reducer function for answers
const answersReducer = (state = initialState.answers, action) => {
	switch (action.type) {
		case SET_ANSWER:
			const { questionIndex, answerIndex } = action.payload;
			const updatedAnswers = [ ...state ];
			updatedAnswers[questionIndex] = answerIndex;
			return updatedAnswers;
		default:
			return state;
	}
};

// Combine reducers
const rootReducer = combineReducers({
	answers: answersReducer
});

export default rootReducer;
