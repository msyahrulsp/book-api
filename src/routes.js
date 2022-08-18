const PostController = require('./controllers/PostController');
const {
  GetController,
  GetOneController,
} = require('./controllers/GetController');
const PutController = require('./controllers/PutController');
const DelController = require('./controllers/DelController');

const routes = [
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

module.exports = routes;
