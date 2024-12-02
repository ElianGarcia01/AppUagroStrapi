module.exports = [
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://dgtidweb.uagro.mx', 'http://127.0.0.1:1337'],
      headers: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  },

  // Otros middlewares
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
