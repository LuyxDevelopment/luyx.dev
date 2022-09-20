import { useEffect } from 'react';

function Discord(): JSX.Element {

	useEffect(() => {
		window.location.href = 'https://discord.gg/jRUWbXhCYN';
	}, []);

	return <div />;
}

export default Discord;