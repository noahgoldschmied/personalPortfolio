import React, { useEffect, useState } from 'react';
import ContactInfo from '../components/ContactInfo';
import LastFmTopArtists from '../components/LastFmTopArtists';
import headshot from '../assets/Noah/Noah Headshot.jpg';
import rbcLogo from '../assets/work_logos/RBC.png';
import heybrainLogo from '../assets/work_logos/heybrain.webp';
import jacorLogo from '../assets/work_logos/Jacor.jpg';
import biluimLogo from '../assets/work_logos/Biluim.webp';
import shalomLogo from '../assets/work_logos/campshalom.png';
import ntsVid from '../assets/demo_videos/NameThatSport.mp4';
import vankl from '../assets/demo_videos/VANKL_communications.mp4';
import fanbot from '../assets/demo_videos/Fanbot_Demo.mp4';
import aepiLogo from '../assets/work_logos/AEpi.png';
import hjfLogo from '../assets/work_logos/hjf.jpg';
import jccLogo from '../assets/work_logos/jcc.jfif';
import wealthsimpleLogo from '../assets/work_logos/Wealthsimple.png';
import terrainImg1 from '../assets/demo_pics/Screenshot 2023-05-23 122414.png';
import terrainImg2 from '../assets/demo_pics/Screenshot 2023-05-23 122710.png';
import terrainImg3 from '../assets/demo_pics/Screenshot 2023-05-23 123130.png';
import terrainImg4 from '../assets/demo_pics/Screenshot 2023-05-23 123642.png';
import { FaTrophy } from 'react-icons/fa';

