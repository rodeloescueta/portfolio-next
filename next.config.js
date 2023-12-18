/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agency.betterseller.com",
      },
    ],
  },
};

module.exports = nextConfig;
