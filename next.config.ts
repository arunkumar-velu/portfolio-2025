import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zepic-webflow.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "freshworks.com",
      },
      {
        protocol: "https",
        hostname: "www.freshworks.com",
      },
      {
        protocol: "https",
        hostname: "www.cognizant.com",
      },
    ],
  },
};

export default nextConfig;
