import { NextPage } from 'next';

const NotFound: NextPage = () => {
	return (<>
		<div id="content" className="h-screen w-screen grid items-center">
			<div>
				<img alt="Luyx Development Small" src={'/assets/images/cube.svg'} className="mx-auto h-16 md:h-32" />
				<h1 className="text-2xl md:text-4xl text-center mt-4">
					This page doesn't exist.
				</h1>
			</div>
		</div>
	</>);
};

export default NotFound;