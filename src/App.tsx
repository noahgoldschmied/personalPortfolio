
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Awards from './pages/Awards';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1 className="site-title">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Noah Goldschmied</Link>
        </h1>
        <div className="header-content">
          <nav>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/experience" style={{ marginRight: '1rem' }}>Experience</Link>
            <Link to="/awards" style={{ marginRight: '1rem' }}>Awards</Link>
            <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
