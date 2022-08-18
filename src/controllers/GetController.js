const data = require('../data');

const GetController = (req, res) => {
  const { name, reading, finished } = req.query;
  const fBook = data.filter((book) => {
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
        books: fBook.map((book) => {
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

const GetOneController = (req, res) => {
  const { bookId } = req.params;
  const book = data.find((book) => book.id === bookId);

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

module.exports = { GetController, GetOneController };
