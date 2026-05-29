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

export const siteConfig: SiteConfig = {
  name: 'Sri Krishna Devi',
  role: 'Full Stack Developer | React & TypeScript',
  tagline:
    'Building responsive full-stack web apps with React, Node.js, and modern UI/UX — from database design to deployment, including AI-powered systems.',
  location: 'Karachi, Sindh, Pakistan',
  email: 'srikrishnadevi47@gmail.com',
  resumeUrl: '/Resume.pdf',
  profileImage,
  about: {
    paragraphs: [
      'Full Stack Developer and Computer Science graduate from Sukkur IBA University, specializing in responsive web applications with React.js, Node.js, and modern UI/UX practices.',
      'I deliver projects end-to-end — from database design to deployment — including AI-powered platforms and real-time applications.',
      'Experienced in leading technical communities and explaining complex ideas to both technical and non-technical audiences.',
    ],
    highlights: [
      'MERN & Python AI systems',
      'End-to-end project delivery',
      'Community & technical leadership',
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
    title: 'Frontend',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'React.js', level: 85 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 60 },
      { name: 'REST APIs', level: 65 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Vite', level: 80 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'sentiaware',
    title: 'SentiAware — AI-Powered Social Media Platform (FYP)',
    description:
      'Full-stack AI-moderated social platform with real-time toxic text rewriting and harmful image detection before publish.',
    problem:
      'Social platforms struggle to moderate toxic text and harmful images at scale without blocking legitimate content.',
    solution:
      'Built a MERN app with a Python microservice using Flan-T5 for text neutralization and EfficientNet-B3 + OCR for image moderation, deployed as a multimodal pipeline with Cloudinary and Brevo.',
    techStack: [
      'MERN',
      'Python',
      'Flan-T5',
      'EfficientNet-B3',
      'Cloudinary',
      'Brevo',
    ],
    features: [
      'Real-time toxic text rewrite (Flan-T5)',
      'Harmful image classification + OCR',
      'Multimodal moderation pipeline',
      'Cloud image storage & transactional email',
    ],
    githubUrl: 'https://github.com/KrishnaParhyar/Connectopia',
    liveUrl: '#',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
  },
  {
    id: 'movie-rec',
    title: 'Movie Recommendation System (AI-Based)',
    description:
      'Content-based filtering engine delivering personalized movie suggestions from 5,000+ titles via an interactive Flask UI.',
    problem:
      'Users face choice overload and weak relevance when browsing large movie catalogs.',
    solution:
      'Implemented TF-IDF vectorization and cosine similarity in Python with measurable gains in recommendation relevance and a Flask front end for real-time input.',
    techStack: ['Python', 'Machine Learning', 'Flask', 'TF-IDF'],
    features: [
      'Content-based filtering',
      '5,000+ movie dataset',
      'Cosine similarity matching',
      'Interactive Flask UI',
    ],
    githubUrl: 'https://github.com/KrishnaParhyar',
    liveUrl: '#',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
  },
  {
    id: 'anonymous-chat',
    title: 'Anonymous Chat Application',
    description:
      'Privacy-first real-time chat with sub-100ms delivery and zero personally identifiable data exposure.',
    problem:
      'Users need fast, private one-to-one messaging without accounts or identity leakage.',
    solution:
      'Built with React, Node.js, and Socket.io using session-based identity and a responsive mobile-first UI.',
    techStack: ['React.js', 'Node.js', 'Socket.io'],
    features: [
      'Sub-100ms message delivery',
      'Session-based anonymous identity',
      'Secure one-to-one messaging',
      'Mobile-first responsive design',
    ],
    githubUrl: 'https://github.com/KrishnaParhyar',
    liveUrl: '#',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  },
  {
    id: 'social-media',
    title: 'Social Media Web Application',
    description:
      'Full-stack social platform with JWT auth, posts, likes, comments, and real-time feed updates.',
    problem:
      'Building a scalable social feed with secure auth and relational data without constant page reloads.',
    solution:
      'Designed a normalized MySQL schema and REST API (10+ endpoints) with React state-driven feed updates eliminating full reloads.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
    features: [
      'JWT authentication & profiles',
      'Posts, likes & comments',
      '10+ REST API endpoints',
      'Real-time feed via React state',
    ],
    githubUrl: 'https://github.com/KrishnaParhyar/NA-IT',
    liveUrl: '#',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e039e967?w=800&q=80',
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
      'Driving AI adoption through digital campaigns and educational content on agentic AI tools.',
    highlights: [
      'Grew community engagement across social platforms through targeted campaigns',
      'Created educational content reaching 200+ professionals and students monthly',
    ],
    technologies: ['Agentic AI', 'Digital Marketing', 'Community Building'],
  },
  {
    id: 'aicp',
    role: 'Regional Lead',
    company: 'Artificial Intelligence Community of Pakistan (AICP)',
    location: 'Sukkur',
    period: 'Mar 2025 — Present',
    description:
      'Leading regional AI community initiatives, workshops, and outreach for students across Sukkur.',
    highlights: [
      'Led 10+ hands-on workshops on AI and ML, impacting 500+ students',
      'Grew chapter membership by 30% through structured digital promotion',
    ],
    technologies: ['AI/ML', 'Workshop Facilitation', 'Community Outreach'],
  },
  {
    id: 'national-assembly',
    role: 'Legislative Intern',
    company: 'National Assembly of Pakistan',
    location: 'Islamabad',
    period: 'Jun 2025 — Aug 2025',
    description:
      'Policy research and legislative documentation support for parliamentary sessions.',
    highlights: [
      'Prepared structured legislative documentation under tight deadlines',
      'Synthesized findings from 20+ sources into briefs used in parliamentary sessions',
    ],
    technologies: ['Policy Research', 'Documentation', 'Analysis'],
  },
  {
    id: 'css-exec',
    role: 'Executive Committee Member',
    company: 'Computer Science Society, Sukkur IBA',
    location: 'Sukkur',
    period: 'Nov 2024 — Present',
    description:
      'Organizing technical events and managing society digital presence for CS students.',
    highlights: [
      'Organized 5+ large-scale technical events with 300+ student attendees',
      'Increased social media engagement by 25% through consistent content strategy',
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
      'Relevant coursework: Data Structures, Algorithms, DBMS, OOP, Software Engineering',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'fyp',
    title: 'Final Year Project — SentiAware',
    organization: 'Sukkur IBA University',
    period: '2026',
    description:
      'AI-moderated social media platform with Flan-T5 text moderation and EfficientNet-B3 image classification — full MERN + Python pipeline.',
  },
  {
    id: 'meta-fe',
    title: 'Meta Front-End Developer',
    organization: 'Meta (Coursera) — In Progress',
    period: '2025 — Present',
    description:
      'Professional certificate program covering React, UI/UX, and front-end development best practices.',
  },
  {
    id: 'fcc-rwd',
    title: 'Responsive Web Design',
    organization: 'freeCodeCamp',
    period: '2024',
    description:
      'Certification covering HTML, CSS, Flexbox, Grid, and responsive layout techniques.',
  },
  {
    id: 'hackathon',
    title: 'Hackathon Participant',
    organization: 'Tech Community Events',
    period: 'Ongoing',
    description:
      'Active participant in hackathons, building solutions under time constraints with collaborative teams.',
  },
  {
    id: 'opensource',
    title: 'Open Source Contributor',
    organization: 'GitHub',
    period: 'Ongoing',
    description:
      'Contributing to open-source projects and maintaining public repositories on GitHub.',
  },
  {
    id: 'ai-builder',
    title: 'AI Community Builder',
    organization: 'AICP & MindHYVE.ai',
    period: '2025 — Present',
    description:
      'Building AI literacy through workshops, ambassador programs, and student outreach across Pakistan.',
  },
  {
    id: 'languages',
    title: 'Multilingual',
    organization: 'Communication',
    period: '—',
    description:
      'English (Professional), Urdu (Native), Sindhi (Native) — comfortable with technical and non-technical audiences.',
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
