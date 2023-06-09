const Hapi = require('hapi');
const routes = require('./routes');

const server = Hapi.server({
  port: 5000,
  host: 'localhost',
});

const init = async () => {
  await server.register(routes);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
