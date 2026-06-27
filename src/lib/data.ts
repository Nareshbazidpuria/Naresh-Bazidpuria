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
    "I build fast, scalable full stack applications — and lead the teams that ship them.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 1, suffix: "", label: "Role as Tech Lead" },
];

export const beliefs = [
  "Clean architecture over clever hacks",
  "Readable code that teams can maintain",
  "Shipping with confidence, not just speed",
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
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects and skills, built with React. Clean component architecture, responsive design, and smooth interactions that reflect engineering craft.",
    tech: ["React", "JavaScript", "CSS", "GitHub Pages"],
    github: "https://github.com/Nareshbazidpuria/NB-React",
    live: "https://nareshbazidpuria.github.io/NB-React/",
    gradient: "from-sky-500/20 to-indigo-600/10",
  },
];

export const experience = [
  {
    role: "Tech Lead — Full Stack",
    period: "Current",
    description:
      "Leading full stack development with the MERN stack. Driving architecture decisions, code reviews, and team coordination to deliver production-grade features on schedule.",
    highlights: ["MERN Stack", "Architecture", "Team Leadership"],
  },
  {
    role: "Full Stack Developer",
    period: "Previous",
    description:
      "Built and maintained web applications using React, Node.js, and MongoDB. Designed RESTful APIs, optimized database queries, and shipped features end-to-end.",
    highlights: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    role: "React Native Developer",
    period: "Previous",
    description:
      "Developed cross-platform mobile applications for iOS and Android. Focused on performance, native-feeling UX, and reliable state management across devices.",
    highlights: ["React Native", "Mobile", "Cross-platform"],
  },
];
