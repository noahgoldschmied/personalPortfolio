import React, { useEffect } from 'react';

// Example project images (replace with your own as needed)
import project1Img from '../assets/work_logos/AEpi.png';
import project2Img from '../assets/work_logos/jcc.jfif';
import project3Img from '../assets/work_logos/RBC.png';

const projects = [
  {
    name: 'Sport Identification Neural Network',
    image: project1Img,
    alt: 'Sport ID NN',
    description: 'Built a neural net in Python (Keras, TensorFlow, Streamlit) to classify sports from images—trained on 13,000+ images, 80%+ accuracy.',
    video: null
  },
  {
    name: 'Terrain Generation Simulator',
    image: project2Img,
    alt: 'Terrain Generator',
    description: 'Developed a 2D terrain generator in Java with a custom Polygon ADT, letting users control terrain, temperature, biome, and features.',
    video: null
  },
  {
    name: 'Demo Project with Video',
    image: project3Img,
    alt: 'Demo Project',
    description: 'This project includes a video demo below.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4' // Example video URL
  }
];

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Projects | Noah Goldschmied';
  }, []);
  return (
    <div className="container" style={{ textAlign: 'left' }}>
      <main style={{ marginBottom: '3em', textAlign: 'left' }}>
  <h2 style={{ textAlign: 'left' }}>Projects</h2>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          {projects.map((proj, idx) => {
            const isLast = idx === projects.length - 1;
            return (
              <div
                key={idx}
                className="exp-card"
                style={{ cursor: 'default', transition: 'box-shadow 0.2s', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', marginBottom: isLast ? '1em' : undefined }}
              >
                <img
                  src={proj.image}
                  alt={proj.alt}
                  style={{ width: '90px', height: '90px', objectFit: 'contain', borderRadius: '10px', background: '#f7f7f7', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <strong>{proj.name}</strong>
                  </div>
                  <div className="exp-description-text" style={{ fontWeight: 500, margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>{proj.description}</div>
                  {proj.video && (
                    <div style={{ marginTop: '1em' }}>
                      <video controls style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.10)' }}>
                        <source src={proj.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Projects;
