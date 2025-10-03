import React, { useEffect, useState } from 'react';
import './Hero.css'; // Ensure this file exists and is correctly linked
import resumePDF from '../assets/Rutuja_Shinde Mern stack.pdf';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [theme, setTheme] = useState('light');
  
  const roles = [
    'MERN Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Developer',
    'React.js Developer',
    'Angular Developer'
  ];

  useEffect(() => {
    // Check initial theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(newTheme);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <section className={`hero theme-${theme}`}>
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="hero-badge">
            <span className="badge-text">
              ✨ Available for new opportunities
            </span>
          </div>
          
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          
          <h1 className="hero-name">
            <span className="name-highlight">Rutuja Shinde</span>
            <span className="name-wave">👋</span>
          </h1>
          
          <div className="hero-role">
            <span className="role-text">{roles[currentRole]}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-description">
            <span className="description-highlight">Crafting exceptional digital experiences</span> through innovative web solutions.
            <br />
            Specializing in <strong>React.js</strong>, <strong>Angular</strong>, and <strong>Node js</strong>.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="/contact" className="btn primary">
              <span className="btn-text">Let's Connect</span>
              <span className="btn-icon">💬</span>
            </a>
            <a href="/projects" className="btn secondary">
              <span className="btn-text">View Portfolio</span>
              <span className="btn-icon">🚀</span>
            </a>
            <a 
              href={resumePDF} 
              download="Rutuja_Shinde_Resume.pdf" 
              className="btn tertiary"
              title="Download Resume"
            >
              <span className="btn-text">Download Resume</span>
              <span className="btn-icon">📄</span>
            </a>
            <a href="#about" className="btn quaternary">
              <span className="btn-text">Learn More</span>
              <span className="btn-arrow">↓</span>
            </a>
          </div>
          
          <div className="hero-social">
            <a href="https://www.linkedin.com" className="social-link" title="LinkedIn">
              <span className="social-icon">💼</span>
            </a>
            <a href="https://github.com" className="social-link" title="GitHub">
              <span className="social-icon">🔗</span>
            </a>
            <a href="mailto:example@example.com" className="social-link" title="Email">
              <span className="social-icon">📧</span>
            </a>
          </div>
          
          <div className="hero-scroll">
            <span className="scroll-text">Discover my journey</span>
            <div className="scroll-indicator">
              <div className="scroll-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
