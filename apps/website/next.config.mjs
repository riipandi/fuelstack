/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['@acme/helpers'],
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com', 'tailwindui.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    serverActions: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.IS_VERCEL_ENV === 'true',
  },
  typescript: {
    ignoreBuildErrors: process.env.IS_VERCEL_ENV === 'true',
  },
}

export default nextConfig
