const package = require('../package.json');
const { createProxyMiddleware } = require('http-proxy-middleware');

if (!package.proxy) {
  module.exports = function expressMiddleware(router) {};

  return;
}

const options = {
  target: package.proxy,
  changeOrigin: true,
  pathRewrite: {
    [`^/api`]: '',
  },
};

const proxy = createProxyMiddleware(options);

module.exports = function expressMiddleware(router) {
  router.use('/api', proxy);
};
