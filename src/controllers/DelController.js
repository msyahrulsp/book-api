const data = require('../data');

const DelController = (req, res) => {
  const { bookId } = req.params;
  const book = data.find((book) => book.id === bookId);
  if (book == null) {
    return res
      .response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      })
      .code(404);
  }
  try {
    data.splice(data.indexOf(book), 1);
    return res.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
  } catch {
    // Tidak dispesifikasikan
  }
};

module.exports = DelController;
