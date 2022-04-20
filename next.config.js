/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.tmdb.org"],
	},
	async redirects() {
		return [
			{
				source: "/movie",
				destination: "/movie/popular",
				permanent: true,
			},
			{
				source: "/tv",
				destination: "/tv/popular",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
