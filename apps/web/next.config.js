/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible');

module.exports = withPlausibleProxy({ customDomain: 'https://stats.web.id' })({
  images: { domains: ['doodleipsum.com', 'error404.fun', 'play.tailwindcss.com'] },
  reactStrictMode: true,
  poweredByHeader: false,
});