// Simple image carousel for project images
function ProjectImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="project-carousel" style={{ marginTop: '1em', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={images[current]}
        alt={alt + ' demo'}
        style={{ maxWidth: '300px', maxHeight: '300px', width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.10)', marginBottom: '1em' }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2em', marginTop: '0.7em', justifyContent: 'center', width: '100%' }}>
        <button
          onClick={() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))}
          disabled={images.length <= 1}
          style={{
            padding: '0.3em 0.7em',
            borderRadius: 8,
            border: 'none',
            background: 'var(--accent)',
            color: 'var(--accent2)',
            fontWeight: 600,
            cursor: 'pointer',
            opacity: images.length <= 1 ? 0.5 : 1,
            fontSize: '1.6em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Previous image"
        >
          {'‹'}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4em' }}>
          {images.map((_, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: idx === current ? 'var(--accent2)' : '#ccc',
                opacity: idx === current ? 1 : 0.5,
                transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))}
          disabled={images.length <= 1}
          style={{
            padding: '0.3em 0.7em',
            borderRadius: 8,
            border: 'none',
            background: 'var(--accent)',
            color: 'var(--accent2)',
            fontWeight: 600,
            cursor: 'pointer',
            opacity: images.length <= 1 ? 0.5 : 1,
            fontSize: '1.6em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Next image"
        >
          {'›'}
        </button>
      </div>
    </div>
  );
}


interface Experience {
  company: string;
  role: string;
  logo: string;
  alt: string;
  timeframe: string;
  location: string;
  description: string;
  skills: string[];
  images?: string[];
}

interface Project {
  name: string;
  alt: string;
  description: string;
  skills?: string[];
  images?: string[];
  video?: string | null;
  github?: string | null;
  website?: string | null;
}

const experience: Experience[] = [
  {
    company: 'Wealthsimple',
    role: 'Software Engineering Intern',
    logo: wealthsimpleLogo,
    alt: 'Wealthsimple logo',
    timeframe: 'Jan 2026 – Aug 2026',
    location: 'Toronto, ON',
    description: 'Working on the Order Execution Team within Wealthsimple’s Trading Platform, building and maintaining features that serve millions of users using Java and Spring Boot',
    skills: ['Java', 'Spring Boot', 'Agile Methodology', 'Team Collaboration']
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Software Developer Intern – End User Services',
    logo: rbcLogo,
    alt: 'RBC logo',
    timeframe: 'Sep 2025 – Dec 2025',
    location: 'Toronto, ON',
    description: 'Built features serving 85,000+ users on Tia, RBC\'s internal AI-powered tech support bot, using TypeScript and React. Created an automated ticket escalation feature that reduced manual work by the Service Now team by 30% and improved response times for critical issues. Utilized Google Dialogflow to enhance Tia\'s natural language understanding capabilities and bilingual support (English and French), providing over 15,000 more employees access to tech support.',
    skills: ['TypeScript', 'React', 'Google Dialogflow', 'Figma', 'Agile Methodology', 'AI', 'NLP', 'Full Stack Development'],
    images: []
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Developer, RBC Amplify',
    logo: rbcLogo,
    alt: 'RBC logo',
    description: 'RBC Amplify is an innovation program where students are placed on teams of 4, and are given real business problems to solve. My team had to solve the problem of optimizing wire payments, and we created Blink, an intelligent wire payment routing engine. With Blink, RBC will be able to move an additional 30,000 transactions a month without human intervention, placing the bank among global leaders in automation rate. Blink was built using a Java & Spring Boot backend, PostgreSQL databases, TypeScript & Next.js frontend, and deployed with Docker & Kubernetes. We pitched our solution to senior RBC executives on the final week of the program, and won the Technical Distinction Award for best technical solution.',
    timeframe: 'May 2025 – Aug 2025',
    location: 'Toronto, ON',
    skills: ['Java', 'SpringBoot', 'PostgreSQL', 'Product Management', 'Communication', 'Teamwork', 'Pitching', 'DBeaver'],
    images: []
  },
  {
    company: 'Jacor Marketing',
    role: 'Warehouse Clerk & Inventory Manager',
    logo: jacorLogo,
    alt: 'Jacor Marketing logo',
    description: 'At Jacor, I was in charge of managing inventory and fulfilling orders of graduation items (gowns, caps, tassels, etc.) for schools across Canada. This role required strong organizational skills, attention to detail, and the ability to work efficiently in a fast-paced environment. I collaborated with team members to ensure timely order processing and maintained accurate inventory records.',
    timeframe: 'Apr 2024 – Jun 2024',
    location: 'Vaughan, ON',
    skills: ['Inventory Management', 'Team Collaboration', 'Attention to Detail', 'Organization', 'Warehouse Operations'],
    images: []
  },
  {
    company: 'HeyBrain AI',
    role: 'Software Developer Intern',
    logo: heybrainLogo,
    alt: 'HeyBrain AI logo',
    description: 'At HeyBrain, I worked on developing a telegram bot. The bot was designed to be used as the main interaction point for Brain, HeyBrain\'s AI tool. Brain monitors your google searches so you can ask it questions about your results without having to search things again. I built out the auth, user management, and search query handling features, as well as text to speech features for the bot.',
    timeframe: 'Apr 2023 – Jun 2023',
    location: 'Remote',
    skills: ['Python', 'Bot Development', 'AI Integration', 'Text-to-speech Integration'],
    images: []
  },
  {
    company: 'Camp Biluim',
    role: 'Camp Counsellor – Head of Sports',
    logo: biluimLogo,
    alt: 'Camp Biluim logo',
    description: 'I spent 3 summers as a camp counsellor at Camp Biluim, a Jewish summer camp in Mont Tremblant. As Head of Sports, I was responsible for organizing and leading various sports activities for 120 16 year old campers. This role helped me develop strong leadership and teamwork skills, as well as the ability to adapt and think on my feet in a dynamic environment. My main responsibilities were being the commisioner of our football league, which included scheduling games, coordinating referee crews and ensuring safety of all campers.',
    timeframe: 'Summers 2022–2024',
    location: 'Mont Tremblant, QC',
    skills: ['Leadership', 'Teamwork', 'Sports Program Organization', 'Event Scheduling & Coordination', 'Mentorship'],
    images: []
  },
  {
    company: 'Camp Shalom',
    role: 'Camp Counsellor – Head of Hockey',
    logo: shalomLogo,
    alt: 'Camp Shalom logo',
    description: 'I spent 1 summer at Camp Shalom as the Head of Hockey. In this role, I was responsible for organizing and leading hockey activities for campers, fostering teamwork and sportsmanship. This experience helped me develop leadership skills and the ability to work effectively with a team in a dynamic environment.',
    timeframe: 'Summer 2021',
    location: 'Gravenhurst, ON',
    skills: ['Leadership', 'Teamwork', 'Hockey Coaching', 'Sportsmanship'],
    images: []
  }
];

const extracurriculars = [
  {
    org: 'Alpha Epsilon Pi - Hamilton Chapter',
    role: 'President, Vice President',
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

const projects: Project[] = [
  {
    name: 'Whatsapp Fantasy Manager',
    alt: 'Whatsapp Fantasy Manager',
    description: 'A TypeScript project that allows users to chat with and manage their fantasy sports teams on Whatsapp. Deployed on DigitalOcean, connected to whatsapp via the Twilio sandbox.',
    skills: ['TypeScript', 'Twilio API', 'DigitalOcean', 'Fantasy Sports'],
    video: fanbot,
    github: 'https://github.com/noahgoldschmied/WhatsappFantasyManager',
    website: null
  },
  {
    name: 'Name That Sport - Neural Network',
    alt: 'Sport ID NN',
    description: 'Outside of school, I built a neural net in Python (Keras, TensorFlow, Streamlit) to classify sports from images. It was trained on 13,000 images of 100 different sports, and achieves over 80% accuracy. Check out the video demo below!',
    skills: ['Python', 'Keras', 'TensorFlow', 'Streamlit', 'Image Classification', 'Neural Networks'],
    video: ntsVid,
    github: 'https://github.com/noahgoldschmied/Name-That-Sport',
    website: 'https://namethatsport.streamlit.app/'
  },
  {
    name: 'VANKLcomm - Secure Android Chat App',
    alt: 'VANKLcomm',
    description: 'VANKLComm is a messaging app to be used on Android platforms. It provides encrypted messaging between two users through authentication through a KDC. The Android app itself was programmed using Java through Android Studio. For the back-end we used Firebase for our data storage and created our web server in python.',
    skills: [
      'Java',
      'Android Studio',
      'Firebase',
      'Python',
      'Web Server',
      'End-to-End Encryption',
      'KDC Authentication'
    ],
    video: vankl,
    github: 'https://github.com/VirochaanRG/VanklCommApp',
    website: null
  },
  {
    name: 'Terrain Generation Simulator',
    alt: 'Terrain Generator',
    description: 'For my software design class, myself and two other students developed a 2D terrain generator. The program allows users to generate and customize terrains by adjusting parameters such as terrain type, temperature, biome, and features. The project involved designing a custom Polygon ADT to represent and manipulate the terrain shapes, implementing procedural generation algorithms, and creating a user-friendly interface for interaction. It was built in Java using OOP principles and design patterns.',
    skills: [
      'Java',
      'Polygon ADT',
      'Simulation',
      'OOP',
      'Procedural Generation',
      'Design Patterns',
      'Algorithm Design',
      'Customization',
      'Teamwork'
    ],
    images: [terrainImg1, terrainImg2, terrainImg3, terrainImg4],
    video: null,
    github: 'https://github.com/2AA4-W23/a2---mesh-generator-noah-peter-noel',
    website: null
  },
  {
    name: 'Financial Modelling',
    alt: 'Financial Modelling',
    description: 'For my financial modelling course, I completed various projects involving the creation and analysis of financial models using Excel and Python. These projects included building discounted cash flow (DCF) models, sensitivity analyses, and portfolio optimization. The goal was to develop a deep understanding of financial principles and improve my ability to make data-driven decisions based on quantitative analysis.',
    skills: ['Excel', 'Python', 'Numpy', 'Pandas', 'Financial Analysis', 'Data Visualization'],
    images: [],
    video: null,
    github: null,
    website: null
  },
  {
    name: 'Software Experiments and Lab Studies',
    alt: 'Software Experiments and Lab Studies',
    description: 'In my software experiments and lab studies course, I conducted several experiments to evaluate the performance of different algorithms. These algorithms included sorting algorithms (e.g., quicksort, mergesort), search algorithms (e.g., binary search, linear search), graph algorithms (e.g., Dijkstra\'s algorithm, A* search) and some dynamic programming algorithms (e.g., knapsack problem, longest common subsequence). I implemented these algorithms in Python and measured their execution time and memory usage under various conditions. The experiments helped me understand the trade-offs between different algorithms and the importance of choosing the right algorithm for a given problem.',
    skills: [
      'Python',
      'Sorting Algorithms',
      'Search Algorithms',
      'Graph Algorithms',
      'Dynamic Programming',
      'Algorithm Analysis',
      'Performance Evaluation',
      'Memory Usage',
      'Experiment Design',
      'Problem Solving'
    ],
    images: [],
    video: null,
    github: null,
    website: null
  }
  
];

const awards = [
  {
    title: 'Featured in McMaster Engineering Article',
    subtitle: 'University publication spotlight',
    description: 'Highlighted in university publication for outstanding performance during RBC Amplify internship.',
    icon: <FaTrophy size={48} color="var(--accent, #ffb612)" title="Trophy icon" />,
    alt: 'Trophy icon',
    logo: null,
    link: 'https://www.eng.mcmaster.ca/news/how-two-mcmaster-engineering-students-took-on-rbcs-amplify-program-and-won-big/'
  },
  {
    title: 'RBC Amplify Technical Distinction Award',
    subtitle: '$20,000 top engineering prize',
    description: 'Awarded for technical excellence and innovation at RBC Amplify.',
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
    title: "Dean's Honour List",
    subtitle: 'All 4 years at McMaster University',
    description: 'Consistent academic achievement in Software Engineering & Management.',
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

  // Show more/less state for work and projects
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Calculate displayed arrays for experience and projects
  const displayedExperience = showAllWork ? experience : experience.slice(0,2);
  const displayedProjects = showAllProjects ? projects : projects.slice(0,2);

  return (
    <main>
      {/* Home Section */}
  <section id="home" style={{ padding: '0rem 0', scrollMarginTop: '80px' }}>
        <div className="home-hero-flex">
          <div className="home-hero-img-wrap">
            <img
              src={headshot}
              alt="Noah Goldschmied headshot"
              className="home-hero-img"
              style={{ maxWidth: '320px', minWidth: '120px', width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div>
            <h1>Hey, I'm Noah Goldschmied!</h1>
            <p style={{ margin: 0, fontWeight: 500, fontSize: '1.1rem' }}>
              Software Engineering & Management student at McMaster University.<br />
              Currently at Wealthsimple, making sure our clients' orders execute properly.<br />
              Sports fan. Builder. Team player. Always learning.
            </p>
          </div>
        </div>
        <div style={{ flexBasis: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0rem' }}>
            {/* Contact Info just below bio, no extra section wrapper */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '0rem 0', scrollMarginTop: '80px' }}>
        <h2>Skills & Tools</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Languages</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {['Python','Java','SQL', 'TypeScript', 'CSS', 'HTML','Matlab','C','Go'].map(skill => (
              <span key={skill} style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: 'var(--accent2)',
                borderRadius: '20px',
                padding: '0.45em 1.2em',
                fontWeight: 600,
                fontSize: '1.05rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
                marginBottom: 0,
              }}>{skill}</span>
            ))}
          </div>
          <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Technologies</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {['SpringBoot','PostgreSQL','React','Docker','Google Dialogflow', 'Kubernetes','Pandas','NumPy','TensorFlow','Keras','OpenShift'].map(skill => (
                <span key={skill} style={{
                  display: 'inline-block',
                  background: 'var(--accent)',
                  color: 'var(--accent2)',
                  borderRadius: '20px',
                  padding: '0.45em 1.2em',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                }}>{skill}</span>
              ))}
            </div>
          <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Tools</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {['Git','Jira','Github Actions', 'Figma', 'DBeaver','VS Code','JetBrains IDEs','MS Office Suite'].map(skill => (
              <span key={skill} style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: 'var(--accent2)',
                borderRadius: '20px',
                padding: '0.45em 1.2em',
                fontWeight: 600,
                fontSize: '1.05rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '0rem 0', scrollMarginTop: '80px' }}>
        <h2 style={{ textAlign: 'left' }}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-start' }}>
          {displayedExperience.map((exp, idx) => {
            const anchorId = exp.company.replace(/\s+/g, '-').toLowerCase() + '-' + (exp.role ? exp.role.replace(/\s+/g, '-').toLowerCase() : idx);
            const isLast = idx === displayedExperience.length - 1;
            return (
              <div
                key={idx}
                id={anchorId}
                className="exp-card"
                style={{ cursor: 'default', transition: 'box-shadow 0.2s', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', marginBottom: isLast ? '1em' : undefined }}
              >
                <img
                  src={exp.logo}
                  alt={exp.alt}
                  className="exp-card-logo"
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <strong>{exp.company}</strong>
                    <span style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.98rem' }}>{exp.timeframe}</span>
                    <span style={{ color: 'var(--accent2)', fontWeight: 400, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.3em' }}>
                      <LocationPin />{exp.location}
                    </span>
                  </div>
                  <div style={{ fontWeight: 500, margin: '0.2rem 0 0.4rem 0' }}>{exp.role}</div>
                  <div className="exp-description-text" style={{ margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>{exp.description}</div>
                  {/* Experience images carousel if present */}
                  {exp.images && exp.images.length > 0 && (
                    <ProjectImageCarousel images={exp.images} alt={exp.company + ' experience'} />
                  )}
                  {exp.skills && exp.skills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5em' }}>
                      {exp.skills.map(skill => (
                        <span key={skill} style={{
                          display: 'inline-block',
                          background: 'var(--accent)',
                          color: 'var(--accent2)',
                          borderRadius: '20px',
                          padding: '0.45em 1.2em',
                          fontWeight: 400,
                          fontSize: '0.75rem',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                          cursor: 'pointer',
                          transition: 'background 0.2s, color 0.2s',
                          marginBottom: 0,
                        }}>{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {experience.length > 2 && (
          <button
            style={{ marginTop: '1em', padding: '0.5em 1.2em', borderRadius: '20px', background: 'var(--accent)', color: 'var(--accent2)', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.10)' }}
            onClick={() => setShowAllWork(v => !v)}
          >
            {showAllWork ? 'Show Less' : 'Show More'}
          </button>
        )}
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '0rem 0', scrollMarginTop: '80px' }}>
        <h2 style={{ textAlign: 'left' }}>Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-start' }}>
          {displayedProjects.map((proj, idx) => {
            const isLast = idx === displayedProjects.length - 1;
            return (
              <div
                key={idx}
                className="exp-card"
                style={{ cursor: 'default', transition: 'box-shadow 0.2s', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', marginBottom: isLast ? '1em' : undefined }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <strong>{proj.name}</strong>
                  </div>
                  <div className="exp-description-text" style={{ fontWeight: 400, margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>{proj.description}</div>
                  {/* Skills section for each project card */}
                  {proj.skills && proj.skills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5em' }}>
                      {proj.skills.map(skill => (
                        <span key={skill} style={{
                          display: 'inline-block',
                          background: 'var(--accent)',
                          color: 'var(--accent2)',
                          borderRadius: '20px',
                          padding: '0.45em 1.2em',
                          fontWeight: 400,
                          fontSize: '0.75rem',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                          cursor: 'pointer',
                          transition: 'background 0.2s, color 0.2s',
                          marginBottom: 0,
                        }}>{skill}</span>
                      ))}
                    </div>
                  )}
                  {/* Image carousel below text, if images are present */}
                  {proj.images && proj.images.length > 0 && (
                    <ProjectImageCarousel images={proj.images} alt={proj.alt} />
                  )}
                  {/* Video below text, if present */}
                  {proj.video && (
                    <div style={{ marginTop: '1em' }}>
                      <video controls style={{ maxWidth: '600px', maxHeight: '600px', width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.10)' }}>
                        <source src={proj.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {/* Project links, if present */}
                  {(proj.github || proj.website) && (
                    <div style={{ marginTop: '1em', display: 'flex', gap: '0.5em' }}>
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-block',
                          background: '#24292e',
                          color: '#fff',
                          borderRadius: '20px',
                          padding: '0.45em 1.2em',
                          fontWeight: 500,
                          fontSize: '0.85rem',
                          textDecoration: 'none',
                          transition: 'background 0.2s, color 0.2s',
                        }}>View on GitHub</a>
                      )}
                      {proj.website && (
                        <a href={proj.website} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-block',
                          background: '#24292e',
                          color: '#fff',
                          borderRadius: '20px',
                          padding: '0.45em 1.2em',
                          fontWeight: 500,
                          fontSize: '0.85rem',
                          textDecoration: 'none',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                          transition: 'background 0.2s, color 0.2s',
                        }}>Visit Website</a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {projects.length > 2 && (
          <button
            style={{ marginTop: '1em', padding: '0.5em 1.2em', borderRadius: '20px', background: 'var(--accent)', color: 'var(--accent2)', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.10)' }}
            onClick={() => setShowAllProjects(v => !v)}
          >
            {showAllProjects ? 'Show Less' : 'Show More'}
          </button>
        )}
      </section>

      {/* About Me Section */}
      <section id="about-me" style={{ padding: '0rem 0', minHeight: '40vh', scrollMarginTop: '80px' }}>
        <h2 style={{ textAlign: 'left' }}>About Me</h2>
        <p style={{ fontSize: '1rem', marginBottom: '2em' }}>
          Learn about my achievements, activities, and what makes me tick outside of work!<br />
        </p>
        <h3>Awards & Achievements</h3>
        <p style={{ fontSize: '0.95rem', marginBottom: '0.4em', marginTop: '-1.2em' }}>
          Highlights of awards and accomplishments I've earned.
        </p>
        <ul style={{ marginLeft: '1.5em', marginTop: '0.3em', marginBottom: '2.5em', fontSize: '1rem', lineHeight: '1.7', padding: 0 }}>
          {awards.map((award, idx) => (
            <li key={idx} style={{ marginBottom: '0.5em' }}>
              {award.link ? (
                <a href={award.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent2)', textDecoration: 'none', fontWeight: 'bold' }}>
                  <strong style={{ textDecoration: 'underline' }}>{award.title}</strong>
                </a>
              ) : (
                <strong>{award.title}</strong>
              )}
              {award.subtitle && <span style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.98rem', marginLeft: '0.7em' }}>{award.subtitle}</span>}
              <div style={{ fontWeight: 500, margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>{award.description}</div>
            </li>
          ))}
        </ul>
        <h3> Extracurricular & Volunteer Experience</h3>
        <p style={{ fontSize: '0.95rem', marginBottom: '0.4em', marginTop: '-1.2em' }}>
          Highlights of extracurricular and volunteer experiences I've had.
        </p>
        <ul style={{ marginLeft: '1.5em', marginTop: '0.3em', marginBottom: '0.5em', fontSize: '1rem', lineHeight: '1.7', padding: 0 }}>
          {extracurriculars.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '0.5em' }}>
              <strong>{item.org}</strong>
              {item.timeframe && <span style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.98rem', marginLeft: '0.7em' }}>{item.timeframe}</span>}
              {item.role && <div style={{ fontWeight: 500, margin: '0.2rem 0 0.4rem 0' }}>{item.role}</div>}
              {item.description && (
                <div style={{ margin: '0.2rem 0 0.4rem 0', fontSize: '0.98rem' }}>{item.description}</div>
              )}
            </li>
          ))}
        </ul>
        <LastFmTopArtists />
        {/* Add more fun facts, images, or interactive elements here! */}


        <ContactInfo />
      </section>
    </main>
  );
}
export default Home;
