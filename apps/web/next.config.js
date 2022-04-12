/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  images: {
    domains: ['doodleipsum.com', 'error404.fun', 'play.tailwindcss.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
});
