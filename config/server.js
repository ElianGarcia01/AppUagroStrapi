module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://dgtidweb.uagro.mx'),
  proxy: true,
  app: {
    keys: ['4b3Gh7T9kLm1vN9z', 'D8rT5qP6vK2wX3rB'], // Claves únicas y seguras
  },
});
