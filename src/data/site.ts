import type {
  Achievement,
  Education,
  Experience,
  NavLink,
  Project,
  SiteConfig,
  SkillCategory,
  SocialLink,
} from '../types';
import profileImage from './myImage.png';
import socialMediaImage from './social_media_app.png';

export const siteConfig: SiteConfig = {
  name: 'Sri Krishna Devi',
  role: 'AI-Forward Full-Stack Engineer',
  tagline:
    'Building intelligent, responsive web applications with React, Node.js, and Python. Specialized in full-stack MERN systems, ML integration, database design, and web hosting.',
  location: 'Karachi, Sindh, Pakistan',
  email: 'srikrishnadevi47@gmail.com',
  resumeUrl: '/Resume.pdf',
  profileImage,
  about: {
    paragraphs: [
      'I am an AI-Forward Full-Stack Engineer and Computer Science graduate from Sukkur IBA University, specializing in building intelligent, production-ready web platforms using React, Node.js, and Python.',
      'I bridge the gap between complex Machine Learning models and clean, responsive UI/UX. I own systems end-to-end—from database normalization and backend API design to responsive web deployments and cloud hosting.',
      'Passionate about technical leadership, I have trained 500+ developers in regional workshops, communicating advanced engineering patterns to both corporate and student groups.',
    ],
    highlights: [
      'Intelligent MERN & Python AI Systems',
      'Robust Backend & API Architecture',
      'Technical Leadership & Community Building',
    ],
  },
};

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5 & CSS3', level: 90 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js & Express', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'MySQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Socket.io', level: 75 },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Hugging Face / NLP', level: 80 },
      { name: 'Computer Vision', level: 75 },
      { name: 'scikit-learn & ML', level: 70 },
      { name: 'Flask', level: 75 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Vercel / Cloud Deployment', level: 80 },
      { name: 'Postman & APIs', level: 80 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'sentiaware',
    title: 'SentiAware — AI-Powered Social Media Platform (FYP)',
    description:
      'Full-stack, production-grade social platform featuring toxic text neutralizing and harmful image filtering before publish.',
    problem:
      'Content moderation systems block accounts aggressively instead of actively helping users rewrite neutral dialogue.',
    solution:
      'Built a MERN app with a Python/Flask microservice. Leveraged Flan-T5 for toxic text rewriting and EfficientNet-B3 + OCR for image moderation, yielding sub-350ms processing times.',
    techStack: [
      'MERN Stack',
      'Python',
      'Flan-T5',
      'EfficientNet-B3',
      'Flask',
      'Cloudinary',
      'Brevo',
    ],
    features: [
      'Real-time toxic text rewriting via Flan-T5 API',
      'Multimodal image moderation & OCR engine',
      'Secure image hosting with Cloudinary API Integration',
      'Automated transactional notifications powered by Brevo API',
    ],
    githubUrl: 'https://github.com/KrishnaParhyar',
    liveUrl: 'https://connectopia-fyp.vercel.app',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
  },
  {
    id: 'movie-rec',
    title: 'Movie Recommendation System (AI-Based)',
    description:
      'High-performance content filtering engine delivering dynamic recommendations across 5,000+ catalog titles.',
    problem:
      'Generic recommendation models suffer from cold-starts and weak user-profile alignment.',
    solution:
      'Designed a TF-IDF vectorization and cosine similarity recommendation model in Python. Achieved a measurable 22% improvement in user relevance rating accuracy compared to standard baseline approaches.',
    techStack: ['Python', 'scikit-learn', 'TF-IDF', 'Flask'],
    features: [
      'Content-based vector filtering algorithms',
      '5,000+ title IMDB dataset ingestion pipeline',
      'Sub-50ms cosine similarity calculation query speed',
      'Clean interactive Flask UI with dynamic recommendation feeds',
    ],
    githubUrl: 'https://github.com/KrishnaParhyar',
    liveUrl: 'https://movie-recommend-flask.onrender.com',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
  },
  {
    id: 'anonymous-chat',
    title: 'Anonymous Chat Application',
    description:
      'Privacy-first real-time messaging application delivering sub-100ms message transmission latency.',
    problem:
      'Modern chat tools require extensive registration data, leaving persistent traces of session identities.',
    solution:
      'Engineered an anonymous one-to-one room router using Socket.io and Node.js. Integrated strict in-memory state control to prevent persistent message or identity logging.',
    techStack: ['React.js', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    features: [
      'Sub-100ms real-time event transmission',
      'Zero-storage privacy protocol using transient session scopes',
      'Dynamic connection scaling & custom invite rooms',
      'Fully responsive, mobile-first responsive UI layout',
    ],
    githubUrl: 'https://github.com/KrishnaParhyar',
    liveUrl: 'https://anonymous-chat-socket.vercel.app',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  },
  {
    id: 'social-media',
    title: 'Social Media Web Application',
    description:
      'Full-stack social utility featuring secure authorization and relational feed caching architectures.',
    problem:
      'Frequent database reads and page refreshes trigger layout stuttering and massive overhead.',
    solution:
      'Architected a highly normalized MySQL database schema and built a robust 10+ endpoint REST API with Express. Implemented state-driven feed caching on the client, cutting database roundtrips by 40%.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
    features: [
      'Secure stateless authorization using custom JWT keys',
      'Relational schema supporting cascading post, like, and comment feeds',
      'Efficient state-driven caching eliminating unnecessary full-page updates',
      '10+ REST API endpoints supporting user profile, post, like, and comment cascading updates',
    ],
    githubUrl: 'https://github.com/KrishnaParhyar',
    liveUrl: 'https://na-it-social.vercel.app',
    image: socialMediaImage,
  },
];

export const experiences: Experience[] = [
  {
    id: 'mindhyve',
    role: 'Agentic AI Ambassador',
    company: 'MindHYVE.ai',
    location: 'Remote',
    period: 'Nov 2025 — Present',
    description:
      'Leading digital education campaigns and building production-grade agentic AI tutorials for developer communities.',
    highlights: [
      'Grew active monthly developer engagement across social platforms by 40% through custom tutorial campaigns',
      'Created 12+ technical guides on agentic workflows, reaching 200+ professionals and students monthly',
    ],
    technologies: ['Agentic AI', 'Generative AI', 'Technical Writing', 'Developer Advocacy'],
  },
  {
    id: 'aicp',
    role: 'Regional Lead',
    company: 'Artificial Intelligence Community of Pakistan (AICP)',
    location: 'Sukkur',
    period: 'Mar 2025 — Present',
    description:
      'Managing regional AI community educational initiatives, directing multi-speaker hackathons, and leading hands-on development workshops.',
    highlights: [
      'Led 10+ hands-on AI/ML and MERN workshops, directly impacting 500+ students and helping 15+ secure engineering roles',
      'Accelerated local chapter membership by 30% inside 6 months through structured data-driven promotion',
    ],
    technologies: ['AI/ML Systems', 'Community Building', 'Technical Mentorship', 'Event Engineering'],
  },
  {
    id: 'national-assembly',
    role: 'Legislative Intern',
    company: 'National Assembly of Pakistan',
    location: 'Islamabad',
    period: 'Jun 2025 — Aug 2025',
    description:
      'Conducted rigorous quantitative policy research and compiled structured legislative briefs for technology and educational adaptation.',
    highlights: [
      'Synthesized complex datasets from 20+ policy frameworks into structured legislative briefs used in active parliamentary sessions',
      'Received outstanding recommendations for ensuring 100% factual accuracy under demanding, high-pressure deadlines',
    ],
    technologies: ['Policy Data Analytics', 'Quantitative Research', 'Technical Documentation'],
  },
  {
    id: 'css-exec',
    role: 'Executive Committee Member',
    company: 'Computer Science Society, Sukkur IBA',
    location: 'Sukkur',
    period: 'Nov 2024 — Present',
    description:
      'Coordinating and hosting major technical hackathons, coding contests, and digital platform optimizations for CS students.',
    highlights: [
      'Organized 5+ high-impact hackathons and events with 300+ attendees, reducing logistics overhead by 15%',
      'Boosted society digital channel impressions by 25% through consistent, student-focused technical content strategy',
    ],
    technologies: ['Event Management', 'Social Media', 'Leadership'],
  },
];

export const education: Education[] = [
  {
    id: 'iba',
    degree: 'Bachelor of Science in Computer Science',
    school: 'Sukkur IBA University',
    location: 'Sukkur, Pakistan',
    period: 'Sep 2022 — May 2026',
    details:
      'Relevant coursework: Data Structures & Algorithms, DBMS, Object-Oriented Programming, Software Engineering, System Design',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'fyp',
    title: 'Final Year Project — SentiAware',
    organization: 'Sukkur IBA University',
    period: '2026',
    description:
      'Awarded top honors for designing an intelligent, containerized content moderation pipeline combining Flan-T5 and EfficientNet-B3.',
  },
  {
    id: 'meta-fe',
    title: 'Meta Front-End Developer Certified',
    organization: 'Meta (Coursera)',
    period: '2025',
    description:
      'Rigorous professional specialization covering advanced React state management, API integrations, and UI/UX best practices.',
  },
  {
    id: 'fcc-rwd',
    title: 'Responsive Web Design Certified',
    organization: 'freeCodeCamp',
    period: '2024',
    description:
      'Certification validating advanced responsive design frameworks, fluid layouts, CSS Grid, Flexbox, and cross-browser responsiveness.',
  },
  {
    id: 'hackathon',
    title: 'Hackathon Contender & Organizer',
    organization: 'CS Society & AICP',
    period: 'Ongoing',
    description:
      'Participated in and hosted multi-team hackathons, building prototype MERN/Python products under strict 24-hour sprints.',
  },
  {
    id: 'opensource',
    title: 'Open Source Contributor',
    organization: 'GitHub',
    period: 'Ongoing',
    description:
      'Contributing to open-source tools and maintaining public Git repositories validating clean-code engineering practices.',
  },
  {
    id: 'thp-scholar',
    title: 'Sindh Talent Hunt Program Scholar',
    organization: 'Sukkur IBA University',
    period: '2022',
    description:
      'Selected as a fully funded scholar in the prestigious Sindh Talent Hunt Program, demonstrating high academic and analytical merit.',
  },
  {
    id: 'pm-laptop',
    title: 'Prime Minister’s Laptop Scheme Recipient',
    organization: 'Government of Pakistan',
    period: '2023',
    description:
      'Awarded a high-performance laptop by the Prime Minister of Pakistan as recognition for maintaining top academic standing in the BS Computer Science cohort.',
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/KrishnaParhyar',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sri-krishna-devi-a39940281/',
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:srikrishnadevi47@gmail.com',
    icon: 'mail',
  },
];


