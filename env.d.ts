declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_APP_ID: number;
			GITHUB_CLIENT_ID: string;
			GITHUB_INSTALLATION_ID: number;
			GITHUB_SECRET: string;
			GITHUB_PRIVATE_KEY: string;
			LUYX_API_KEY: string;
			NEXTAUTH_URL: string;
		}
	}
}

export { };
