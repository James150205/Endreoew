import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'localhost',
    'localhost:3000',
    '192.168.110.131',
    '192.168.110.131:3000',
  ],
};

export default nextConfig;
