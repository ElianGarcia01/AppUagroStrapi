module.exports = [
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://dgtidweb.uagro.mx', 'http://0.0.0.0:1337'],
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
