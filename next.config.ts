import type { NextConfig } from 'next';
// Disable the dev-mode floating "N" indicator badge, which overlaps hero content
const nextConfig: NextConfig = { reactStrictMode: true, devIndicators: false };
export default nextConfig;
