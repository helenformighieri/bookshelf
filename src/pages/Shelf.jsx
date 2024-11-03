// Shelf.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBookStore from '../store/bookStore';

function Shelf() {
  const [viewMode, setViewMode] = useState('list');
  const books = useBookStore((state) => state.books);
  const removeBook = useBookStore((state) => state.removeBook);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'list' ? 'grid' : 'list'));
  };

  return (
    <div className="p-6 bg-pink-50 min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-5xl pb-6 font-bold text-green-700">Minha Estante</h1>
      <div className="flex gap-4 mb-6">
        <Link
          to="/"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-all shadow-md"
        >
          Página Inicial
        </Link>
        <button
          onClick={toggleViewMode}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all shadow-md"
        >
          Visualizar em {viewMode === 'list' ? 'Grade' : 'Lista'}
        </button>
      </div>

      {books.length === 0 ? (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-md w-full max-w-md text-center">
          Nenhum livro adicionado.
        </div>
      ) : (
        <div
          className={`mt-4 ${
            viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'flex flex-col space-y-4'
          }`}
        >
          {books.map((book, index) => (
            <div
              key={`${book.id}-${index}`}
              className={`p-4 border bg-white rounded shadow-md transition-all transform hover:scale-105 ${
                viewMode === 'grid' ? 'flex flex-col items-center' : 'flex items-center gap-4'
              }`}
            >
              <img
                src={book.thumbnail}
                alt={book.title}
                className={viewMode === 'grid' ? 'w-24 h-32 object-cover mb-2' : 'w-16 h-24 object-cover'}
              />
              <div className={viewMode === 'grid' ? 'text-center' : ''}>
                <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
                <p className="text-gray-600">{book.authors?.join(', ')}</p>
                <button
                  onClick={() => removeBook(book.id)}
                  className="bg-red-500 text-white py-1 px-4 mt-3 rounded hover:bg-red-600 transition-all"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shelf;
