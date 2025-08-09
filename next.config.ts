import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '54321', // Asegúrate de especificar el puerto
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // <-- Nuevo host añadido
      },
    ],
  }
};

export default nextConfig;
