// Strapi example configuration file
// Rename to config/admin.js, config/api.js, etc. depending on your needs

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'your-secret-key'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'your-salt-key'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'your-salt-key'),
    },
  },
  // CORS settings for production
  security: {
    cors: {
      enabled: true,
      origin: env.array('CORS_ORIGIN', ['https://your-portfolio-domain.com']),
      methods: ['GET', 'OPTIONS', 'HEAD'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  // Rate limiting to protect API
  middleware: {
    settings: {
      rateLimit: {
        enabled: true,
        interval: 1 * 60 * 1000, // 1 minute
        max: 100, // max 100 requests per minute
      },
      poweredBy: {
        enabled: false, // Remove X-Powered-By header
      },
    },
  },
});