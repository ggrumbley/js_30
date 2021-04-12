const fastify = require('fastify')({
  logger: true,
});

// Declare an async route
// fastify.get('/', async (request, reply) => ({ hello: 'world' }));

fastify.register(require('./our-db-connector'));
fastify.register(require('./our-first-route'));

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
