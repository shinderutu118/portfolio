export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  duration: string;
  role: string;
  company?: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'connect-bharat-sme-portal',
    title: 'Connect Bharat - SME Government Compliance Portal',
    description: 'Angular frontend modules and Node.js/MongoDB APIs for SME government compliance portal.',
    fullDescription: 'Built Angular frontend modules and Node.js/MongoDB APIs for SME government compliance portal. Developed dashboards, document uploads, and compliance workflows (FSSAI, GST, licensing). Optimized SME dataset queries and implemented GST/fee rule engines. Enabled digital community features connecting 15,000+ SMEs under NSWS.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'REST APIs', 'FSSAI API', 'GST API', 'NSWS'],
    features: [
      'Built Angular frontend modules for SME compliance portal',
      'Developed Node.js/MongoDB APIs for backend services',
      'Created dashboards for compliance tracking',
      'Document upload and management system',
      'Compliance workflows (FSSAI, GST, licensing)',
      'Optimized SME dataset queries',
      'Implemented GST/fee rule engines',
      'Digital community features for 15,000+ SMEs under NSWS'
    ],
    challenges: [
      'Integrating government APIs (FSSAI, GST)',
      'Handling large-scale SME data optimization',
      'Building scalable architecture for 15,000+ users',
      'Ensuring compliance with government standards'
    ],
    duration: 'Mar 2025 - Present',
    role: 'MERN Stack Developer',
    company: 'Connect Bharat, Delhi',
    liveUrl: '#', // Add actual URL when available
    image: '/images/connect-bharat-portal.png'
  },
  {
    id: 'cbmo-ai-frontend',
    title: 'CBMO-AI - Frontend Development',
    description: 'React.js, TypeScript, Bootstrap responsive pages with RBAC and team management features.',
    fullDescription: 'Developed responsive pages (React.js, TypeScript, Bootstrap) from Figma designs. Implemented RBAC, team management, and workspace features. Built marketing data tables, Gantt charts, and media upload functionality. Integrated REST APIs and optimized performance with Redux.',
    technologies: ['React.js', 'TypeScript', 'Bootstrap', 'Redux', 'Figma', 'REST APIs', 'RBAC'],
    features: [
      'Developed responsive pages from Figma designs',
      'Implemented Role-Based Access Control (RBAC)',
      'Built team management and workspace features',
      'Created marketing data tables with advanced filtering',
      'Developed Gantt charts for project visualization',
      'Implemented media upload functionality',
      'Integrated REST APIs for data management',
      'Optimized performance with Redux state management'
    ],
    challenges: [
      'Converting Figma designs to pixel-perfect responsive layouts',
      'Implementing complex RBAC system',
      'Building performant data tables for large datasets',
      'Ensuring seamless API integration'
    ],
    duration: 'Jul 2024 - Feb 2025',
    role: 'Frontend Developer',
    company: 'CBMO-AI, Dubai',
    image: '/images/cbmo-ai-dashboard.png'
  },
  {
    id: 'eureka-trip-platform',
    title: 'Eureka Trip - Travel Management Platform',
    description: 'Admin, vendor, and user tour management panels with Spring Boot + MySQL integration.',
    fullDescription: 'Designed panels for admin, vendor, and user tour management. Integrated Spring Boot + MySQL APIs for bookings and scheduling. Enabled vendor media uploads for tours and enhanced UI/UX for better user experience.',
    technologies: ['Frontend Development', 'Spring Boot', 'MySQL', 'REST APIs', 'JavaScript', 'HTML/CSS'],
    features: [
      'Designed admin panels for tour management',
      'Built vendor registration and management system',
      'Created user tour booking interfaces',
      'Integrated Spring Boot + MySQL APIs',
      'Implemented booking and scheduling system',
      'Enabled vendor media uploads for tours',
      'Enhanced UI/UX design for better user experience',
      'Tour search and filtering functionality'
    ],
    challenges: [
      'Creating intuitive admin interfaces for complex data',
      'Integrating multiple user roles and permissions',
      'Building responsive booking workflows',
      'Optimizing database queries for tour management'
    ],
    duration: 'Jan 2024 - Jul 2024',
    role: 'Frontend Developer',
    company: 'Eureka Trip, US',
    image: '/images/eureka-trip-platform.png'
  },
  {
    id: 'swasth-soijana-clinic',
    title: 'Swasth Soijana - Clinic Management System',
    description: 'Angular responsive web pages with RBAC for multiple roles and REST API integration.',
    fullDescription: 'Developed Angular-based responsive web pages from Figma designs. Implemented RBAC for multiple roles (Admin, Leads, Engineers). Integrated REST APIs (Spring Boot + MySQL) for clinic and consultation workflows.',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'TypeScript', 'Figma', 'REST APIs', 'RBAC'],
    features: [
      'Developed Angular responsive web pages from Figma',
      'Implemented RBAC for Admin, Leads, and Engineers',
      'Built clinic management workflows',
      'Created consultation scheduling system',
      'Integrated REST APIs with Spring Boot + MySQL',
      'Patient management and record keeping',
      'Appointment booking and management',
      'Real-time consultation workflows'
    ],
    challenges: [
      'Implementing secure RBAC for healthcare data',
      'Building responsive layouts for medical workflows',
      'Ensuring data security and privacy compliance',
      'Creating intuitive consultation interfaces'
    ],
    duration: 'May 2023 - Jan 2024',
    role: 'Frontend Developer',
    company: 'Swasth Soijana, Chennai',
    image: '/images/swasth-soijana-clinic.png'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};
