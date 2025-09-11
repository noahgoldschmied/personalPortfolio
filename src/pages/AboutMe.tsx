import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" style={{ padding: '3rem 0', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.2rem' }}>About Me</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '700px' }}>
        Hi! I'm Noah Goldschmied. When I'm not coding, you'll find me on the field, leading a team, or finding new ways to challenge myself. I love sports, music, and building cool things. This section is all about the fun stuff—hobbies, interests, and what makes me tick outside of work and school.
      </p>
      {/* Add more fun facts, images, or interactive elements here! */}
    </section>
  );
};

export default AboutMe;
