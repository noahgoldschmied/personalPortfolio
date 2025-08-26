
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Noah Goldschmied</h1>
          <h2>Personal Portfolio</h2>
          <nav style={{ margin: '1.5rem 0' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
