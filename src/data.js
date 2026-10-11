export const profile = {
  name: "Aisha Kulane",
  firstName: "Aisha",
  lastName: "Kulane",
  role: "Frontend Developer & Product Designer",
  intro:
    "Cum Laude Software Engineering graduate who both designs and builds. I create accessible, user-centered interfaces in Figma and ship them in React, Node.js and Firebase for East African users.",
  location: "Nairobi · Kenya",
  tags: "Frontend / Design / Cloud",
   about:
    "I'm a Software Engineering graduate with Cum Laude honors, passionate about product design and frontend development. I combine creativity with technical problem-solving to design intuitive interfaces and build responsive, user-centered digital experiences. I enjoy turning ideas into functional products that look great, feel effortless to use, and solve real-world problems.",
  languages: "Swahili, English, Somali (fluent) · Arabic (conversational)",
  github: "https://github.com/KULANEAisha",
  linkedin: "https://www.linkedin.com/in/aisha-kulane-b4b14a2a1",
  email: "aishakulane01@gmail.com",
  resume: "/Aisha_Kulane_Resume.pdf",
};

export const stats = [
  { value: 1, suffix: "+", label: "Year of Experience" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 500, suffix: "+", label: "Hours Worked" },
];

export const skills = {
  "Product & UI/UX Design": [
    "Figma",
    "Wireframing & prototyping",
    "Design systems",
    "User research",
    "Usability testing",
    "Accessibility",
    "Developer handoff",
  ],
  Frontend: [
    "JavaScript",
    "React.js",
    "HTML5 & CSS3",
    "Responsive design",
    "REST APIs",
    "Android (Java)",
  ],
  "Backend & Data": [
    "Node.js",
    "Flask",
    "Python",
    "SQL & MySQL",
    "MongoDB",
    "Firebase",
  ],
  "Cloud & Tooling": [
    "Git & GitHub",
    "Google Cloud",
    "Microsoft Azure",
    "Bash",
    "CI/CD",
    "Java & C++",
  ],
};

export const projects = [
  {
    name: "Disaster Response System",
    category: "Android app",
    year: "2025",
    word: "respond",
    color: "#788e6c",
    ink: "#f2efe4",
    description:
      "A real-time Firebase backend (Authentication, Realtime Database, Storage) for concurrent volunteer coordination, with zero downtime in load testing. Includes role-based access control and Android dashboards built for fast decisions during incident reporting.",
    tech: ["Java", "Firebase", "Android Studio"],
    github: "https://github.com/KULANEAisha",
    demo: "",
    image: "",
  },
  {
    name: "PeekEvent",
    category: "Mobile app",
    year: "2025",
    word: "gather",
    color: "#e3c673",
    ink: "#1a1a18",
    description:
      "A mobile-first local event discovery app: easy event creation for organizers, smart filtering, RSVP tracking and a “Tukutane Zone” for ride-share coordination. Streamlined the browse-to-RSVP flow to reduce steps to confirm attendance.",
    tech: ["Android (Java)", "Firebase"],
    github: "https://github.com/KULANEAisha",
    demo: "",
    image: "",
  },
  {
    name: "Course Advising Expert System",
    category: "Web app",
    year: "2025",
    word: "advise",
    color: "#2a3158",
    ink: "#f0d9e4",
    description:
      "A Flask web app that recommends courses using two cross-checked engines (rule-based and decision tree) based on completed courses, interests and GPA, with live REST-powered course popovers.",
    tech: ["Python", "Flask", "REST API"],
    github: "https://github.com/KULANEAisha",
    demo: "",
    image: "",
  },
  {
    name: "USIU Lost & Found",
    category: "Full-stack web app",
    year: "2025",
    word: "found",
    color: "#d9a7a0",
    ink: "#1a1a18",
    description:
      "A deployed full-stack app with secure authentication and input validation, plus a search and tagging system that improved item findability.",
    tech: ["Node.js", "MySQL", "JavaScript"],
    github: "https://github.com/KULANEAisha",
    demo: "",
    image: "",
  },
  {
    name: "Personal Portfolio",
    category: "Web",
    year: "2026",
    word: "hello",
    color: "#d16545",
    ink: "#1a1a18",
    description:
      "This site: a responsive React portfolio with dark mode and animations, auto-deployed on Netlify through GitHub.",
    tech: ["React", "Vite", "Netlify"],
    github: "https://github.com/KULANEAisha/aisha-portfolio",
    demo: "https://aishakulane.netlify.app",
    image: "",
  },
];

export const experience = [
  {
    role: "UI/UX Intern",
    org: "Konvergenz Network Solutions",
    period: "Jan 2026 – Apr 2026",
    location: "Nairobi, Kenya",
    points: [
      "Led end-to-end design (research, wireframes, prototypes, usability testing, iteration) of an Oncology Module in Figma, working with clinical and engineering teams to deliver a production-ready interface.",
      "Contributed to the Afya Yangu digital health platform redesign, applying brand colors and designing empty states that improved visual consistency and reduced user confusion across key flows.",
      "Built reusable components with Figma auto-layout and variants for scalable design systems, applying accessibility fundamentals (contrast, tap targets).",
      "Worked alongside the DevOps team (CI/CD, monitoring, cloud infrastructure) to design with implementation feasibility in mind.",
    ],
    projects: ["Afya Yangu Oncology Module", "Afya Yangu platform redesign"],
    tags: ["Figma", "Prototyping", "Design systems", "Usability testing", "Accessibility", "Developer handoff"],
  },
];



export const activities = [
  {
    role: "Mentee",
    org: "Meta Mentors Program",
    period: "May 2026 – Present",
    text: "Selected for one-on-one mentorship with a Meta employee on career strategy, professional readiness and international graduate opportunities.",
  },
  {
    role: "Student Ambassador",
    org: "IEEE IES East Africa Industrial Innovation Summit",
    period: "Apr 2026 – May 2026",
    text: "Promoted the summit on social media and in person, driving awareness within the university community and beyond.",
  },
  {
    role: "Member",
    org: "AI Hackathon & Academic Trip Committee",
    period: "Oct 2025 – Sept 2026",
    text: "Supported planning, coordination and on-site execution of AI hackathons and academic trips.",
  },
  {
    role: "Coordinator",
    org: "USIU Student Ambassador",
    period: "Sept 2025 – Jan 2026",
    text: "Volunteered leadership and service during school engagements.",
  },
];

export const education = {
  degree: "BSc Software Engineering",
  school: "United States International University Africa (USIU-A)",
  period: "Sept 2026",
  honors: "Cum Laude · Dean's List 2024 & 2025",
  coursework:
    "Software Design & Architecture, Applied Machine Learning, Artificial Intelligence, Data Structures & Algorithms",
};

export const stack = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Framer Motion", icon: "framermotion" },
      { name: "Vite", icon: "vitejs" },
      { name: "Android", icon: "android" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "Flask", icon: "flask", mono: true },
      { name: "Java", icon: "java" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Cloud",
    items: [
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "Microsoft Azure", icon: "azure" },
      { name: "CI/CD", icon: "githubactions" },
    ],
  },
  {
    title: "Design & Tools",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", mono: true },
      { name: "VS Code", icon: "vscode" },
      { name: "Netlify", icon: "netlify" },
      { name: "Postman", icon: "postman" },
      { name: "Bash", icon: "bash" },
    ],
  },
];