module.exports = [
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://dgtidweb.uagro.mx', // Dominio principal
        'https://dgtidweb.uagro.mx/AppUagroNew', // Ruta específica del frontend
        'http://dgtidweb.uagro.mx:8080', // Dominio del backend con puerto
      ],
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
