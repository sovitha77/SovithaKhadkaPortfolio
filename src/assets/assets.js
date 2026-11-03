import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaNodeJs, FaDatabase, FaBookOpen, FaLaptopCode } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

import bookStoreProfile from '../assets/bookStoreProfile.png';
import padmaAchar from '../assets/padmaAchar.png';
import Calculator from '../assets/Calculator.png';
import protfolio from '../assets/protfolio.png';
import quiz from '../assets/quiz.png';
import image from '../assets/image.png';
import backend from '../assets/backend.png';
import taskmanager from '../assets/taskmanager.png';
import marker from '../assets/marker.png';

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I enjoy building practical digital products with modern web technologies and user-first thinking.',
    color: 'text-purple',
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'I value clean interfaces, smooth UX, and thoughtful design systems that feel intuitive.',
    color: 'text-pink',
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code with a strong focus on reliability and readability.',
    color: 'text-blue',
  },
];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Creating responsive, dynamic interfaces with a strong focus on usability and performance.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Building APIs, business logic, and scalable server-side applications.',
    tags: ['Node.js', 'Express', 'REST APIs',  'Python', ' Django'],
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and maintaining robust database systems for modern applications.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools & Workflow',
    icon: FaTools,
    description: 'Using modern tools to collaborate, automate, and ship clean projects.',
    tags: ['GitHub', 'Git', 'Figma', 'Postman', 'Jira'],
  },
  {
    title: 'Testing & Quality',
    icon: FaLaptopCode,
    description: 'Writing maintainable code with validation, debugging, and verification practices.',
    tags: ['Unit Testing', 'Manual Testing', 'Debugging', 'QA'],
  },
  {
    title: 'Soft Skills',
    icon: FaBookOpen,
    description: 'Collaborating effectively with teams while solving problems and communicating clearly.',
    tags: ['Communication', 'Problem Solving', 'Teamwork', 'Leadership'],
  },
];

export const experience = [
  {
    role: 'Software Developer',
    company: 'SB Global Venture',
    period: 'June 2026 - Present',
    bullets: [
      'Developed responsive corporate website pages using Next.js, React.js, TypeScript, and Tailwind CSS from Figma designs.',
      'Implemented dynamic Home Page with dynamic content integration, business/brand sections, and interactive CTAs.',
      'Built front-end and back-end modules for attendance, payroll, leave management, and content workflows.',
      'Optimized performance, accessibility, and maintainability across marketing and admin interfaces.',
    ],
  },
  {
    role: 'Code Like Her Fellowship',
    company: 'Apprenticeship',
    period: 'Feb -Aug 2026',
    bullets: [
      'Completed practical training in full-stack web development using React.js, Python, Django REST Framework, and PostgreSQL.',
      'Developed REST APIs and full-stack projects, including Clinic and Appointment Management Systems.',
      'Worked with Git, Docker, GitHub Actions, and cloud deployment workflows.',
      'Built frontend-backend integrations and implemented CRUD operations with authentication and data validation.',
    ],
  },
];

export const projects = [
  {
    title: 'Book Store Web App',
    description: 'A web application for managing and purchasing books online with user authentication, dark/light mode, and secure features.',
    image: bookStoreProfile,
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: '#',
    code: 'https://github.com/sovitha77/BookStore',
  },
  {
    title: 'Padma Achar Website',
    description: 'Achar e-commerce site with product listing, review flow, and a clean customer experience.',
    image: padmaAchar,
    tech: ['React', 'Tailwind CSS'],
    icons: [FaReact],
    demo: 'https://sovitha77.github.io/padmaAachar/',
    code: 'https://github.com/sovitha77/padmaAachar',
  },
  {
    title: 'Movie Project',
    description: 'A movie browsing app with search, movie details, user ratings, and favorites.',
    image: image,
    tech: ['React'],
    icons: [FaReact],
    demo: 'https://sovitha77.github.io/MovieProject/',
    code: 'https://github.com/sovitha77/MovieProject',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase projects, skills, and work experience with responsive design.',
    image: protfolio,
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    icons: [FaReact],
    demo: 'https://sovitha77.github.io/SovithaKhadkaPortfolio/',
    code: 'https://github.com/sovitha77/SovithaKhadkaPortfolio',
  },
  {
    title: 'MERN Project Server',
    description: 'A backend project with REST APIs, authentication, secure server logic, and database operations.',
    image: backend,
    tech: ['Socket.IO', 'TypeScript', 'Node.js', 'PostgreSQL'],
    icons: [SiTypescript, FaNodeJs, FaDatabase],
    demo: '#',
    code: 'https://github.com/sovitha77/MERN3_projectServer',
  },
  {
    title: 'Quiz Application',
    description: 'A Java-based quiz application with dynamic question flow, score tracking, and instant feedback.',
    image: quiz,
    tech: ['Java'],
    icons: [],
    demo: '#',
    code: 'https://github.com/sovitha77/Quiz-Application',
  },
  {
    title: 'Calculator',
    description: 'Simple responsive calculator focused on clean UI and front-end interaction patterns.',
    image: Calculator,
    tech: ['HTML', 'CSS'],
    icons: [],
    demo: 'https://book-store-4cdz-eieh3ps1r-binisha77s-projects.vercel.app',
    code: 'https://github.com/sovitha77/-codesoft/tree/main/calculator',
  },
  {
    title: 'Task Manager',
    description: 'Todo application built with Angular and TypeScript for task workflow management.',
    image: taskmanager,
    tech: ['HTML', 'CSS', 'Angular', 'TypeScript'],
    icons: [],
    demo: 'https://browser-2pz4nm8x4-binisha77s-projects.vercel.app/',
    code: 'https://github.com/sovitha77/task-manager',
  },
  {
    title: 'Marker',
    description: 'Frontend landing page project focused on structure, styling, and responsive layout practice.',
    image: marker,
    tech: ['HTML', 'CSS'],
    icons: [],
    demo: 'https://30dayspklearningday3-qh88.vercel.app/',
    code: 'https://github.com/sovitha77/30dayspklearningday3',
  },
];

export const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/sovitha77',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sovita-khadka-1086b925a/',
  },
];
