module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        'https://dgtidweb.uagro.mx', // Dominio principal
        'https://dgtidweb.uagro.mx/AppUagroNew', // Ruta exacta del frontend
        'http://dgtidweb.uagro.mx:1337', // Dominio del backend con puerto
      ],
    },
  },
  middleware: [
    {
      name: 'strapi::logger',
    },
    {
      name: 'strapi::errors',
    },
    {
      name: 'strapi::security',
    },
    {
      name: 'strapi::cors',
    },
    {
      name: 'strapi::poweredBy',
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
  ],
};
