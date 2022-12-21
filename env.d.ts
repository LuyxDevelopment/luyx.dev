declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_CLIENT_ID: string;
			GITHUB_SECRET: string;
			LUYX_API_KEY: string;
			NEXTAUTH_URL: string;
			NEXTAUTH_SECRET: string;
		}
	}
}

export { };