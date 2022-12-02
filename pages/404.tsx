import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const NotFound: NextPage = () => {
	return (
		<>
			{useMetaData('Page not found', 'Page not found', '/')}
			<Layout>
				<div className='relative h-screen'>
					<div className='h-96 grid grid-cols gap-4 place-content-center text-black'>
						<h1 className='text-7xl font-bold'>404</h1>
						<p className='text-lg'>Oops, this page doesn&apos;t exist</p>
						<button className='h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-bean-red rounded-lg focus:shadow-outline' onClick={(): string => (window.location.href = '/')}>Home</button>
					</div>
				</div>
				<div className='bg-gradient-to-b from-white to-egg-sour p-8' />
			</Layout>
		</>
	);
};

export default NotFound;