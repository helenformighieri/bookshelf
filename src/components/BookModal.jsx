// components/BookModal.jsx
import React from 'react';

function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="text-red-500 font-bold float-right"
        >
          X
        </button>
        <img
          src={book.thumbnail}
          alt={book.title}
          className="w-32 h-48 object-cover mx-auto my-4"
        />
        <h2 className="text-2xl font-semibold mb-2 text-center">{book.title}</h2>
        <p className="text-gray-700">{book.description || 'Descrição não disponível.'}</p>
      </div>
    </div>
  );
}

export default BookModal;
