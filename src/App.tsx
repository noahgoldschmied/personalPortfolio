
import React, { useState } from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Responsive nav state
  const [navOpen, setNavOpen] = useState(false);

  // Close nav on link click (mobile)
  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setNavOpen(false);
  };

  return (
    <>
      <header className="sticky-header">
        <h1 className="site-title">
          <a href="#home" style={{ color: 'inherit', textDecoration: 'none' }} onClick={e => { e.preventDefault(); handleNavClick('home'); }}>Noah Goldschmied</a>
        </h1>
        <div className={`header-content${navOpen ? ' nav-open' : ''}`} style={{ position: 'relative' }}>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setNavOpen(v => !v)}>
            {navOpen ? (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                <line x1="6" y1="6" x2="22" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="6" y1="22" x2="22" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                <line x1="5" y1="8" x2="23" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="5" y1="14" x2="23" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="5" y1="20" x2="23" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <nav>
            <a href="#home" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
            <a href="#skills" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a>
            <a href="#experience" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); handleNavClick('experience'); }}>Experience</a>
            <a href="#projects" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a>
            <a href="#about-me" onClick={e => { e.preventDefault(); handleNavClick('about-me'); }}>About Me</a>
          </nav>
        </div>
      </header>
      <div className="container">
        <Home />
      </div>
    </>
  );
}

export default App;
