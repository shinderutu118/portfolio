import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [theme, setTheme] = useState('light');

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
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate sending delay
    setTimeout(() => {
      const mailtoLink = `mailto:rutujabshinde23@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage: ${formData.message}`)}`;
      window.location.href = mailtoLink;
      setFormStatus('sent');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus('idle');
      }, 2000);
    }, 1000);
  };

  const contactMethods = [
    {
      id: 1,
      icon: (
        <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: 'Email',
      value: 'rutujabshinde23@gmail.com',
      description: 'Drop me a line anytime',
      action: 'mailto:rutujabshinde23@gmail.com',
      color: 'from-blue-500 to-purple-600',
      delay: '0.1s'
    },
    {
      id: 2,
      icon: (
        <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Phone',
      value: '+91 7745880639',
      description: 'Call during business hours',
      action: 'tel:+917745880639',
      color: 'from-green-500 to-teal-600',
      delay: '0.2s'
    },
    {
      id: 3,
      icon: (
        <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'Connect professionally',
      description: 'Let\'s network and collaborate',
      action: 'https://www.linkedin.com/in/rutuja-shinde-45212a229',
      color: 'from-indigo-500 to-blue-600',
      delay: '0.3s'
    },
    {
      id: 4,
      icon: (
        <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Location',
      value: 'Pune, Maharashtra',
      description: 'Kaspate wasti, wakad, 411057',
      action: '#',
      color: 'from-pink-500 to-rose-600',
      delay: '0.4s'
    }
  ];

  return (
    <section className={`modern-contact-section theme-${theme}`}>
      {/* Animated Background */}
      <div className="contact-bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="gradient-mesh"></div>
      </div>

      <div className="contact-main-container">
        {/* Hero Section */}
        <div className={`contact-hero ${isVisible ? 'animate-in' : ''}`}>
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-content">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Available for opportunities
            </span>
          </div>
          
          <h1 className="hero-title">
            Let's Create Something
            <span className="title-gradient"> Extraordinary</span>
          </h1>
          
          <p className="hero-description">
            Ready to turn your vision into reality? I'm here to help you build
            <br className="desktop-break" />
            exceptional digital experiences that make a difference.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Methods */}
          <div className="contact-methods">
            <div className="methods-header">
              <h2 className="methods-title">Get In Touch</h2>
              <p className="methods-subtitle">Choose your preferred way to connect</p>
            </div>
            
            <div className="contact-cards-grid">
              {contactMethods.map((method) => (
                <div 
                  key={method.id}
                  className={`contact-method-card ${activeCard === method.id ? 'active' : ''}`}
                  style={{ animationDelay: method.delay }}
                  onMouseEnter={() => setActiveCard(method.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`card-gradient bg-gradient-to-br ${method.color}`}></div>
                  <div className="card-content">
                    <div className="card-icon">
                      {method.icon}
                    </div>
                    <div className="card-info">
                      <h3 className="card-title">{method.title}</h3>
                      <p className="card-value">{method.value}</p>
                      <p className="card-description">{method.description}</p>
                    </div>
                    <a 
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="card-action"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="modern-contact-form">
            <div className="form-container">
              <div className="form-header-section">
                <h2 className="form-main-title">Send a Message</h2>
                <p className="form-main-subtitle">Let's discuss your next project</p>
              </div>
              
              <form className="enhanced-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="floating-input-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="floating-input"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="name" className="floating-label">Full Name</label>
                    <div className="input-border"></div>
                  </div>
                  
                  <div className="floating-input-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="floating-input"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="email" className="floating-label">Email Address</label>
                    <div className="input-border"></div>
                  </div>
                </div>
                
                <div className="floating-input-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="floating-input"
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="subject" className="floating-label">Subject</label>
                  <div className="input-border"></div>
                </div>
                
                <div className="floating-input-group">
                  <textarea
                    id="message"
                    name="message"
                    className="floating-textarea"
                    placeholder=" "
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <label htmlFor="message" className="floating-label">Your Message</label>
                  <div className="input-border"></div>
                </div>
                
                <button 
                  type="submit" 
                  className={`modern-submit-btn ${formStatus}`}
                  disabled={formStatus === 'sending'}
                >
                  <span className="btn-content">
                    {formStatus === 'idle' && (
                      <>
                        <span className="btn-text">Send Message</span>
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
                        </svg>
                      </>
                    )}
                    {formStatus === 'sending' && (
                      <>
                        <span className="btn-text">Sending...</span>
                        <div className="btn-spinner"></div>
                      </>
                    )}
                    {formStatus === 'sent' && (
                      <>
                        <span className="btn-text">Message Sent!</span>
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17L4 12"/>
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to start your project?</h3>
            <p className="cta-subtitle">Let's turn your ideas into extraordinary digital experiences</p>
            <div className="cta-actions">
              <a href="mailto:rutujabshinde23@gmail.com" className="cta-primary-btn">
                <span>Start a Conversation</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/rutuja-shinde-45212a229/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="cta-secondary-btn">
                <span>View LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
