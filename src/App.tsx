
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
          <h1 className="site-title">Noah Goldschmied</h1>
          <div className="header-content">
            <nav>
              <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
              <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
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
