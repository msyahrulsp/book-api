import { Request, ResponseToolkit } from '@hapi/hapi';
import data from '../data';
import IBook from '../interfaces/IBook';

export const GetController: any = (req: Request, res: ResponseToolkit) => {
  const { name, reading, finished } = req.query;
  const fBook = data.filter((book: IBook) => {
    return (
      book.name
        .toLowerCase()
        .includes(name ? name.toLowerCase() : book.name.toLowerCase()) &&
      book.reading == (reading ?? book.reading) &&
      book.finished == (finished ?? book.finished)
    );
  });

  return res
    .response({
      status: 'success',
      data: {
        books: fBook.map((book: IBook) => {
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
