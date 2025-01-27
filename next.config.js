/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // You can add these as well
        // port: '',
      },
    ],
  },
};

module.exports = nextConfig;
