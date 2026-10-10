export const projects = [
  {
    slug: "disaster-response",
    device: "mobile",
    name: "Disaster Response System",
    category: "Android app",
    year: "2025",
    word: "respond",
    color: "#788e6c",
    ink: "#f2efe4",
    description:
      "A real-time Firebase backend for concurrent volunteer coordination, with role-based dashboards for volunteers and coordinators.",
    overview:
      "An Android app for coordinating volunteers during disaster response, with separate dashboards for volunteers and coordinators and a real-time backend built for time-sensitive incident reporting.",
    tech: ["Java", "Firebase Authentication", "Firebase Realtime Database", "Firebase Storage", "Android Studio"],
    features: [
      "Real-time data sync between volunteers and coordinators",
      "Secure sign-in with Firebase Authentication",
      "Role-based access control for volunteers and coordinators",
      "Incident reporting designed for fast, time-sensitive decisions",
      "Cloud storage through Firebase Storage",
    ],
    highlights: [
      "Backend handled concurrent volunteer coordination with zero downtime in load testing",
      "Designed role-based access control around the two user roles",
      "Dashboards prioritise clarity so decisions can be made quickly",
    ],
    role: {
      title: "Android Developer & Backend Architect",
      items: [
        "Architected the Firebase backend (Authentication, Realtime Database, Storage)",
        "Designed the role-based access control",
        "Built the Android dashboards for volunteers and coordinators",
        "Load tested the backend for concurrent use",
      ],
    },
    screenshots: [
      "/images/disaster-response/1.png",
      "/images/disaster-response/2.png",
      "/images/disaster-response/3.png",
    ],
    github: "https://github.com/KULANEAisha/Disaster-Response-Volunteer-System",
    demo: "",
  },
  {
    slug: "peekevent",
    device: "mobile",
    name: "PeekEvent",
    category: "Mobile app",
    year: "2025",
    word: "gather",
    color: "#e3c673",
    ink: "#1a1a18",
    description:
      "A mobile-first local event discovery app with smart filtering, RSVP tracking and ride-share coordination.",
    overview:
      "A mobile-first event discovery and promotion app. Organizers can create events easily, and attendees can discover, filter and RSVP to events near them.",
    tech: ["Android (Java)", "Firebase Authentication", "Firebase Realtime Database"],
    features: [
      "Easy event creation for organizers",
      "Smart filtering to discover events",
      "RSVP tracking",
      "“Tukutane Zone” for ride-share coordination between attendees",
      "Sign-in with Firebase Authentication",
    ],
    highlights: [
      "Streamlined the browse-to-RSVP flow, reducing the steps needed to confirm attendance",
      "Designed mobile-first for quick use on the go",
    ],
    role: {
      title: "Designer & Android Developer",
      items: [
        "Designed the flows for organizers and attendees",
        "Built the Android app in Java",
        "Integrated Firebase Authentication and Realtime Database",
        "Simplified the browse-to-RSVP experience",
      ],
    },
    screenshots: [
      "/images/peekevent/1.png",
      "/images/peekevent/2.png",
      "/images/peekevent/3.png",
    ],
    github: "https://github.com/KULANEAisha/PeekEvent-A-local-Event-Promotion-App",
    demo: "",
  },
  {
    slug: "course-advising",
    device: "web",
    name: "Course Advising Expert System",
    category: "Web app",
    year: "2025",
    word: "advise",
    color: "#2a3158",
    ink: "#f0d9e4",
    description:
      "A Flask web app that recommends courses using two cross-checked engines: rule-based and decision tree.",
    overview:
      "A web app that recommends courses to students based on the courses they've completed, their interests and their GPA.",
    tech: ["Python", "Flask", "REST API"],
    features: [
      "Two recommendation engines, rule-based and decision tree, that cross-check each other",
      "Recommendations based on completed courses, interests and GPA",
      "Live REST-powered course popovers, so students explore results without leaving the page",
    ],
    highlights: [
      "Cross-checked two different engines to make recommendations more reliable",
      "Used REST calls to load course details on demand",
    ],
    role: {
      title: "Developer",
      items: [
        "Built the Flask web application",
        "Implemented the rule-based and decision-tree engines",
        "Added the REST-powered course popovers",
      ],
    },
    screenshots: [
      "/images/course-advising/1.png",
      "/images/course-advising/2.png",
      "/images/course-advising/3.png",
    ],
    github: "https://github.com/KULANEAisha/Rule-Based-Expert-System-for-Student-Course-Advising",
    demo: "",
  },
  {
    slug: "lost-and-found",
    device: "web",
    name: "USIU Lost & Found",
    category: "Full-stack web app",
    year: "2025",
    word: "found",
    color: "#d9a7a0",
    ink: "#1a1a18",
    description:
      "A deployed full-stack app with secure authentication and a search and tagging system for lost items.",
    overview:
      "A full-stack web app that helps people find lost items on campus, with secure accounts and a search and tagging system that makes items easier to find.",
    tech: ["Node.js", "MySQL", "JavaScript"],
    features: [
      "Secure authentication",
      "Input validation on submitted data",
      "Search and tagging system for faster item lookup",
    ],
    highlights: [
      "The search and tagging system improved how easily items could be found",
      "Built and deployed end to end",
    ],
    role: {
      title: "Full-Stack Developer",
      items: [
        "Built the front end and the Node.js backend",
        "Designed the MySQL data model",
        "Implemented secure authentication and input validation",
        "Designed the search and tagging system",
      ],
    },
    screenshots: [
      "/images/lost-and-found/1.png",
      "/images/lost-and-found/2.png",
      "/images/lost-and-found/3.png",
    ],
    github: "https://github.com/KULANEAisha/USIU-Lost-And-found-Webapp",
    demo: "",
  },
  {
    slug: "portfolio",
    device: "web",
    name: "Personal Portfolio",
    category: "Web",
    year: "2026",
    word: "hello",
    color: "#d16545",
    ink: "#1a1a18",
    description:
      "This site: a responsive React portfolio with dark mode and animations, auto-deployed on Netlify through GitHub.",
    overview:
      "My personal portfolio, designed in an editorial style and built with React. It's deployed automatically on Netlify every time I push to GitHub.",
    tech: ["React", "Vite", "Framer Motion", "Netlify", "GitHub"],
    features: [
      "Responsive layout for phones, tablets and desktops",
      "Light and dark mode that remembers the visitor's choice",
      "Scroll-triggered animations",
      "Downloadable resume",
    ],
    highlights: [
      "Content lives in data files, so updating the site means editing text, not layout code",
      "Continuous deployment: every push to GitHub rebuilds the live site on Netlify",
    ],
    role: {
      title: "Designer & Developer",
      items: [
        "Designed the layout, colors and typography",
        "Built every component in React",
        "Set up the GitHub to Netlify deployment pipeline",
      ],
    },
    screenshots: [
      "/images/portfolio/1.png",
      "/images/portfolio/2.png",
    ],
    github: "https://github.com/KULANEAisha/aisha-portfolio",
    demo: "https://aishakulane.netlify.app",
  },
];