import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaRegFilePdf } from 'react-icons/fa';

const ContactInfo: React.FC = () => (
  <section style={{ marginBottom: 0 }}>
    <h3>
        Contact Me!
    </h3>
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2.5rem',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '0.6em', display: 'inline-flex', alignItems: 'center' }}>
          <MdEmail size={32} />
        </span>
        <a href="mailto:noahgoldschmied@gmail.com" target="_blank" rel="noopener noreferrer">noahgoldschmied@gmail.com</a>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '0.6em', display: 'inline-flex', alignItems: 'center' }}>
          <FaLinkedin size={32} color="#0077b5" />
        </span>
        <a href="https://www.linkedin.com/in/noah-goldschmied" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '0.6em', display: 'inline-flex', alignItems: 'center' }}>
          <FaGithub size={32} />
        </span>
        <a href="https://github.com/noahgoldschmied" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '0.6em', display: 'inline-flex', alignItems: 'center' }}>
          <FaRegFilePdf size={32} color="#d32f2f" />
        </span>
        <a href="/Noah%20Goldschmied%20Resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
      </li>
    </ul>
  </section>
);

export default ContactInfo;