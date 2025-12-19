import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for production builds to avoid build errors
  experimental: {
    turbo: false,
  },
  async rewrites() {
    return [
      {
        source: '/_files/ugd/e86beb_0befdaea0e3c4487bbbef1875b5c0507.pdf',
        destination: '/privacy',
      },
    ];
  },
};

export default nextConfig;
