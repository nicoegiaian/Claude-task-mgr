
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Configuración específica para Windows - case sensitivity fix
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      
      // Forzar case sensitivity en webpack
      config.resolve.plugins = config.resolve.plugins || []
      config.resolve.plugins.push(
        new (require('webpack/lib/CaseSensitivePathsPlugin'))()
      )
    }
    
    return config
  },
  
  // Configuraciones adicionales para estabilidad
  swcMinify: true,
  
  // Variables de entorno para desarrollo
  env: {
    FORCE_COLOR: '1'
  }
}

module.exports = nextConfig