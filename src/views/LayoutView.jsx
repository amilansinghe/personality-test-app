// Import necessary components and modules
import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '@/components/Layout/HeaderComponent';

// Define the LayoutView component
const LayoutView = ({ children }) => {
	const { Content } = Layout;

	return (
		<Layout style={{ minHeight: '100vh' }}>
			{/* Create the main layout */}
			<Layout>
				{/* Include the HeaderComponent in the layout */}
				<HeaderComponent />
				{/* Define the content section */}
				<Content
					style={{
						padding: '24px',
						background: '#fff',
						marginTop: '70px'
					}}
				>
					{/* Create a container for the children components */}
					<div className="container">{children}</div>
				</Content>
			</Layout>
		</Layout>
	);
};

// Export the LayoutView component as the default export
export default LayoutView;
