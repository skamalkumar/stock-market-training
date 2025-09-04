/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  experimental: {
    netlifyPlugin: {
      // ✅ Enable Netlify Forms detection for Next.js
      forms: true,
    },
  },
  reactStrictMode: true, // optional but recommended
};

module.exports = nextConfig;
