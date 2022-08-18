import { Request, ResponseToolkit } from '@hapi/hapi';
import data from '../data';
import IBook from '../interfaces/IBook';
import IPostBook from '../interfaces/IPostBook';
import { v4 as uuidv4 } from 'uuid';

export const PostController: any = (req: Request, res: ResponseToolkit) => {
  const postData = req.payload as IPostBook;
  if (postData.name === undefined) {
    return res
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400);
  }
  if (postData.readPage > postData.pageCount) {
    return res
      .response({
        status: 'fail',
        message:
          'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  }
  try {
    const newBook: IBook = {
      id: uuidv4(),
      name: postData.name,
      year: postData.year,
      author: postData.author,
      summary: postData.summary,
      publisher: postData.publisher,
      pageCount: postData.pageCount,
      readPage: postData.readPage,
      finished: postData.readPage === postData.pageCount,
      reading: postData.reading,
      insertedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    data.push(newBook);
    return res
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: newBook.id,
        },
      })
      .code(201);
  } catch {
    return res
      .response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
      })
      .code(500);
  }
};
