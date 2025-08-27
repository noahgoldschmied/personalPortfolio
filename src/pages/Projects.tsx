import React, { useEffect } from 'react';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Projects | Noah Goldschmied';
  }, []);
  return (
    <section>
      <h3>Projects</h3>
      <ul>
        <li>Project 1 (coming soon)</li>
        <li>Project 2 (coming soon)</li>
      </ul>
    </section>
  );
};

export default Projects;
