const i18 = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "mn",
    locales: ["mn", "en"]
  },
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    domains: [process.env.STRAPI_API],
    loader: 'default',
  }
}