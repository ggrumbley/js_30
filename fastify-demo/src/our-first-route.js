const opts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        someKey: { type: 'string' },
        someOtherKey: { type: 'number' },
      },
    },
  },
};

const opts2 = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
};

module.exports = function (fastify, options) {
  const collection = fastify.mongo.db.collection('test_collection');

  fastify.get('/', opts2, async (request, reply) => {
    return { hello: 'world' };
  });

  fastify.post('/', opts, async (request, reply) => {
    return { hello: 'world' };
  });

  fastify.get('/animals', async (request, reply) => {
    const result = await collection.find().toArray();
    if (result.length === 0) {
      throw new Error('No documents found');
    }

    return result;
  });

  fastify.get('/animals/:animal', async (request, reply) => {
    const result = await collection.findOne({ animal: request.params.animal });
    if (result === null) {
      throw new Error('Invalid value');
    }

    return result;
  });
};
