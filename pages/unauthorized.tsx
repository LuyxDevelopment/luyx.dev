import { NextPage } from 'next';
import Layout from '../components/Layout';

const Unauthorized: NextPage = () => {
	return <>
		<Layout>
			<div className='h-screen container'>
				<h1 className='text-5xl font-bold mb-5'>
					This page isn&apos;t for you.
				</h1>
			</div>
		</Layout>
	</>;
};

export default Unauthorized;