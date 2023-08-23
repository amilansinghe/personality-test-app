// Import the QuestionsWidget component
import QuestionsWidget from '../components/HomeComponents/QuestionsWidget';
import React from 'react';

// Define the HomePage component
const HomePage = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="col-md-9 col-12">
				{/* Create a column layout */}
				<div className="d-flex flex-column">
					{/* Display the header for the home page */}
					<span className="home-header">Are you an introvert or an extrovert?</span>
					{/* Render the QuestionsWidget component */}
					<QuestionsWidget />
				</div>
			</div>
		</div>
	);
};

// Export the HomePage component as the default export
export default HomePage;
