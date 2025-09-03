import React, { useEffect } from 'react';
import { FaTrophy } from 'react-icons/fa';
import jccLogo from '../assets/work_logos/jcc.jfif';

const awards = [
  {
    title: 'RBC Amplify Technical Distinction Award',
    subtitle: '$20,000 top engineering prize',
    description: 'Awarded for technical excellence and innovation at RBC Amplify.',
    icon: <FaTrophy size={48} color="var(--accent, #ffb612)" title="Trophy icon" />,
    alt: 'Trophy icon',
    logo: null
  },
  {
    title: "Dean's Honour List",
    subtitle: 'All 4 years at McMaster University',
    description: 'Consistent academic achievement in Software Engineering & Management.',
    icon: <FaTrophy size={48} color="var(--accent, #ffb612)" title="Trophy icon" />,
    alt: 'Trophy icon',
    logo: null
  },
  {
    title: 'Provisional Patent: Blink',
    subtitle: 'Intelligent wire payment routing engine',
    description: 'Invented and filed a provisional patent for a payment routing engine.',
    icon: <FaTrophy size={48} color="var(--accent, #ffb612)" title="Trophy icon" />,
    alt: 'Trophy icon',
    logo: null
  },
  {
    title: 'JCC Volunteer of the Year',
    subtitle: '2021',
    description: 'Recognized for outstanding volunteer service and leadership at the JCC.',
    icon: null,
    alt: 'JCC logo',
    logo: jccLogo
  }
];

const Awards: React.FC = () => {
  useEffect(() => {
    document.title = 'Awards | Noah Goldschmied';
  }, []);
  return (
    <div className="container">
      <main style={{ marginBottom: '3em' }}>
        <h2>Awards & Achievements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {awards.map((award, idx) => {
            const isLast = idx === awards.length - 1;
            return (
              <div
                key={idx}
                className="exp-card"
                style={{ gap: '1.5rem', marginBottom: isLast ? '0.5em' : undefined }}
              >
                {award.logo ? (
                  <img
                    src={award.logo}
                    alt={award.alt}
                    style={{ width: '90px', height: '90px', objectFit: 'contain', borderRadius: '10px', background: '#f7f7f7', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
                  />
                ) : (
                  <div style={{ minWidth: 90, minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg, #f7f7f7)', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                    {award.icon}
                  </div>
                )}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <strong>{award.title}</strong>
                    <span style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.98rem' }}>{award.subtitle}</span>
                  </div>
                  <div className="exp-description-text" style={{ fontWeight: 500, margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>{award.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Awards;
