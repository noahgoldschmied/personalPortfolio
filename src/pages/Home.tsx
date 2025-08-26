import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/Noah/Noah Headshot.jpg';
import rbcLogo from '../assets/work_logos/RBC.png';
import heybrainLogo from '../assets/work_logos/heybrain.webp';
import jacorLogo from '../assets/work_logos/Jacor.jpg';
import biluimLogo from '../assets/work_logos/Biluim.webp';
import shalomLogo from '../assets/work_logos/campshalom.png';

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
    company: 'Royal Bank of Canada (RBC Amplify Program)',
    role: 'Developer',
    logo: rbcLogo,
    alt: 'RBC logo',
    description: `Architected and built a wire payment routing engine in Java/SpringBoot, integrating SWIFT and internal data to move money efficiently between banks. My customizable route selection algorithm will soon optimize 30,000+ payments/month for RBC’s High Value Payments Engine. I pitched the project to senior execs and 500+ attendees, and learned a ton about product management, communication, and teamwork.`,
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
    role: 'Software Developer Intern – User Interaction',
    logo: heybrainLogo,
    alt: 'HeyBrain AI logo',
    description: 'Software Developer Intern, focused on user interaction.',
    timeframe: 'Apr 2023 – Jun 2023',
    location: 'Remote'
  },
  {
    company: 'Camp Shalom',
    role: 'Camp Counsellor – Head of Sports',
    logo: shalomLogo,
    alt: 'Camp Shalom logo',
    description: 'Led sports and activities for campers, fostering teamwork and fun.',
    timeframe: 'Summers 2021–2024',
    location: 'Gravenhurst, ON'
  },
  {
    company: 'Camp Biluim',
    role: 'Camp Counsellor – Head of Sports',
    logo: biluimLogo,
    alt: 'Camp Biluim logo',
    description: 'Led sports and activities for campers, fostering teamwork and fun.',
    timeframe: 'Summers 2021–2024',
    location: 'Mont Tremblant, QC'
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

const Home: React.FC = () => (
  <main>
    <section style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <img src={headshot} alt="Noah Goldschmied headshot" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }} />
        <div>
          <h2>Hey, I'm Noah Goldschmied!</h2>
          <p style={{ margin: 0, fontWeight: 500, fontSize: '1.1rem' }}>
            Software Engineering & Management student at McMaster University.<br />
            Sports fan. Builder. Team player. Always learning.
          </p>
        </div>
      </div>
      <div style={{ flexBasis: '100%' }} />
      <p style={{ marginTop: '0.5rem' }}>
        Welcome to my digital home. I'm a software engineering student at McMaster University (Honours Bachelor of Engineering & Management, class of 2027), passionate about building things that make a difference—and having fun along the way. Whether it's leading a team, writing code, or hitting the field, I bring energy, curiosity, and a love for learning to everything I do.
      </p>
    </section>

    <section>
      <h3>Awards & Achievements</h3>
      <ul>
        <li>McMaster University, Software Engineering & Management (Dean’s Honour List, all 4 years)</li>
        <li>RBC Amplify Technical Distinction Award ($20,000 top engineering prize)</li>
        <li>Provisional Patent: Blink, an intelligent wire payment routing engine</li>
      </ul>
    </section>

    <section>
      <h3>Professional Experience</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experience.map((exp, idx) => (
          <Link
            key={idx}
            to={`/experience/${exp.company.replace(/\s+/g, '-').toLowerCase()}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="exp-card" style={{ cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section>
      <h3>Projects I’m Proud Of</h3>
      <ul>
        <li><strong>Sport Identification Neural Network:</strong> Built a neural net in Python (Keras, TensorFlow, Streamlit) to classify sports from images—trained on 13,000+ images, 80%+ accuracy.</li>
        <li><strong>Terrain Generation Simulator:</strong> Developed a 2D terrain generator in Java with a custom Polygon ADT, letting users control terrain, temperature, biome, and features.</li>
      </ul>
    </section>

    <section>
      <h3>Skills & Tools</h3>
      <ul>
        <li>Languages: Python, Java, SQL, Matlab, C, Go</li>
        <li>Technologies: SpringBoot, PostgreSQL, Pandas, NumPy, Docker, TensorFlow, Keras, OpenShift</li>
        <li>Tools: Git, Jira, DBeaver, VS Code, JetBrains IDEs, MS Office Suite</li>
      </ul>
    </section>

    <section>
      <h3>Beyond the Code</h3>
      <ul>
        <li>President, Alpha Epsilon Pi Chapter—led meetings, social events, and community outreach</li>
        <li>Intramural sports: Softball, Floor Hockey, Flag Football, Innertube Waterpolo</li>
        <li>Camp Counsellor & Head of Sports, Camp Shalom & Camp Biluim</li>
      </ul>
      <p>
        When I’m not coding, you’ll find me on the field, leading a team, or finding new ways to challenge myself. Go Steelers!
      </p>
    </section>
  </main>
);

export default Home;
