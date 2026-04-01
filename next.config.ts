import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disable Next.js DevTools floating button for cleaner UX in this promo site. */
  devIndicators: {
    appIsrStatus: false,
  },
  devtools: {
    enabled: false,
  },
};

export default nextConfig;
