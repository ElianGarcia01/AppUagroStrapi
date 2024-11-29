module.exports = [
  // Middlewares por defecto
  {
    name: 'strapi::errors',
  },
  {
    name: 'strapi::security',
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://dgtidweb.uagro.mx', // Dominio principal
        'https://dgtidweb.uagro.mx/AppUagroNew', // Ruta exacta del frontend
        'http://dgtidweb.uagro.mx:1337', // Dominio del backend con puerto
      ],
    },
  },
  {
    name: 'strapi::poweredBy',
  },
  {
    name: 'strapi::logger',
  },
  {
    name: 'strapi::query',
  },
  {
    name: 'strapi::body',
  },
  {
    name: 'strapi::session',
  },
  {
    name: 'strapi::favicon',
  },
  {
    name: 'strapi::public',
  },
];
