import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "5000",
				pathname: "/uploads/**",
			},
		],
	},
};

export default nextConfig;
