import { Globe, Terminal, Database, Layers } from "lucide-react";

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
  projects: "10+",
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
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "#00e5ff",
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Node.js", "Python", "REST APIs"],
    color: "#b388ff",
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MSSQL"],
    color: "#69ff47",
  },
  {
    category: "Cloud & DevOps",
    icon: Layers,
    items: ["AWS", "Docker"],
    color: "#ffd740",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
// TODO Phase 3: Replace with your real projects
export const PROJECTS = [
  {
    title: "NeuralDash",
    description:
      "A real-time analytics platform powered by ML models. Processes 2M+ events/day with sub-50ms latency.",
    tags: ["Next.js", "Python", "ClickHouse", "Kafka", "Docker"],
    stars: 1240,
    live: "https://neuraldash.io",
    github: "https://github.com",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-600/20",
    accent: "#00e5ff",
  },
  {
    title: "FlowForm",
    description:
      "A drag-and-drop form builder with conditional logic, webhooks, and beautiful analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    stars: 892,
    live: "https://flowform.app",
    github: "https://github.com",
    featured: true,
    gradient: "from-violet-500/20 to-purple-600/20",
    accent: "#b388ff",
  },
  {
    title: "Cadence API",
    description:
      "Open-source rate-limiting and API gateway middleware. Supports token bucket, sliding window, and fixed window algorithms.",
    tags: ["Go", "Redis", "Docker", "gRPC"],
    stars: 2100,
    live: null,
    github: "https://github.com",
    featured: true,
    gradient: "from-emerald-500/20 to-green-600/20",
    accent: "#69ff47",
  },
  {
    title: "PixelVault",
    description:
      "NFT marketplace with lazy minting, IPFS storage, and gasless transactions.",
    tags: ["Next.js", "Solidity", "ethers.js", "IPFS"],
    stars: 456,
    live: "https://pixelvault.xyz",
    github: "https://github.com",
    featured: false,
    gradient: "from-orange-500/20 to-red-600/20",
    accent: "#ffd740",
  },
  {
    title: "TerraWatch",
    description:
      "Infrastructure monitoring tool that predicts cost overruns and security misconfigurations.",
    tags: ["Python", "AWS", "Terraform", "ML"],
    stars: 378,
    live: null,
    github: "https://github.com",
    featured: false,
    gradient: "from-pink-500/20 to-rose-600/20",
    accent: "#ff6090",
  },
  {
    title: "Typist",
    description:
      "A minimalist markdown editor with real-time collaboration, AI suggestions, and one-click publishing.",
    tags: ["React", "Y.js", "OpenAI", "Supabase"],
    stars: 612,
    live: "https://typist.dev",
    github: "https://github.com",
    featured: false,
    gradient: "from-sky-500/20 to-indigo-600/20",
    accent: "#40c4ff",
  },
];

// ─── Certificates ─────────────────────────────────────────────────────────────
// TODO Phase 4: Replace with your real certificates
export const CERTIFICATES = [
  {
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "Mar 2024",
    expires: "Mar 2027",
    credentialId: "AWS-SAP-0042891",
    color: "#ff9900",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "Jan 2024",
    expires: "Jan 2027",
    credentialId: "CKA-2400-099123",
    color: "#326ce5",
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "Nov 2023",
    expires: "Nov 2025",
    credentialId: "GCP-PDE-202311",
    color: "#4285f4",
  },
  {
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "Sep 2023",
    expires: "Sep 2025",
    credentialId: "HCTA-2300-7821",
    color: "#844fba",
  },
  {
    title: "MongoDB Professional Developer",
    issuer: "MongoDB University",
    date: "Jun 2023",
    expires: "Lifetime",
    credentialId: "MDB-PRO-78203",
    color: "#00ed64",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta / Coursera",
    date: "Feb 2023",
    expires: "Lifetime",
    credentialId: "META-FE-20230201",
    color: "#1877f2",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
// TODO Phase 2: Replace with your real experience
export const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Stripe",
    period: "2022 – Present",
    desc: "Architected payment infrastructure serving 15M+ daily transactions.",
  },
  {
    role: "Full-Stack Developer",
    company: "Vercel",
    period: "2020 – 2022",
    desc: "Built core features for the deployment platform used by 200k+ developers.",
  },
  {
    role: "Software Engineer",
    company: "Startup Studio",
    period: "2019 – 2020",
    desc: "Shipped 4 SaaS products from zero to revenue within 12 months.",
  },
];