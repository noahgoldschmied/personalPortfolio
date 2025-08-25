import './App.css'


function App() {
  return (
    <div className="container">
      <header>
        <h1>Noah Goldschmied</h1>
        <h2>Personal Portfolio</h2>
      </header>
      <section>
        <h3>About Me</h3>
        <p>
          Hi! I'm Noah, a passionate developer excited to showcase my work and projects. This is my personal portfolio site built with React and TypeScript.
        </p>
      </section>
      <section>
        <h3>Projects</h3>
        <ul>
          <li>Project 1 (coming soon)</li>
          <li>Project 2 (coming soon)</li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <p>Email: <a href="mailto:noahgoldschmied@gmail.com">noah.goldschmied@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/noah-goldschmied/" target="_blank" rel="noopener noreferrer">linkedin.com/in/noah-goldschmied/</a></p>
        <p>GitHub: <a href="https://github.com/noahgoldschmied" target="_blank" rel="noopener noreferrer">github.com/noahgoldschmied</a></p>
      </section>
    </div>
  );
}

export default App
