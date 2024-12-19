import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
