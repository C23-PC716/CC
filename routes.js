const { getDiseases, addDisease } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/api/diseases',
    handler: getDiseases,
  },
  {
    method: 'POST',
    path: '/api/add',
    handler: addDisease,
  },
];

module.exports = {
  name: 'routes',
  version: '1.0.0',
  register: async function (server, options) {
    server.route(routes);
  },
};
