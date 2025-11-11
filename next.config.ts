import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Use this if your project includes images
  },
};

export default nextConfig;
