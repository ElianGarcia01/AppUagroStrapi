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
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    'strapi::cors', // Este es el middleware de CORS
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ],
}