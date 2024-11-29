module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'dB/96FWPBEd3ZadpLqS9p5nylP1saNcxYvzy0hgndNU='), // Reemplaza con tu secreto generado
      },
    },
  });
  