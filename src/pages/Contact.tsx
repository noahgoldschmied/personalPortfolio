import React, { useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaRegFilePdf } from 'react-icons/fa';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Noah Goldschmied';
  }, []);
  return (
    <div className="container">
      <main style={{ marginBottom: '3em' }}>
        <h2 style={{ textAlign: 'left' }}>Contact Me!</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div className="exp-card contact-card-bg">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7em' }}>
                <span style={{ marginRight: '0.6em', display: 'inline-flex', alignItems: 'center' }}>
                  <MdEmail size={32} />
                </span>
                <a href="mailto:noahgoldschmied@gmail.com" target="_blank" rel="noopener noreferrer">noahgoldschmied@gmail.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7em' }}>
                <span style={{ marginRight: '0.6em', display: 'inline-flex', alignItems: 'center' }}>
                  <FaLinkedin size={32} color="#0077b5" />
                </span>
                <a href="https://www.linkedin.com/in/noah-goldschmied" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7em' }}>
                <span style={{ marginRight: '0.6em', display: 'inline-flex', alignItems: 'center' }}>
                  <FaGithub size={32} />
                </span>
                <a href="https://github.com/noahgoldschmied" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7em' }}>
                <span style={{ marginRight: '0.6em', display: 'inline-flex', alignItems: 'center' }}>
                  <FaRegFilePdf size={32} color="#d32f2f" />
                </span>
                <a href="/Noah%20Goldschmied%20Resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
