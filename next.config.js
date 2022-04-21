/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = withPWA({
	pwa: {
		dest: "public",
	},
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
});

module.exports = nextConfig;
