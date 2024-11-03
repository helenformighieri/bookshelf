import { Link } from 'react-router-dom';

function ShelfButton() {
  return (
    <Link to="/shelf">
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 mt-4 rounded transition-all shadow-md">
        Ir para Estante
      </button>
    </Link>
  );
}

export default ShelfButton;
