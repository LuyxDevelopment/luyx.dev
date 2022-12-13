import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET!,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	callbacks: {
		redirect({ url, baseUrl }) {
			if (url.startsWith('/'))
				return `${baseUrl}${url}`;

			else if (new URL(url).origin === baseUrl)
				return url;

			return baseUrl;
		},
	}
};
export default NextAuth(authOptions);