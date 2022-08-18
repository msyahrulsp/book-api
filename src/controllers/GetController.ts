import { Request, ResponseToolkit } from '@hapi/hapi';
import data from '../data';
import IBook from '../interfaces/IBook';

export const GetController: any = (req: Request, res: ResponseToolkit) => {
  return res
    .response({
      status: 'success',
      data: {
        books: data.map((book: IBook) => {
          return {
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          };
        }),
      },
    })
    .code(200);
};

export const GetOneController: any = (req: Request, res: ResponseToolkit) => {
  const { bookId } = req.params;
  const book = data.find((book: IBook) => book.id === bookId);

  if (book != null) {
    return res
      .response({
        status: 'success',
        data: {
          book,
        },
      })
      .code(200);
  } else {
    return res
      .response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      })
      .code(404);
  }
};
