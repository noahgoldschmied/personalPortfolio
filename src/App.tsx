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

  return (
    <>
      <header>
        <h1 className="site-title">
          <a href="#home" style={{ color: 'inherit', textDecoration: 'none' }} onClick={e => { e.preventDefault(); scrollToSection('home'); }}>Noah Goldschmied</a>
        </h1>
        <div className="header-content">
          <nav>
            <a href="#home" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#skills" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
            <a href="#experience" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
            <a href="#projects" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#awards" style={{ marginRight: '1rem' }} onClick={e => { e.preventDefault(); scrollToSection('awards'); }}>Awards</a>
            <a href="#about-me" onClick={e => { e.preventDefault(); scrollToSection('about-me'); }}>About Me</a>
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
