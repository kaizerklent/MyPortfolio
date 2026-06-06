/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow these dev origins to access Next.js dev resources (HMR, etc.)
  // Add any IPs/hosts you open the site from during development.
  // Example: 'http://192.168.56.1:3001'
  allowedDevOrigins: [
    'http://192.168.56.1:3001',
    'http://localhost:3001',
    'http://localhost:3002',
  ],

  // Ensure Turbopack uses this folder as the workspace root so Next picks up
  // the correct `next.config.ts` and workspace files.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;