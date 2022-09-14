/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.google.com.pk',
            }
          ]
  }
}
module.exports = nextConfig