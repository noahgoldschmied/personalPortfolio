import React from 'react';

const NotFound: React.FC = () => (
  <main>
    <section style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--accent2)' }}>404</h1>
      <h2 style={{ color: 'var(--accent)' }}>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </section>
  </main>
);

export default NotFound;
