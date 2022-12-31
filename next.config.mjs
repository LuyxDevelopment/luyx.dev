/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'cdn.discordapp.com',
			'skillicons.dev',
			'127.0.0.1'
		]
	}
};

export default nextConfig;
