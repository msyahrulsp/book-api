import IRoutes from './interfaces/IRoutes';

import { PostController } from './controllers/PostController';

const routes: IRoutes[] = [
  {
    method: 'POST',
    path: '/books',
    handler: PostController,
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
