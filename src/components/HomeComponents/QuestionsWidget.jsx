// Import necessary components and hooks
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../../redux/actions';
import React, { useState, useEffect } from 'react';
import questionsData from '../../pages/api/questions';
import Link from 'next/link';

// Define the QuestionsWidget component
const QuestionsWidget = () => {
	// Get access to the Redux dispatch function and answers from the Redux store
	const dispatch = useDispatch();
	const answers = useSelector((state) => state.answers);

	// Define component state to hold questions, current question index, and selected answer index
	const [ questions, setQuestions ] = useState([]);
	const [ currentQuestion, setCurrentQuestion ] = useState(0);
	const selectedAnswerIndex = answers[currentQuestion]; // Get selected answer index from Redux

	// Fetch questions data when the component mounts
	useEffect(() => {
		setQuestions(questionsData);
	}, []);

	// Function to handle moving to the next question
	const handleNext = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	// Function to handle moving to the previous question
	const handlePrevious = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	// Function to handle selecting an answer
	const handleAnswerSelect = (answerIndex) => {
		dispatch(setAnswer(currentQuestion, answerIndex));
	};

	// Determine whether the "Next" button should be disabled
	const isNextButtonDisabled = selectedAnswerIndex === undefined || selectedAnswerIndex === null;

	// Render the component
	return (
		<div className="mt-4">
			<Card className="questions-widget-main-card">
				{/* Loop through questions and display one at a time */}
				{questions.map((question, index) => (
					<div key={index} style={{ display: index === currentQuestion ? 'block' : 'none' }}>
						<span className="question-number">
							Question {index + 1} / {questions.length}
						</span>
						<div className="questions">{question.question}</div>
						<div className="required-text">All questions are required</div>
						<div className="d-flex flex-column mt-3">
							{/* Loop through answers for the current question */}
							{question.answers.map((answer, answerIndex) => (
								<div
									className={`answers-widgets mt-2 ${selectedAnswerIndex === answerIndex
										? 'selected-answer'
										: ''}`}
									key={answerIndex}
									onClick={() => handleAnswerSelect(answerIndex)}
								>
									<span
										className={`answer-label ${selectedAnswerIndex === answerIndex
											? 'selected-answer-label'
											: ''}`}
									>
										{'ABCD'[answerIndex]}
									</span>

									<span className="mx-3">{answer}</span>
								</div>
							))}
						</div>
						<div className="d-flex justify-content-between mt-5">
							{/* Show "Previous" button if not on the first question */}
							{currentQuestion > 0 && (
								<Button className="previous-button" onClick={handlePrevious}>
									Previous
								</Button>
							)}
							{/* Show "Submit" button if on the last question */}
							{currentQuestion === questions.length - 1 && (
								<Link href="/results">
									<Button className="submit-button" disabled={isNextButtonDisabled}>
										Submit
									</Button>
								</Link>
							)}
							{/* Show "Next" button if not on the last question */}
							{currentQuestion < questions.length - 1 && (
								<Button
									className="next-button"
									onClick={handleNext}
									disabled={isNextButtonDisabled} // Disable Next button if no answer is selected
								>
									Next
								</Button>
							)}
						</div>
					</div>
				))}
			</Card>
		</div>
	);
};

// Export the component as the default export
export default QuestionsWidget;
