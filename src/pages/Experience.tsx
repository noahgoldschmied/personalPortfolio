const extracurriculars = [
  {
    org: 'Alpha Epsilon Pi - Hamilton Chapter',
    role: 'President',
    logo: null, // TODO: Add image
    alt: 'Alpha Epsilon Pi logo',
    timeframe: '2024 – 2025',
    description: ''
  },
  {
    org: 'Hamilton Jewish Foundation',
    role: 'Volunteer',
    logo: null, // TODO: Add image
    alt: 'Hamilton Jewish Foundation logo',
    timeframe: '2023 – 2025',
    description: ''
  },
  {
    org: 'JCC Inclusion Services',
    role: 'Volunteer/Coach',
    logo: null, // TODO: Add image
    alt: 'JCC Inclusion Services logo',
    timeframe: '2017-2021',
    description: ''
  }
];

import React, { useEffect } from 'react';
import rbcLogo from '../assets/work_logos/RBC.png';
import heybrainLogo from '../assets/work_logos/heybrain.webp';
import jacorLogo from '../assets/work_logos/Jacor.jpg';
import biluimLogo from '../assets/work_logos/Biluim.webp';
import shalomLogo from '../assets/work_logos/campshalom.png';
import amplifyImg from '../assets/Noah/onstageZoom.jpg';

const experience = [
  {
    company: 'Royal Bank of Canada',
    role: 'Software Developer Intern – Tia Tech Support Bot',
    logo: rbcLogo,
    alt: 'RBC logo',
    timeframe: 'Sep 2025 – Dec 2025',
    location: 'Toronto, ON'
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Developer, RBC Amplify',
    logo: rbcLogo,
    alt: 'RBC logo',
    description: (
      <>
        Architected and built a wire payment routing engine in Java/SpringBoot, integrating SWIFT and internal data to move money efficiently between banks. My customizable route selection algorithm will soon optimize 30,000+ payments/month for RBC’s High Value Payments Engine. I pitched the project to senior execs and 500+ attendees, and learned a ton about product management, communication, and teamwork.
        <div style={{ marginTop: '0.7em' }}>
          <img
            src={amplifyImg}
            alt="RBC Amplify Team"
            style={{
              maxWidth: '700px',
              width: '100%',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
              float: 'left',
              marginRight: '1.5em',
              marginBottom: '1em'
            }}
          />
        </div>
      </>
    ),
    timeframe: 'May 2025 – Aug 2025',
    location: 'Toronto, ON'
  },
  {
    company: 'Jacor Marketing',
    role: 'Warehouse Clerk & Inventory Manager',
    logo: jacorLogo,
    alt: 'Jacor Marketing logo',
    description: 'Warehouse Clerk & Inventory Manager.',
    timeframe: 'Apr 2024 – Jun 2024',
    location: 'Vaughan, ON'
  },
  {
    company: 'HeyBrain AI',
    role: 'Software Developer Intern',
    logo: heybrainLogo,
    alt: 'HeyBrain AI logo',
    description: 'Software Developer Intern, focused on user interaction.',
    timeframe: 'Apr 2023 – Jun 2023',
    location: 'Remote'
  },
  {
    company: 'Camp Biluim',
    role: 'Camp Counsellor – Head of Sports',
    logo: biluimLogo,
    alt: 'Camp Biluim logo',
    description: 'Led sports and activities for campers, fostering teamwork and fun.',
    timeframe: 'Summers 2022–2024',
    location: 'Mont Tremblant, QC'
  },
  {
    company: 'Camp Shalom',
    role: 'Camp Counsellor – Head of Hockey',
    logo: shalomLogo,
    alt: 'Camp Shalom logo',
    description: 'Led hockey and activities for campers, fostering teamwork and fun.',
    timeframe: 'Summer 2021',
    location: 'Gravenhurst, ON'
  }
];

const LocationPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    style={{ marginRight: '0.25em', verticalAlign: 'middle' }}
  >
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg>
);

const Experience: React.FC = () => {
  useEffect(() => {
    document.title = 'Experience | Noah Goldschmied';
  }, []);
  return (
    <main style={{ marginBottom: '3em' }}>
      <h2>Work Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experience.map((exp, idx) => {
          const anchorId = exp.company.replace(/\s+/g, '-').toLowerCase() + '-' + (exp.role ? exp.role.replace(/\s+/g, '-').toLowerCase() : idx);
          return (
            <div
              key={idx}
              id={anchorId}
              className="exp-card"
              style={{ cursor: 'default', transition: 'box-shadow 0.2s', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
            >
              <img src={exp.logo} alt={exp.alt} style={{ width: '90px', height: '90px', objectFit: 'contain', borderRadius: '10px', background: '#f7f7f7', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <strong>{exp.company}</strong>
                  <span style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.98rem' }}>{exp.timeframe}</span>
                  {exp.location && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--accent2)', fontSize: '0.97rem', marginLeft: '0.3rem', opacity: 0.85 }}>
                      <LocationPin />{exp.location}
                    </span>
                  )}
                </div>
                <div style={{ fontWeight: 500, margin: '0.2rem 0 0.4rem 0' }}>{exp.role}</div>
                {exp.description && (
                  <div className="exp-description-text" style={{ margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>
                    {typeof exp.description === 'string' ? exp.description : exp.description}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <h2 style={{ marginTop: '2.5em' }}>Extracurricular & Volunteer Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {extracurriculars.map((item, idx) => {
          const anchorId = item.org.replace(/\s+/g, '-').toLowerCase() + '-' + (item.role ? item.role.replace(/\s+/g, '-').toLowerCase() : idx);
          return (
            <div
              key={idx}
              id={anchorId}
              className="exp-card"
              style={{ cursor: 'default', transition: 'box-shadow 0.2s', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
            >
              <img
                src={item.logo || 'https://via.placeholder.com/90x90?text=Logo'}
                alt={item.alt}
                style={{ width: '90px', height: '90px', objectFit: 'contain', borderRadius: '10px', background: '#f7f7f7', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <strong>{item.org}</strong>
                  <span style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.98rem' }}>{item.timeframe}</span>
                </div>
                <div style={{ fontWeight: 500, margin: '0.2rem 0 0.4rem 0' }}>{item.role}</div>
                {item.description && (
                  <div className="exp-description-text" style={{ margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Experience;
