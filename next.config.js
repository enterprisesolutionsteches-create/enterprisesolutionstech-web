const crypto = require("crypto");
/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_S3_ROOT ?? ""],
    loader: "akamai",
    path: "/",
  },
  output: "standalone",
  headers: async () => {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: isDevelopment ? "*" : "https://tudominio.com", 
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true", 
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

