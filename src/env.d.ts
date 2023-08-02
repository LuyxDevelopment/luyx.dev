declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GH_CLIENT_ID: string;
			GH_SECRET: string;
			LUYX_API_KEY: string;
			NEXTAUTH_URL: string;
			NEXTAUTH_SECRET: string;
		}
	}
}

export { };