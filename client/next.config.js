/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.IgnorePlugin({
				resourceRegExp: /^electron$/,
			}),
		);
		return config;
	},
	reactStrictMode: true,
	images: {
		domains: ["*.amazonaws.com", "images.unsplash.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.amazonaws.com",
			},
		],
	},
};
module.exports = nextConfig;
