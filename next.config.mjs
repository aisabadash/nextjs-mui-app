import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

export default nextConfig;
