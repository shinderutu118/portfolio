import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  const experiences = [
    {
      date: "Mar 2023 – Present | Delhi",
      title: "Full Stack Developer",
      company: "Connect Bharat",
      achievements: [
        "Built Angular frontend modules and Node.js/MongoDB APIs for SME government compliance portal",
        "Developed dashboards, document upload, and compliance workflows (FSSAI, GST, licensing)",
        "Optimized SME dataset queries and implemented GST/tax rule engines",
        "Digitalized SME community features connecting 15,000+ SMEs under NSWS",
      ],
    },
    {
      date: "Jul 2024 – Present | Dubai",
      title: "Frontend Developer",
      company: "CBMO-AI",
      achievements: [
        "Developed responsive pages (React.js, TypeScript, Bootstrap) from Figma",
        "Implemented RBAC, team management, and workspace features",
        "Built marketing data tables, Gantt chart, and media upload functionality",
        "Integrated REST APIs and optimized performance with Redux",
      ],
    },
    {
      date: "Jan 2024 – Jul 2024 | US",
      title: "Frontend Developer",
      company: "Eureka Trip",
      achievements: [
        "Designed panels for admins, vendors, and user tour management",
        "Integrated Spring Boot + MySQL APIs for booking and scheduling",
        "Enabled vendor and admin modules for tours and enhanced UI/UX",
      ],
    },
    {
      date: "May 2023 – Jan 2024 | Chennai",
      title: "Frontend Developer",
      company: "Swasth Solinas",
      achievements: [
        "Developed Angular-based responsive web pages from Figma designs",
        "Implemented RBAC for multiple roles (Admin, Leads, Engineers)",
        "Integrated REST APIs (Spring Boot + MySQL) for microservice workflows",
      ],
    },
  ];

  return (
    <section className="section section-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Professional Experience</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="timeline-date mb-3 mb-md-0">
                      <span className="badge bg-primary px-3 py-2">
                        {exp.date}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="h4 mb-2 text-primary">{exp.title}</h3>
                      <h4 className="h6 mb-3 text-muted">{exp.company}</h4>
                      <ul className="list-unstyled">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="mb-2 d-flex">
                            <span className="text-primary me-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
