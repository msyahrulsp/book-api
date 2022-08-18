const data = require('../data');
var nanoid = require('nanoid');

const PostController = (req, res) => {
  const postData = req.payload;
  if (!postData.name) {
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
    const newBook = {
      id: nanoid(),
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
  } catch (err) {
    return res
      .response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
      })
      .code(500);
  }
};

module.exports = PostController;
