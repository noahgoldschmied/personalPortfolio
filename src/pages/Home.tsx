import React, { useEffect } from 'react';
import ContactInfo from '../components/ContactInfo';
import LastFmTopArtists from './LastFmTopArtists';
import AboutMe from './AboutMe';
import headshot from '../assets/Noah/Noah Headshot.jpg';
import rbcLogo from '../assets/work_logos/RBC.png';
import heybrainLogo from '../assets/work_logos/heybrain.webp';
import jacorLogo from '../assets/work_logos/Jacor.jpg';
import biluimLogo from '../assets/work_logos/Biluim.webp';
import shalomLogo from '../assets/work_logos/campshalom.png';
import amplifyImg from '../assets/Noah/onstageZoom.jpg';
import aepiLogo from '../assets/work_logos/AEpi.png';
import hjfLogo from '../assets/work_logos/hjf.jpg';
import jccLogo from '../assets/work_logos/jcc.jfif';
import project1Img from '../assets/work_logos/AEpi.png';
import project2Img from '../assets/work_logos/jcc.jfif';
import project3Img from '../assets/work_logos/RBC.png';
import { FaTrophy } from 'react-icons/fa';

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

const extracurriculars = [
  {
    org: 'Alpha Epsilon Pi - Hamilton Chapter',
    role: 'President',
    logo: aepiLogo,
    alt: 'Alpha Epsilon Pi logo',
    timeframe: '2024 – 2025',
    description: ''
  },
  {
    org: 'Hamilton Jewish Foundation',
    role: 'Volunteer',
    logo: hjfLogo,
    alt: 'Hamilton Jewish Foundation logo',
    timeframe: '2023 – 2025',
    description: ''
  },
  {
    org: 'JCC Inclusion Services',
    role: 'Volunteer/Coach',
    logo: jccLogo,
    alt: 'JCC Inclusion Services logo',
    timeframe: '2017-2021',
    description: ''
  }
];

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
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
];

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

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Home | Noah Goldschmied';
  }, []);
  return (
    <main>
      <section id="home" style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', padding: '3rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <img src={headshot} alt="Noah Goldschmied headshot" style={{ width: '320px', height: '320px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }} />
          <div>
            <h1>Hey, I'm Noah Goldschmied!</h1>
            <p style={{ margin: 0, fontWeight: 500, fontSize: '1.1rem' }}>
              Software Engineering & Management student at McMaster University<br />
              Currently at RBC, pushing features to our AI-powered tech support bot<br />
              Sports fan. Builder. Team player. Always learning.
            </p>
          </div>
        </div>
        <div style={{ flexBasis: '100%' }} />
        <div style={{ flexBasis: '100%' }}>
          <p style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            Welcome to my portfolio! Feel free to check out my experiences and projects on the links above. You can also find a little bit more about what I've achieved there. On this page, you'll find more about me, the person behind the code.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {/* Contact Info just below bio, no extra section wrapper */}
            <ContactInfo />
          </div>
        </div>
      </section>

      <section id="skills" style={{ padding: '3rem 0' }}>
        <h2 style={{ textAlign: 'left' }}>Skills & Tools</h2>
        <ul>
          <li>Languages: Python, Java, SQL, Matlab, C, Go</li>
          <li>Technologies: SpringBoot, PostgreSQL, Pandas, NumPy, Docker, TensorFlow, Keras, OpenShift</li>
          <li>Tools: Git, Jira, DBeaver, VS Code, JetBrains IDEs, MS Office Suite</li>
        </ul>
      </section>

      <section id="experience" style={{ padding: '3rem 0' }}>
        <h2 style={{ textAlign: 'left' }}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'left' }}>
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
        <h2 style={{ marginTop: '2.5em', textAlign: 'left' }}>Extracurricular & Volunteer Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'left' }}>
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
      </section>

      <section id="projects" style={{ padding: '3rem 0' }}>
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
      </section>

      <section id="awards" style={{ padding: '3rem 0' }}>
        <h2 style={{ textAlign: 'left' }}>Awards & Achievements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <strong>{award.title}</strong>
                    <span style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.98rem' }}>{award.subtitle}</span>
                  </div>
                  <div className="exp-description-text" style={{ fontWeight: 500, margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>{award.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AboutMe />
      <section id="top-artists" style={{ padding: '3rem 0' }}>
        <LastFmTopArtists />
      </section>
    </main>
  );
};

export default Home;
