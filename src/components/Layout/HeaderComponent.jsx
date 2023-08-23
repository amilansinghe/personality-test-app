// Import necessary components from 'antd'
import { Layout, Avatar } from 'antd';
const { Header } = Layout;
// Import Next.js components for image optimization
import Image from 'next/image';
// Import specific icon from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import Link from 'next/link';

// Define the HeaderComponent component
const HeaderComponent = () => {
	return (
		<Header className="fixed-top nav-bar" style={{ zIndex: 150 }}>
			{/* Create a header with a flexible layout */}
			<div className="d-flex justify-content-between">
				{/* Display the logo using the optimized Image component */}
				<Link href="/">
					<Image src="/teamway-logo.svg" width={150} height={70} alt="logo" />
				</Link>

				{/* Display user information with name and avatar */}
				<div className="d-flex justify-content-center">
					{/* Display the user's name */}
					<span className="header-user-name">Hi Amila</span>
					{/* Display an Avatar icon with UserOutlined icon */}
					<Avatar size={32} icon={<UserOutlined />} className="mt-3" />
				</div>
			</div>
		</Header>
	);
};

// Export the HeaderComponent as the default export
export default HeaderComponent;
