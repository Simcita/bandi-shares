/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack is the default bundler in Next.js 16 — no flag needed.
  // Cache Components (use cache directive) is stable in Next.js 16.
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
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

module.exports = nextConfig
