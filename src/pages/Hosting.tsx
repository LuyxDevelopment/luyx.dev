import { useEffect } from 'react';

function Hosting(): JSX.Element {

	useEffect(() => {
		window.location.href = 'https://something.host/en?fpr=fyrlex';
	}, []);

	return <div />;
}

export default Hosting;