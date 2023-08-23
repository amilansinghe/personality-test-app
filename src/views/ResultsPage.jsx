import React from 'react';
import { useSelector } from 'react-redux';
import questionsData from '../pages/api/questions';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const ResultsPage = () => {
	const answers = useSelector((state) => state.answers);

	return (
		<div className="results-container">
			{questionsData.map((question, index) => (
				<Card className="questions-widget-main-card mt-3" key={index}>
					<div className="question-page-question">
						Question {index + 1}: {question.question}
					</div>
					<div className="question-user-answer mt-1">
						Your Answer: {question.answers[answers[index]]}
						{answers[index] === question.correctAnswerIndex ? (
							<CheckCircleOutlined style={{ color: 'green', marginLeft: '8px' }} />
						) : (
							<CloseCircleOutlined style={{ color: 'red', marginLeft: '8px' }} />
						)}
					</div>
					<div className="correct-answer mt-1">
						Correct Answer: {question.answers[question.correctAnswerIndex]}
					</div>
				</Card>
			))}
		</div>
	);
};

export default ResultsPage;
