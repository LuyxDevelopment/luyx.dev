import { StrictMode } from 'react';
import { render } from 'react-dom';
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

render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	</StrictMode>,
	document.getElementById('root'),
);
