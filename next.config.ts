import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Turbopack is the default bundler in Next.js 16 — no flag needed.
  // Cache Components (use cache directive) is stable in Next.js 16.
  images: {
    formats: ['image/avif', 'image/webp'],
    // If you serve images from an external CDN, add domains here.
    // remotePatterns: [{ protocol: 'https', hostname: 'cdn.example.com' }],
  },
  // /apply → /verify is also handled at the network layer in proxy.ts.
  // The config-level redirect catches static pre-renders.
  async redirects() {
    return [
      {
        source: '/apply',
        destination: '/verify',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
