import { GetServerSidePropsContext, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { getSession, signIn, signOut, useSession } from 'next-auth/react';

import Layout from '../../components/Layout';
import { authOptions } from '../api/auth/[...nextauth]';

const AdminLogin: NextPage = () => {
	const { data: session } = useSession();

	if (session?.user) {
		return (
			<>
				<Layout>
					<div>
						<h1>Signed in as {session.user.email}</h1>
						<button onClick={(): Promise<unknown> => signOut()}>Sign out</button>
					</div>
				</Layout>
			</>
		);
	}

	return (
		<>
			<Layout>
				<h1>Not signed in</h1>
				<button onClick={(): Promise<unknown> => signIn()}>Sign in</button>
			</Layout>
		</>
	);
};

export default AdminLogin;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await unstable_getServerSession(context.req, context.res, authOptions);

	console.log(session);

	return {
		props: {
			session,
		},
	};
}