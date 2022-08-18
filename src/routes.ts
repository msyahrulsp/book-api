import IRoutes from './interfaces/IRoutes';

import { PostController } from './controllers/PostController';
import { GetController, GetOneController } from './controllers/GetController';
import { PutController } from './controllers/PutController';
import { DelController } from './controllers/DelController';

const routes: IRoutes[] = [
  {
    method: 'POST',
    path: '/books',
    handler: PostController,
  },
  {
    method: 'GET',
    path: '/books',
    handler: GetController,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: GetOneController,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: PutController,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: DelController,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (req, res) => {
      return res
        .response({
          status: 'fail',
          message: 'Path tidak ditemukan',
        })
        .code(404);
    },
  },
];

export default routes;
