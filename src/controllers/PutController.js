const data = require('../data');

const PutController = (req, res) => {
  const putData = req.payload;
  if (!putData.name) {
    return res
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      })
      .code(400);
  }
  if (putData.readPage > putData.pageCount) {
    return res
      .response({
        status: 'fail',
        message:
          'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  }
  const book = data.find((book) => book.id === req.params.bookId);
  if (book == null) {
    return res
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
      })
      .code(404);
  }
  try {
    book.name = putData.name;
    book.year = putData.year;
    book.author = putData.author;
    book.summary = putData.summary;
    book.publisher = putData.publisher;
    book.pageCount = putData.pageCount;
    book.readPage = putData.readPage;
    book.finished = putData.readPage === putData.pageCount;
    book.reading = putData.reading;
    book.updatedAt = new Date().toISOString();
    return res
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  } catch {
    // Tidak dispesifikasikan
  }
};

module.exports = PutController;
