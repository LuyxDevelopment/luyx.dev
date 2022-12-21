
import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';

import Layout from '../../components/Layout';

const AdminLogin: NextPage = () => {
	const { data: session } = useSession();

	if (session?.user) {
		return (
			<>
				{window.location.href = '/admin'}
			</>
		);
	}
	return (
		<>
			<Layout>
				<div className='relative h-screen'>
					<div className='h-96 grid grid-cols gap-4 place-content-center text-black'>
						<h1 className='text-5xl'>
							Admin Page
						</h1>
						<button className='bg-egg-sour hover:bg-orange-200 font-bold py-3 px-5 text-2xl rounded-2xl transition-all duration-300 ease-in-out' onClick={(): Promise<unknown> => signIn('github')}>
							Sign In
						</button>
						<button className='bg-egg-sour hover:bg-orange-200 font-bold py-3 px-5 text-2xl rounded-2xl transition-all duration-300 ease-in-out' onClick={(): string => (window.location.href = '/')}>
							Home
						</button>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default AdminLogin;