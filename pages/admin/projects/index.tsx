import { APIProject, BaseAuthRouteOptions } from 'luyx-management-api-types/v1';
import { GetServerSidePropsContext, NextPage, Redirect } from 'next';
import { DefaultSession, unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

import AdminProjectCard from '../../../components/AdminProjectCard';
import Layout from '../../../components/Layout';
import { useMetaData } from '../../../lib/hooks/useMetaData';
import { githubUsers } from '../../../src/users';
import { authOptions } from '../../api/auth/[...nextauth]';

interface Props {
	projects: APIProject[];
}

const AdminProjectsIndex: NextPage<Props> = ({ projects }) => {
	return (
		<>
			{useMetaData('Admin', 'Admin Page', '/admin')}
			<Layout>
				<div className='h-screen container'>
					<h1 className='text-5xl font-bold mb-5'>Admin Menu</h1>
					<div className='grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{projects.map((project, i) => {
							return (
								<AdminProjectCard project={project} key={i} />
							);
						})}
					</div>
				</div>
			</Layout>
		</>
	);
};

export default AdminProjectsIndex;

export const getServerSideProps = async ({
	req,
	res,
}: GetServerSidePropsContext): Promise<{ props: { projects: APIProject[]; session: Partial<DefaultSession>; }; } | { redirect: Redirect; } | { notFound: true; }> => {
	const session = await unstable_getServerSession(req, res, authOptions);
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59',
	);

	const request = await fetch(
		'https://api.luyx.dev/v1/projects',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': process.env.LUYX_API_KEY
			},
		},
	);

	const response = (await request.json()) as BaseAuthRouteOptions<APIProject[]>['Reply'];

	if (!session) {
		return {
			redirect: {
				destination: '/admin/login',
				permanent: false,
			},
		};
	}

	// @ts-ignore
	if (!(Object.values(githubUsers).map(e => e.id)).includes(parseInt(session.user?.sub))) {
		return {
			redirect: {
				destination: '/unauthorized',
				permanent: false
			}
		};
	}

	return {
		props: {
			projects: response.data!,
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