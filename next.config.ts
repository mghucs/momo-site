import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://tecdn.b-cdn.net/**')],
  },
};

export default nextConfig;
