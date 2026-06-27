export const siteConfig = {
  name: "Naresh Bazidpuria",
  title: "Naresh Bazidpuria — Full Stack Engineer & Tech Lead",
  description:
    "Full Stack Engineer and Tech Lead based in Mohali / Chandigarh, India. Building fast, scalable MERN applications and leading teams that ship with confidence.",
  location: "Mohali / Chandigarh, India",
  email: "nareshbazidpuria@gmail.com",
  linkedin: "https://www.linkedin.com/in/naresh-bazidpuria-a8a45a1a2/",
  github: "https://github.com/Nareshbazidpuria",
  roles: [
    "Full Stack Engineer",
    "Tech Lead",
    "MERN Specialist",
    "React Native Developer",
  ],
  tagline:
    "I specialize in bridging frontend polish with backend reliability — building production-grade MERN applications, leading engineering teams, and shipping features that scale.",
  available: true,
  availabilityLabel: "Available for Senior Roles",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const heroHeadline = [
  "I architect",
  "high-performance",
  "full stack applications.",
];

export const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Projects Shipped",
    href: "#projects",
    cta: "View Featured Work",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years Exp.",
    href: "#experience",
    cta: "View Career Path",
  },
  {
    value: 1,
    suffix: "",
    label: "Tech Lead Role",
    href: "#experience",
    cta: "View Leadership",
  },
  {
    value: 5,
    suffix: "+",
    label: "Stack Domains",
    href: "#expertise",
    cta: "View Expertise",
  },
];

export const beliefs = [
  "Clean architecture over clever hacks",
  "Readable code that teams can maintain",
  "Shipping with confidence, not just speed",
];

export const technicalArsenal = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "React Native",
  "Expo",
  "Python",
  "Redis",
  "Docker",
  "AWS",
  "Git",
  "REST APIs",
  "Tailwind CSS",
];

export const expertiseAreas = [
  {
    title: "Full Stack MERN",
    description:
      "Architecting scalable web applications from database to UI using React, Node.js, Express, and MongoDB with modular, maintainable code.",
    icon: "layers",
  },
  {
    title: "React Native Mobile",
    description:
      "Building cross-platform iOS and Android apps with native-feeling UX, offline persistence, and reliable state management.",
    icon: "smartphone",
  },
  {
    title: "TypeScript Architecture",
    description:
      "Designing type-safe codebases with strict interfaces, shared types, and patterns that scale cleanly across teams.",
    icon: "code",
  },
  {
    title: "REST API Design",
    description:
      "Production-grade endpoints with validation, authentication, error handling, and documentation teams can rely on.",
    icon: "api",
  },
  {
    title: "Database Engineering",
    description:
      "Schema design, query optimization, and caching strategies across MongoDB, PostgreSQL, and Redis.",
    icon: "database",
  },
  {
    title: "Team Leadership",
    description:
      "Driving architecture decisions, code reviews, sprint planning, and mentoring developers to ship on schedule.",
    icon: "users",
  },
  {
    title: "Performance Tuning",
    description:
      "Eliminating bottlenecks through bundle optimization, lazy loading, query tuning, and strategic caching.",
    icon: "zap",
  },
  {
    title: "DevOps & Deployment",
    description:
      "Containerized deployments, CI/CD pipelines, and cloud infrastructure on AWS for reliable production releases.",
    icon: "cloud",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "REST APIs", icon: "api" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
      { name: "Cross-platform", icon: "mobile" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
    ],
  },
];

export const projects = [
  {
    name: "Expense Manager Mobile",
    description:
      "Cross-platform expense tracking app built with React Native. Features category-based budgeting, transaction history, and offline-first data persistence for everyday financial management.",
    tech: ["React Native", "TypeScript", "AsyncStorage", "Expo"],
    github: "https://github.com/Nareshbazidpuria/ExpenseManagerMobile",
    live: null,
    gradient: "from-cyan-500/20 to-blue-600/10",
    caseStudy: {
      role: "Full Stack / Mobile Developer",
      duration: "Personal Project",
      overview:
        "A production-ready mobile app for personal finance tracking with offline-first architecture and intuitive category management.",
      challenges: [
        "Designing reliable offline sync with AsyncStorage",
        "Building responsive UI that feels native on both platforms",
        "Managing complex transaction state across categories",
      ],
      outcomes: [
        "Fully functional cross-platform app on iOS and Android",
        "Offline-first data persistence with zero data loss",
        "Clean component architecture ready for team scaling",
      ],
      stack: ["React Native", "TypeScript", "Expo", "AsyncStorage"],
    },
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects and skills, built with React. Clean component architecture, responsive design, and smooth interactions that reflect engineering craft.",
    tech: ["React", "JavaScript", "CSS", "GitHub Pages"],
    github: "https://github.com/Nareshbazidpuria/NB-React",
    live: "https://nareshbazidpuria.github.io/NB-React/",
    gradient: "from-sky-500/20 to-indigo-600/10",
    caseStudy: {
      role: "Frontend Developer",
      duration: "Personal Project",
      overview:
        "A polished developer portfolio deployed on GitHub Pages — designed to showcase projects, skills, and professional identity.",
      challenges: [
        "Creating smooth scroll animations without heavy libraries",
        "Ensuring responsive design across all device sizes",
        "Optimizing static deployment on GitHub Pages",
      ],
      outcomes: [
        "Live portfolio with professional presentation",
        "Reusable component patterns for future projects",
        "Foundation evolved into this Next.js upgrade",
      ],
      stack: ["React", "JavaScript", "CSS", "GitHub Pages"],
    },
  },
];

export const experience = [
  {
    role: "Tech Lead — Full Stack",
    company: "Current Role",
    period: "Present",
    description:
      "Leading full stack development with the MERN stack. Driving architecture decisions, code reviews, and team coordination to deliver production-grade features on schedule.",
    highlights: ["MERN Stack", "Architecture", "Team Leadership"],
  },
  {
    role: "Full Stack Developer",
    company: "Previous Role",
    period: "Earlier",
    description:
      "Built and maintained web applications using React, Node.js, and MongoDB. Designed RESTful APIs, optimized database queries, and shipped features end-to-end.",
    highlights: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    role: "Node.js Developer",
    company: "Previous Role",
    period: "Earlier",
    description: "Built and maintained web applications using Node.js and Express. Designed RESTful APIs, optimized database queries, and shipped features end-to-end.",
    highlights: ["Node.js", "Express", "REST APIs"],
  },
];

export const inquiryTypes = [
  "Hire for Full-Time Role",
  "Freelance / Contract Project",
  "Architecture Consulting",
  "Performance Optimization",
  "Code Review & Audit",
  "Other",
];

export const contactTrustSignals = [
  "Reply within 24–48h",
  "Direct email follow-up",
  "No spam — ever",
];
