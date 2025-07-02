/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  // Desactivar optimizaciones problemáticas en desarrollo
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig