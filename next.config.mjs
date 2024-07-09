/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'buy.stripe.com'
            },
            {
                protocol:'https',
                hostname: 'www.bookmanindia.com'
            }
        ]
    }
};

export default nextConfig;
