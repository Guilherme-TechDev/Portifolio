import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OdontoDetails from './pages/OdontoDetails';
import CarDetails from './pages/CarDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/odonto" element={<OdontoDetails />} />
        <Route path="/projeto/caros" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;