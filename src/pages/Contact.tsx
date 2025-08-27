import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Noah Goldschmied';
  }, []);
  return (
    <section>
      <h3>Contact</h3>
      <p>Email: <a href="mailto:noah@example.com">noah@example.com</a></p>
    </section>
  );
};

export default Contact;
