/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compress: true,
	swcMinify: true,
	images: {
		domains: ["res.cloudinary.com"]
	}
}

module.exports = nextConfig
