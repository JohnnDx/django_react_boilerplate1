const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.googleusercontent.com", pathname: "**" },
      { protocol: "https", hostname: "google.com", pathname: "**" },
      { protocol: "https", hostname: "*.s3.amazonaws.com", pathname: "**" },
      { protocol: "http", hostname: "localhost", port: "8000", pathname: "**" },
      { protocol: "http", hostname: "127.0.0.1", port: "8000", pathname: "**" },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
