// Avoid build and lint error in Docker or Vercel deployment
const isProduction = process.env.NODE_ENV === 'production' || process.env.IS_VERCEL_ENV === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['@acme/helpers', '@acme/ui'],
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com', 'tailwindui.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  compiler: {
    removeConsole: isProduction,
  },
  eslint: {
    ignoreDuringBuilds: isProduction,
  },
  typescript: {
    ignoreBuildErrors: isProduction,
  },
}

export default nextConfig
