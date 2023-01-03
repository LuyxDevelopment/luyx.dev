import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider, { GithubProfile } from 'next-auth/providers/github';
import { githubUsers } from '../../../src/users';

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_SECRET,
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
			if (!(Object.values(githubUsers).map(e => e.id)).includes((profile as GithubProfile).id)) {
				return false;
			}

			return true;
		},
	}
};
export default NextAuth(authOptions);