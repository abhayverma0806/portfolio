import type { Project, SkillCategory, Certification, Education, Achievement, CommunityWork, Training } from '../types/portfolio';

export const personalInfo = {
  name: "Abhay Verma",
  role: "Computer Science & Engineering Student | Full-Stack Developer | AI Enthusiast",
  shortIntro: "Hi, I'm Abhay Verma — a Computer Science & Engineering student passionate about building AI-powered applications and modern web experiences.",
  mainHeading: "Building thoughtful software with code, AI & creativity.",
  badge: "Available for opportunities • 2026",
  email: "abhayverma0806@gmail.com",
  phone: "+91 63870071761",
  linkedIn: "http://www.linkedin.com/in/abhay-verma-a9367337a",
  github: "https://github.com/abhayverma0806",
  university: "Lovely Professional University",
  degree: "B.Tech Computer Science & Engineering",
  cgpa: "9.12",
  aboutBio: "I am a B.Tech Computer Science & Engineering student at Lovely Professional University maintaining a 9.12 CGPA. I have practical experience building web applications and an active focus on AI-powered software. With a strong foundation in programming, data structures, algorithms, and database management, I enjoy solving complex technical problems and engineering clean, user-centric software solutions.",
  stats: [
    { label: "CGPA", value: "9.12", desc: "Lovely Professional University" },
    { label: "Featured Projects", value: "2", desc: "AI & Full-Stack Applications" },
    { label: "People Reached", value: "800+", desc: "Through Community Drives" },
    { label: "University Hackathon", value: "Top 20", desc: "Out of 800 Participants" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "study-ai",
    title: "studyAI",
    subtitle: "AI-Powered Study Companion",
    date: "June 2026",
    category: "AI & Interactive Learning",
    description: "An AI-powered study platform built for interactive learning through AI explanations, summaries, quizzes, and chat.",
    features: [
      "AI explanations & concept simplification",
      "Automated study material summaries",
      "Interactive quiz generation from study notes",
      "Real-time AI study chat assistant",
      "PDF-based context processing",
      "Interaction with uploaded study materials",
      "High-speed Groq API integration"
    ],
    techStack: ["React", "Vite", "JavaScript", "Groq API"],
    githubUrl: "https://github.com/abhayverma0806/studyAI",
    liveDemoUrl: "https://study-ai-demo.vercel.app",
    featured: true
  },
  {
    id: "rescue-core",
    title: "RescueCore",
    subtitle: "Emergency Response & Volunteer Coordination Platform",
    date: "April 2026",
    category: "Full Stack & Geospatial",
    description: "A web platform for coordinating emergency-response tasks, volunteers, and incident activities through a centralized dashboard.",
    features: [
      "Emergency task creation & assignment",
      "Real-time task search & filtering",
      "Status tracking & progress updates",
      "Volunteer coordination & management",
      "Emergency task & geospatial incident visualization",
      "Geospatial emergency dashboard with Leaflet",
      "Role-based admin functionality & authentication",
      "Real-time dispatch notifications"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Leaflet"],
    githubUrl: "https://github.com/abhayverma0806/RescueCore",
    liveDemoUrl: "https://rescue-core-demo.vercel.app",
    featured: true
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Proficient" },
      { name: "C++", level: "Proficient" },
      { name: "Java", level: "Proficient" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "NumPy", level: "Proficient" },
      { name: "Pandas", level: "Proficient" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" }
    ]
  },
  {
    title: "Coursework",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Database Management Systems" }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Technical Communication" },
      { name: "Critical Thinking" },
      { name: "Adaptability" }
    ]
  }
];

export const trainingData: Training = {
  title: "Computer Programming",
  period: "January 2026 – May 2026",
  hours: 150,
  topics: [
    "Programming Fundamentals",
    "Logical Problem-Solving",
    "Practical Coding Implementation",
    "Data Structures & Algorithms"
  ]
};

export const certificationsData: Certification[] = [
  {
    id: "nasa-remote-sensing",
    title: "Fundamentals of Remote Sensing",
    issuer: "NASA",
    date: "August 2026"
  },
  {
    id: "infosys-cybersecurity",
    title: "Cyber Security",
    issuer: "Infosys Springboard",
    date: "March 2026"
  },
  {
    id: "google-genai",
    title: "Generative AI Studio",
    issuer: "Simplilearn & Google Cloud",
    date: "February 2026"
  },
  {
    id: "board-infinity-ds",
    title: "Data Science",
    issuer: "Board Infinity",
    date: "January 2026"
  }
];

export const achievementData: Achievement = {
  title: "Top 20 — Web-a-Thon 2.0",
  subtitle: "University Hackathon",
  date: "February 2026",
  project: "HomeServiceHub",
  description: "Built HomeServiceHub, an Urban Company-inspired web platform connecting users with home-service providers.",
  metric: "TOP 20 / 800",
  highlight: "Selected in Top 20 out of 800 total hackathon participants for engineering quality and project execution."
};

export const communityData: CommunityWork = {
  role: "Community Volunteer",
  organization: "Sehar Foundation",
  period: "June 2026 – August 2026",
  drives: [
    "Blood Donation Drive",
    "Eye Check-up Camp",
    "General Health Check-up Camp",
    "Cleanliness Drive"
  ],
  impactMetric: "800+",
  impactDescription: "Organized and coordinated 4 major community service drives benefiting 800+ community members."
};

export const educationData: Education[] = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering",
    period: "Aug 2025 – Jul 2029",
    grade: "CGPA: 9.12",
    location: "Phagwara, Punjab"
  },
  {
    institution: "Don Bosco School",
    degree: "Intermediate (12th)",
    period: "Apr 2023 – May 2024",
    grade: "75.8%",
    location: "Gorakhpur, Uttar Pradesh"
  },
  {
    institution: "RPM Academy",
    degree: "Matriculation (10th)",
    period: "Apr 2021 – May 2022",
    grade: "90.2%",
    location: "Gorakhpur, Uttar Pradesh"
  }
];
