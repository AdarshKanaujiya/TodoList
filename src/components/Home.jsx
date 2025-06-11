// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to My React Portfolio</h1>
//       <p>This portfolio showcases my projects built with React and API integrations.</p>
//       <ul className="project-links">
//         <li>
//           <Link to="/todo">To-Do App</Link>
//         </li>
//         <li>
//           <Link to="/weather">Weather App</Link>
//         </li>
//         <li>
//           <Link to="/github">GitHub Dashboard</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // You can customize these based on your actual skills and information
  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '📜' },
    { name: 'HTML/CSS', level: 90, icon: '🎨' },
    { name: 'Node.js', level: 75, icon: '🚀' },
    { name: 'Git/GitHub', level: 80, icon: '🔧' },
    { name: 'API Integration', level: 85, icon: '🔗' },
  ];

  const projects = [
    {
      title: 'To-Do Application',
      description: 'A dynamic todo app with add/delete functionality built with React hooks and modern CSS styling.',
      tech: ['React', 'JavaScript', 'CSS3'],
      link: '/todo',
      type: 'internal'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application integrating OpenWeather API with responsive design and error handling.',
      tech: ['React', 'API Integration', 'CSS3'],
      link: '/weather',
      type: 'internal'
    },
    {
      title: 'GitHub Profile Explorer',
      description: 'Interactive dashboard to explore GitHub profiles and repositories with dynamic data fetching.',
      tech: ['React', 'GitHub API', 'REST API'],
      link: '/github',
      type: 'internal'
    }
  ];

  const achievements = [
    '🎓 Built 3+ interactive web applications',
    '🔥 Proficient in modern React development',
    '🌐 Experience with API integrations',
    '📱 Responsive web design expertise',
    '⚡ Clean, maintainable code practices',
    '🚀 Continuous learning mindset'
  ];

  return (
    <div className={`portfolio-home ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image">
            <div className="image-placeholder">
              <span className="profile-initial">Mr.</span> 
            </div>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Adarsh Kanujiya</span> 
          </h1>
          <p className="hero-subtitle">Full Stack Developer & React Enthusiast</p>
          <p className="hero-description">
            Passionate about creating dynamic, user-friendly web applications with modern technologies. 
            I love turning ideas into reality through clean, efficient code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate web developer with expertise in React.js and modern JavaScript. 
                I enjoy building interactive, responsive web applications that provide excellent user experiences.
              </p>
              <p>
                My journey in web development started with curiosity about how websites work, and has evolved 
                into a deep appreciation for clean code, user-centered design, and continuous learning.
              </p>
            </div>
            <div className="about-highlights">
              <h3>What I Bring:</h3>
              <ul className="highlights-list">
                {achievements.map((achievement, index) => (
                  <li key={index} className="highlight-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Here are some of the projects I've built to showcase my skills</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <Link to={project.link} className="project-link">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience/Education Section */}
      <section className="experience-section" id="experience">
        <div className="section-container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Self-Taught Developer</h3>
                <p className="timeline-period">2023 - Present</p>
                <p>Focused on mastering React.js, JavaScript, and modern web development practices through hands-on projects and continuous learning.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Web Development Journey</h3>
                <p className="timeline-period">2022 - 2023</p>
                <p>Started learning HTML, CSS, and JavaScript fundamentals. Built first projects and discovered passion for frontend development.</p>
              </div>
            </div>
            {/* Add more timeline items as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">I'm always open to discussing new opportunities and interesting projects</p>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>adarshkanoujiya2004@gmail.com</p> 
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9930410665</p> 
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Mumbai, India</p> 
                </div>
              </div>
            </div>
            <div className="social-links">
              <h4>Find me online</h4>
              <div className="social-buttons">
                <a href="https://github.com/AdarshKanaujiya/" className="social-btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/adarsh-kanaujiya-b0b32a28b/" className="social-btn" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to work together?</h2>
            <p>Let's create something amazing together. I'm always excited about new challenges and opportunities.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary">Contact Me</a>
              <a href="/Adarsh Kanaujiya resum.pdf" className="btn-secondary" download>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;