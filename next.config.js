/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

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

export default nextConfig;
