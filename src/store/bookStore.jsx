import { create } from 'zustand';

const useBookStore = create((set) => ({
  books: [],
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  removeBook: (id) => set((state) => ({ books: state.books.filter((book) => book.id !== id) })),
}));

export default useBookStore;
