import { Globe, Terminal, Database,} from "lucide-react";

// ─── Personal Info ────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: "Kaizer Klent Auceran",
  title: "Backend Developer & Mobile App Builder",
  tagline: "I craft scalable systems and delightful interfaces.",
  bio: "I'm a hardworking developer who loves creating small projects and building mobile applications using React Native. I work with React JS, Next.js, Firebase, and MSSQL to bring ideas to life — currently completing my 4-year internship and finishing college.",
  location: "Panacan, Davao City, Philippines",
  email: "kaizerklentauceran@gmail.com",
  phone: "TM: +63 997 416 4343 / TNT: +63 981 167 7513",
  facebook: "facebook.com/kaizer.klent.cagampang.auceran",
  github: "github.com/kaizerklent",
  linkedin: "linkedin.com/in/kaizer-klent-auceran-2b75b83b9/",
  available: false,
  experience: "Intern",
  projects: "6",
  certifications: "TBD",
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Skills", "Projects", "Certificates", "Contact"];

// ─── Skills ───────────────────────────────────────────────────────────────────
// TODO Phase 2: Replace with your actual tech stack
export const SKILLS = [
  {
    category: "Frontend",
    icon: Globe,
    items: ["HTML", "CSS", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "#00e5ff",
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Node.js", "Python", "REST APIs",],
    color: "#b388ff",
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MSSQL", "Firebase",],
    color: "#69ff47",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
// TODO Phase 3: Replace with your real projects
export const PROJECTS = [
  {
    title: "TruckAlert",
    description:
      "IOT-Driven Blind Spot Detection and Alert System for Large Vehicle. A real-time safety solution using ultrasonic sensors and AI to prevent accidents and save lives.",
    tags: ["Java", "COCO dataset", "Arduino", "Efficient_lite1"],
    live: "https://neuraldash.io",
    github: "https://github.com/ReyySensei/TruckAlert.git",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-600/20",
    accent: "#00e5ff",
  },
  {
    title: "TravelSafe",
    description:
      "A mobile application designed to enhance travel safety by providing real-time update, booking features, sharing experiences and notes",
    tags: ["React native", "Node.js", "tailwindcss", "Firebase"],
    live: "https://flowform.app",
    github: "https://github.com/kaizerklent/TravelSafe.git",
    featured: true,
    gradient: "from-violet-500/20 to-purple-600/20",
    accent: "#b388ff",
  },
  {
    title: "Mojo Store",
    description:
      "A inventory management system for tracking and managing stock levels and orders.",
    tags: ["Java", "MSSQL"],
    live: null,
    github: "https://github.com/kaizerklent/MojoStore.git",
    featured: true,
    gradient: "from-emerald-500/20 to-green-600/20",
    accent: "#69ff47",
  },
  {
    title: "5th-CRG-IMS",
    description:
      "A web-based internal admin tool built for the 5th Civil Relations Group a military unit to manage their physical assets, borrowing activity, and vehicle fleet.",
    tags: ["Next.js", "Firebase", "tailwindcss", "typescript"],
    live: "https://pixelvault.xyz",
    github: "https://github.com/kaizerklent/5th-CRG-IMS.git",
    featured: false,
    gradient: "from-orange-500/20 to-red-600/20",
    accent: "#ffd740",
  },
  {
    title: "5thCRG Inventory Management System",
    description:
      "A web-based internal admin tool built for the 5th Civil Relations Group a military unit to manage their physical assets, borrowing activity, and vehicle fleet.",
    tags: ["Next.js", "Firebase", "tailwindcss", "typescript"],
    live: null,
    github: "https://github.com/kaizerklent/Inventory_System.git",
    featured: false,
    gradient: "from-pink-500/20 to-rose-600/20",
    accent: "#ff6090",
  },
  {
    title: "RecipeHub",
    description:
      "A collaborative recipe sharing platform with real-time editing, suggestions, and personalized meal planning features.",
    tags: ["Django", "Python", "db.sqllite3", "JavaScript", "HTML", "CSS"],
    live: "https://typist.dev",
    github: "https://github.com/kaizerklent/RecipeHub.git",
    featured: false,
    gradient: "from-sky-500/20 to-indigo-600/20",
    accent: "#40c4ff",
  },
];

// ─── Certificates ─────────────────────────────────────────────────────────────
// Place these PDF files inside your /public/certificates/ folder:
//   - cisco-english-it.pdf
//   - free-data-analyst.pdf
//   - advanced-python.pdf
//   - intro-sql-365.pdf
//   - sql-365datascience.pdf

export const CERTIFICATES = [
  {
    title: "English for IT: People and Quantities",
    issuer: "Cisco Networking Academy × OpenEDG",
    date: "Jun 05, 2026",
    expires: "Lifetime",
    credentialId: "—",
    color: "#00bceb",
    accent: "#00bceb",
    pdf: "/certificates/EnglishforITPeopleandQuantitiesv120260605-32-g2g7cs.pdf",
    category: "Language & Communication",
  },
  {
    title: "Free Data Analyst Course",
    issuer: "365 Data Science",
    date: "Mar 24, 2026",
    expires: "Lifetime",
    credentialId: "9997466",
    color: "#f97316",
    accent: "#f97316",
    pdf: "/certificates/9997466_7715277_1774330973432.pdf",
    category: "Data & Analytics",
  },
  {
    title: "Advanced Python",
    issuer: "365 Data Science",
    date: "Apr 21, 2026",
    expires: "Lifetime",
    credentialId: "10134116",
    color: "#a78bfa",
    accent: "#a78bfa",
    pdf: "/certificates/10134116_7715277_1776744485776.pdf",
    category: "Programming",
  },
  {
    title: "Introduction to SQL",
    issuer: "365 Data Science",
    date: "Jun 03, 2026",
    expires: "Lifetime",
    credentialId: "10303773",
    color: "#34d399",
    accent: "#34d399",
    pdf: "/certificates/10303773_7715277_1780524353486.pdf",
    category: "Database",
  },
  {
    title: "SQL",
    issuer: "365 Data Science",
    date: "Nov 07, 2024",
    expires: "Lifetime",
    credentialId: "CC-0B7723BA97",
    color: "#fbbf24",
    accent: "#fbbf24",
    pdf: "/certificates/CC-0B7723BA97.pdf",
    category: "Database",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
// TODO Phase 2: Replace with your real experience
export const EXPERIENCE = [
  {
    role: "Fullstack Developer",
    company: "5th Civil Relations Group",
    period: "2026 – Present",
    desc: "A web-based internal admin tool built for the 5th Civil Relations Group a military unit to manage their physical assets, borrowing activity, and vehicle fleet.",
  },
  {
    role: "Backend Developer",
    company: "Holy Cross of Davao College",
    period: "2025 - 2026",
    desc: "School Capstone project and an IOT project for the Drivers",
  },
  {
    role: "Fullstack Developer",
    company: "Holy Cross of Davao College",
    period: "2022 - 2026",
    desc: "School projects and Self learning projects.",
  },
];