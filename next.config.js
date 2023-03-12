/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint:{
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
  images:{
    domains: [''],
  },
}

module.exports = nextConfig
