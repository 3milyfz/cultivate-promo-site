import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/docs", destination: "/wiki", permanent: true },
      { source: "/docs/:path*", destination: "/wiki/:path*", permanent: true },
      { source: "/promo", destination: "/demo", permanent: true },
      { source: "/promo/:path*", destination: "/demo/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
