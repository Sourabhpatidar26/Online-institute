/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.daisyui.com',
				pathname: '**',
			},
		],
	}
};

export default nextConfig;