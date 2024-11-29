module.exports = {
  
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