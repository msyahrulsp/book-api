import * as hapi from '@hapi/hapi';
import routes from './routes';

const init: any = async () => {
  const server: hapi.Server = hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log('Server running on port 5000');
};

init();
