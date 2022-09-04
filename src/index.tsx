import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import './assets/fonts/font.ttf';

import App from './pages/App';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/" element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
