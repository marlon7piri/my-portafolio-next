/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  distDir:'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // You can add these as well
        // port: '',
      
      },
    ],
  },
};

module.exports = nextConfig;
