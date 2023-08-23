// Import global styles
import '@/styles/globals.css';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

// Import the LayoutView component for consistent layout
import LayoutView from '@/views/LayoutView';

// Import the Redux store and Provider from 'react-redux'
import store from '../redux/store';
import { Provider } from 'react-redux';
import React from 'react';
// Define the main App component
export default function App({ Component, pageProps }) {
	return (
		// Provide the Redux store to the app
		<Provider store={store}>
			{/* Use the LayoutView component for consistent layout */}
			<LayoutView>
				{/* Render the specific component with its props */}
				<Component {...pageProps} />
			</LayoutView>
		</Provider>
	);
}
