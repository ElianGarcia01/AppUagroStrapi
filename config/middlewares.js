module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        'https://dgtidweb.uagro.mx', // Permitir solicitudes desde el dominio de tu frontend
      ],  // Cambia esto al dominio de tu frontend
    },
  },
  // Configuración de middlewares
  middleware: [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    'strapi::cors',  // Este es el middleware de CORS
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ],
};
