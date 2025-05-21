// import { withPayload } from '@payloadcms/next/withPayload'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Your Next.js config here
// }

// export default withPayload(nextConfig, { devBundleServerPackages: false })
import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows ALL domains
      },
    ],
    // Optional: Disable Next.js Image Optimization if needed (if using external CDN)
    // unoptimized: true,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
