/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [], // Agrega dominios de imágenes si usas next/image
  },
}

module.exports = nextConfig