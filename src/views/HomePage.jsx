'use client';
import React from 'react';
import { Card } from 'antd';
import { Row, Col, Button } from 'reactstrap';
// Import Next.js components for image optimization
import Image from 'next/image';
import { useRouter } from 'next/router';

const HomePage = () => {
	const router = useRouter();

	const handleToTestButtonClick = () => {
		router.push('/test'); // Redirect to the test page
	};
	return (
		<div>
			<div className="landing-container">
				<div className="my-5">
					<Image src="/teamway-logo.svg" width={150} height={70} alt="logo" />
				</div>
				<div>
					<Row>
						<Col lg="4" md="4" sm="4">
							<Card title="Take the Test" className="home-description-card">
								<span>Answer a series of questions to learn about your personality.</span>
							</Card>
						</Col>
						<Col lg="4" md="4" sm="4">
							<Card title="Get Insights" className="mobile-margin-top home-description-card">
								<span>Receive detailed insights based on your test results.</span>
							</Card>
						</Col>
						<Col lg="4" md="4" sm="4">
							<Card title="Explore Traits" className="mobile-margin-top home-description-card">
								<span>Explore different personality traits and characteristics.</span>
							</Card>
						</Col>
					</Row>
				</div>
				<div className="to-test-page-button">
					<Button className="next-button" onClick={handleToTestButtonClick}>
						Take your test
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
