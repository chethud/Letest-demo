/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/stores",
        destination: "/contact?section=store-locator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
