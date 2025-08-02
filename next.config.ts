import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.codepen.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
    ],
    // Only enable dangerouslyAllowSVG if you specifically need SVG images from these sources
    dangerouslyAllowSVG: true,
    // Optional: Add contentSecurityPolicy to enhance security when using dangerouslyAllowSVG
    contentSecurityPolicy:
      "default-src 'self'; img-src 'self' https://placehold.co https://assets.codepen.io;",
  },
};

export default nextConfig;
