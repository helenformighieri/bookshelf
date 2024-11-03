import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';


function SearchBar({ onSearch }) {
 const [query, setQuery] = useState('');

 const handleSearch = () => {
   onSearch(query);
 };

 return (
   <div className="flex items-center gap-4 mt-4">
     <input
       type="text"
       value={query}
       onChange={(e) => setQuery(e.target.value)}
       placeholder="Digite o título do livro..."
       className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
     />
     <button
       onClick={handleSearch}
       className="bg-green-600 hover:bg-green-700 text-white p-2 rounded transition-all"
     >
       <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
     </button>
   </div>
 );
}

export default SearchBar;
