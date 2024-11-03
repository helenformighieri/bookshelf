import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shelf from './pages/Shelf';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shelf" element={<Shelf />} />
      </Routes>
    </Router>
  );
}

export default App;
