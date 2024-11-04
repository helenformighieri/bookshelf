import PropTypes from 'prop-types';

function BookList({ books, onAdd }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {books.map((book) => (
        <div key={book.id} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-32 h-48 rounded" />
          <h3 className="text-lg font-semibold text-green-800 mt-2 text-center">{book.volumeInfo.title}</h3>
          <p className="text-sm text-gray-600">{book.volumeInfo.authors?.join(', ')}</p>
          <button
            onClick={() => onAdd(book)}
            className="bg-green-500 hover:bg-green-600 text-white p-2 mt-3 rounded shadow-md transition-all"
          >
            Adicionar à Estante
          </button>
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      volumeInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string),
        imageLinks: PropTypes.shape({
          thumbnail: PropTypes.string,
        }),
      }).isRequired,
    })
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default BookList;
