/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'standalone',
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
