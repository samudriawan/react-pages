import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { About, Layout } from './components';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index path="/" element={<App />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
);
