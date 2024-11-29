module.exports = [
  // Configuración del middleware de CORS
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://dgtidweb.uagro.mx', // Dominio principal
        'https://dgtidweb.uagro.mx/AppUagroNew', // Ruta específica del frontend
        'http://dgtidweb.uagro.mx:1337', // Dominio del backend con puerto
      ],
    },
  },

  // Otros middlewares por defecto de Strapi
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
