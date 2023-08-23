// redux/actions.js

// Action types
export const SET_ANSWER = 'SET_ANSWER';

// Action creators
export const setAnswer = (questionIndex, answerIndex) => ({
	type: SET_ANSWER,
	payload: { questionIndex, answerIndex }
});
