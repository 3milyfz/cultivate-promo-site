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
  /* Disable Next.js DevTools floating button for cleaner UX in this promo site. */
  devIndicators: {
    appIsrStatus: false,
  },
  devtools: {
    enabled: false,
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
