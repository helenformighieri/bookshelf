function BookCard({ book, onAdd }) {
 return (
   <div className="flex items-center gap-4 my-2 p-2 border">
     <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
     <div>
       <h2 className="text-lg font-semibold">{book.volumeInfo.title}</h2>
       <p>{book.volumeInfo.authors?.join(', ')}</p>
       <button onClick={() => onAdd(book)} className="bg-green-500 text-white p-2 mt-2">
         Adicionar à Estante
       </button>
     </div>
   </div>
 );
}

export default BookCard;
