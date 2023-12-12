/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    NODE_ENV: process.env.NODE_ENV
  }
}

module.exports = nextConfig
