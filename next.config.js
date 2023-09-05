/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_KEY : process.env.API_KEY,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.facebook.com',
                port: '',
                pathname: '/',
            },
            {
                protocol: 'https',
                hostname: 'www.twitter.com',
                port: '',
                pathname: '/',
            },
            {
                protocol: 'https',
                hostname: 'www.instagram.com',
                port: '',
                pathname: '/',
            },
            {
                protocol: 'https',
                hostname: 'www.linkedin.com',
                port: '',
                pathname: '/',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**',
            },
        ],
    },
}

module.exports = nextConfig
