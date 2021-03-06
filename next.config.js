const withPWA = require("next-pwa");

// next.config.js
module.exports = withPWA({
  images: {
    domains: ['res.cloudinary.com', 'media.graphassets.com'],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
})
