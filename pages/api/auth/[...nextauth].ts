import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider, { GithubProfile } from 'next-auth/providers/github';
import { githubUsers } from '../../../src/users';

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GithubProvider({
			clientId: process.env.GH_CLIENT_ID,
			clientSecret: process.env.GH_SECRET,
		}),
	],
	callbacks: {
		session({ session, token }) {
			if (session.user) {
				// @ts-ignore
				session.user.sub = token.sub;
			}
			return session;
		},
		signIn({ profile }) {
			if (!(githubUsers.map(e => e.gitHubId)).includes((profile as GithubProfile).id)) {
				return false;
			}

			return true;
		},
	}
};
export default NextAuth(authOptions);