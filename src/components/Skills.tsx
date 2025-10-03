import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaServer,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";
import "./Skills.css";

const Skills: React.FC = () => {
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
    
    return () => {
      observer.disconnect();
    };
  }, []);
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="icon" />,
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "React.js (JavaScript & TypeScript)",
        "AngularJS",
      ],
      color: "skill-tag-primary",
    },
    {
      title: "Backend Development",
      icon: <FaServer className="icon" />,
      skills: ["Node.js", "MongoDB"],
      color: "skill-tag-secondary",
    },
    {
      title: "Version Control",
      icon: <FaGitAlt className="icon" />,
      skills: ["Git", "GitHub", "GitLab"],
      color: "skill-tag-accent",
    },
    {
      title: "Tools",
      icon: <FaTools className="icon" />,
      skills: ["Visual Studio Code", "Postman", "Putty", "Figma", "WinSCP"],
      color: "skill-tag-warning",
    },
  ];

  return (
    <section className={`skills-section theme-${theme}`}>
      <div className="container">
        <h2 className="section-title text-center mb-5">
          Skills & Technologies
        </h2>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div className="skill-card">
                <div className="skill-card-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`skill-badge ${category.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
