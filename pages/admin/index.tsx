
import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image.js';

import AdminPageCard from '../../components/AdminCard';
import Layout from '../../components/Layout';
import { useMetaData } from '../../lib/hooks/useMetaData';
import { githubUsers } from '../../src/users';
import { authOptions } from '../api/auth/[...nextauth]';

const pages: { name: string, url: string, svg: string; }[] = [
	{
		name: 'Projects',
		url: '/admin/projects',
		svg: '/assets/images/projects.svg',
	},
	{
		name: 'Management',
		svg: '/assets/images/management.svg',
		url: '/admin/management',
	},
];

const Admin: NextPage = () => {
	const { data } = useSession();

	return (
		<>
			{useMetaData('Admin', 'Admin Page', '/admin')}
			<Layout>
				<div>
					<div className='h-screen container'>
						<h1 className='text-5xl font-bold mb-5'>Admin Menu</h1>
						<div className='grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
							{pages.map(({ name, svg, url }, i) => {
								return (
									<AdminPageCard name={name} svg={svg} url={url} key={i} />
								);
							})}
						</div>
						<div className='h-96 grid grid-cols gap-4 place-content-center text-black'>
							<div>
								<Image
									src={data!.user!.image!}
									alt={data!.user!.name!}
									width={64}
									height={64}
								/>
								<h1 className='bg-egg-sour text-center font-bold py-3 px-5 text-2xl rounded-2xl transition-all duration-300 ease-in-out'>
									{data?.user?.name}
								</h1>
							</div>
							<button className='bg-egg-sour hover:bg-orange-200 font-bold py-3 px-5 text-2xl rounded-2xl transition-all duration-300 ease-in-out' onClick={(): Promise<unknown> => signOut()}>
								Sign Out
							</button>
						</div>
					</div>
					<div className='bg-gradient-to-b from-white to-egg-sour p-8' />
				</div>
			</Layout>
		</>
	);
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (!session) {
		return {
			redirect: {
				destination: '/admin/login',
				permanent: false,
			},
		};
	}

	// @ts-ignore
	if (!(githubUsers.map(e => e.gitHubId)).includes(parseInt(session.user?.sub))) {
		return {
			redirect: {
				destination: '/unauthorized',
				permanent: false
			}
		};
	}

	return {
		props: {
			session: {
				user: {
					name: session.user?.name,
					email: session.user?.email,
					image: session.user?.image ?? null,
				},
			},
		},
	};
};