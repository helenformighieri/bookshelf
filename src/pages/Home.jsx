// Home.jsx
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import api from '../api/booksApi';
import useBookStore from '../store/bookStore';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import ShelfButton from '../components/ShelfButton';

function Home() {
  const [results, setResults] = useState([]);
  const [notification, setNotification] = useState('');
  const addBook = useBookStore((state) => state.addBook);

  const searchBooks = async (query) => {
    const response = await api.get(`?q=${query}`);
    setResults(response.data.items || []);
  };

  const handleAddBook = (book) => {
    const newBook = {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      thumbnail: book.volumeInfo.imageLinks?.thumbnail,
    };

    const isDuplicate = useBookStore.getState().books.some(b => b.id === newBook.id);
    if (!isDuplicate) {
      addBook(newBook);
      setNotification('Livro adicionado à estante!');
    } else {
      setNotification('Este livro já está na estante.');
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="p-6 bg-pink-50 min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-5xl font-bold text-green-700 mb-6">Buscar Livros</h1>
      <SearchBar onSearch={searchBooks} />
      <ShelfButton />

      {notification && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-6 rounded shadow-md w-full max-w-md text-center">
          {notification}
        </div>
      )}

      <BookList books={results} onAdd={handleAddBook} />
    </div>
  );
}

export default Home;
