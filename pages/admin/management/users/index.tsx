import { APIUser, BaseAuthRouteOptions } from 'luyx-management-api-types/v1';
import { GetServerSidePropsContext, NextPage, Redirect } from 'next';
import { DefaultSession, unstable_getServerSession } from 'next-auth';

import AdminUserCard from '../../../../components/AdminUserCard';
import Layout from '../../../../components/Layout';
import { useMetaData } from '../../../../lib/hooks/useMetaData';
import { githubUsers } from '../../../../src/users';
import { authOptions } from '../../../api/auth/[...nextauth]';

interface Props {
	users: APIUser[];
}

const AdminUsersIndex: NextPage<Props> = ({ users }) => {
	return (
		<>
			{useMetaData('Admin', 'Admin Page', '/admin')}
			<Layout>
				<div className='h-screen container'>
					<h1 className='text-5xl font-bold mb-5'>Admin Menu</h1>
					<p className='mb-4'>Click to manage a user.</p>
					<div className='grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{users.map((user, i) => {
							return (
								<AdminUserCard user={user} key={i} />
							);
						})}
					</div>
				</div>
			</Layout>
		</>
	);
};

export default AdminUsersIndex;

export const getServerSideProps = async ({
	req,
	res,
}: GetServerSidePropsContext): Promise<{ props: { users: APIUser[]; session: Partial<DefaultSession>; }; } | { redirect: Redirect; } | { notFound: true; }> => {
	const session = await unstable_getServerSession(req, res, authOptions);

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59',
	);

	const request = await fetch(
		'https://api.luyx.dev/v1/users',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': process.env.LUYX_API_KEY
			},
		},
	);

	const response = (await request.json()) as BaseAuthRouteOptions<APIUser[]>['Reply'];

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
			users: response.data!,
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