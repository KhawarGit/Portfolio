// import { SiCloudflare, SiDocker, SiMeta, SiGoogle } from "react-icons/si";
// import type { IconType } from "react-icons";

// export interface Certification {
//   id: string;
//   title: string;
//   issuer: string;
//   description: string;

//   image: string;
//   credentialUrl: string;

//   issueDate: string;

//   featured?: boolean;
//   showOnHome?: boolean;

//   skills?: string[];
// }

// export interface CertificationCategory {
//   id: string;
//   title: string;
//   description?: string;
//   logo: IconType;

//   items: Certification[];
// }

// export const certificationCategories = [
//   {
//     id: "cloud",
//     title: "Cloud & DevOps",
//     description: "Cloud platforms, deployment and infrastructure",
//     logo: SiCloudflare,

//     items: [
//       {
//         id: "aws-dev",
//         title: "AWS Certified Developer",
//         issuer: "Amazon Web Services",
//         description: "Cloud-native apps development",
//         image: "/images/certifications/aws.png",
//         issueDate: "2025",
//         featured: true,
//         showOnHome: true,
//       },
//       {
//         id: "docker-essentials",
//         title: "Docker Essentials",
//         issuer: "Docker",
//         description: "Containerization and deployment",
//         image: "/images/certifications/docker.png",
//         issueDate: "2025",
//         showOnHome: true,
//       },
//     ],
//   },

//   {
//     id: "frontend",
//     title: "Frontend Engineering",
//     description: "Modern frontend technologies",
//     logo: SiMeta,

//     items: [
//       {
//         id: "meta-frontend",
//         title: "Meta Front-End Developer",
//         issuer: "Meta (Coursera)",
//         description: "React & modern frontend development",
//         image: "/images/certifications/meta.png",
//         issueDate: "2024",
//         featured: true,
//         showOnHome: true,
//       },
//       {
//         id: "google-ux",
//         title: "Google UX Design",
//         issuer: "Google",
//         description: "UI/UX fundamentals",
//         image: "/images/certifications/ux.png",
//         issueDate: "2024",
//         showOnHome: false,
//       },
//     ],
//   },
// ];


// import { SiCloudflare, SiDocker, SiMeta } from "react-icons/si";
// import type { IconType } from "react-icons";

// export interface Certification {
//   id: string;
//   title: string;
//   issuer: string;
//   description: string;

//   image: string;

//   issueDate: string;

//   credentialUrl?: string; // ✅ MAKE OPTIONAL (FIX ERROR)

//   featured?: boolean;
//   showOnHome?: boolean;

//   skills?: string[];
// }

// export interface CertificationCategory {
//   id: string;
//   title: string;
//   description?: string;
//   logo: IconType;

//   items: Certification[];
// }

// export const certificationCategories: CertificationCategory[] = [
//   {
//     id: "cloud",
//     title: "Cloud & DevOps",
//     description: "Cloud platforms, deployment and infrastructure",
//     logo: SiCloudflare,

//     items: [
//       {
//         id: "aws-dev",
//         title: "AWS Certified Developer",
//         issuer: "Amazon Web Services",
//         description: "Cloud-native apps development",
//         image: "/images/certifications/aws.png",
//         issueDate: "2025",
//         featured: true,
//         showOnHome: true,
//         skills: ["AWS", "Cloud"],
//       },
//       {
//         id: "docker-essentials",
//         title: "Docker Essentials",
//         issuer: "Docker",
//         description: "Containerization and deployment",
//         image: "/images/certifications/docker.png",
//         issueDate: "2025",
//         showOnHome: true,
//         skills: ["Docker", "DevOps"],
//       },
//     ],
//   },

//   {
//     id: "frontend",
//     title: "Frontend Engineering",
//     description: "Modern frontend technologies",
//     logo: SiMeta,

//     items: [
//       {
//         id: "meta-frontend",
//         title: "Meta Front-End Developer",
//         issuer: "Meta (Coursera)",
//         description: "React & modern frontend development",
//         image: "/images/certifications/meta.png",
//         issueDate: "2024",
//         featured: true,
//         showOnHome: true,
//         skills: ["React", "Frontend"],
//       },
//       {
//         id: "google-ux",
//         title: "Google UX Design",
//         issuer: "Google",
//         description: "UI/UX fundamentals",
//         image: "/images/certifications/ux.png",
//         issueDate: "2024",
//         showOnHome: false,
//         skills: ["UX", "Design"],
//       },
//     ],
//   },
// ];


// import {
//   SiCloudflare,
//   SiDocker,
//   SiMeta,
//   SiGoogle,
//   SiCisco,
//   SiKubernetes,
//   SiPython,
//   SiJavascript,
//   SiMysql,
// } from "react-icons/si";
// import { FaMicrosoft } from "react-icons/fa";
// import type { IconType } from "react-icons";

// export interface Certification {
//   id: string;
//   title: string;
//   issuer: string;
//   description: string;
//   image: string;
//   issueDate: string;
//   credentialUrl?: string;
//   featured?: boolean;
//   showOnHome?: boolean;
//   skills?: string[];
// }

// export interface CertificationCategory {
//   id: string;
//   title: string;
//   description?: string;
//   logo: IconType;
//   items: Certification[];
// }

// export const certificationCategories: CertificationCategory[] = [
//   /* ================= CLOUD ================= */
//   {
//     id: "cloud",
//     title: "Cloud & DevOps",
//     description: "Cloud platforms, deployment and infrastructure",
//     logo: SiCloudflare,

//     items: [
//       {
//         id: "aws-dev",
//         title: "AWS Certified Developer",
//         issuer: "Amazon Web Services",
//         description: "Cloud-native apps development",
//         image: "/images/certifications/aws.png",
//         issueDate: "2025",
//         featured: true,
//         showOnHome: true,
//         skills: ["AWS", "Cloud"],
//       },
//       {
//         id: "docker-essentials",
//         title: "Docker Essentials",
//         issuer: "Docker",
//         description: "Containerization and deployment",
//         image: "/images/certifications/docker.png",
//         issueDate: "2025",
//         showOnHome: true,
//         skills: ["Docker", "DevOps"],
//       },
//       {
//         id: "kubernetes",
//         title: "Kubernetes Fundamentals",
//         issuer: "Linux Foundation",
//         description: "Deploying and managing Kubernetes clusters",
//         image: "/images/certifications/kubernetes.png",
//         issueDate: "2025",
//         showOnHome: false,
//         skills: ["Kubernetes", "Containers"],
//       },
//     ],
//   },

//   /* ================= FRONTEND ================= */
//   {
//     id: "frontend",
//     title: "Frontend Engineering",
//     description: "Modern frontend technologies",
//     logo: SiMeta,

//     items: [
//       {
//         id: "meta-frontend",
//         title: "Meta Front-End Developer",
//         issuer: "Meta (Coursera)",
//         description: "React & modern frontend development",
//         image: "/images/certifications/meta.png",
//         issueDate: "2024",
//         featured: true,
//         showOnHome: true,
//         skills: ["React", "Frontend"],
//       },
//       {
//         id: "google-ux",
//         title: "Google UX Design",
//         issuer: "Google",
//         description: "UI/UX fundamentals",
//         image: "/images/certifications/ux.png",
//         issueDate: "2024",
//         showOnHome: false,
//         skills: ["UX", "Design"],
//       },
//       {
//         id: "advanced-react",
//         title: "Advanced React",
//         issuer: "Meta",
//         description: "Hooks, performance optimization and testing",
//         image: "/images/certifications/react.png",
//         issueDate: "2025",
//         showOnHome: true,
//         skills: ["React", "TypeScript"],
//       },
//     ],
//   },

//   /* ================= GOOGLE ================= */
//   {
//     id: "google",
//     title: "Google Certifications",
//     description: "Google professional certifications",
//     logo: SiGoogle,

//     items: [
//       {
//         id: "google-it",
//         title: "Google IT Support",
//         issuer: "Google",
//         description: "Computer networking and troubleshooting",
//         image: "/images/certifications/google-it.png",
//         issueDate: "2023",
//         showOnHome: false,
//         skills: ["Networking", "IT"],
//       },
//       {
//         id: "google-data",
//         title: "Google Data Analytics",
//         issuer: "Google",
//         description: "Data visualization and SQL",
//         image: "/images/certifications/data.png",
//         issueDate: "2024",
//         featured: true,
//         showOnHome: true,
//         skills: ["SQL", "Analytics"],
//       },
//     ],
//   },

//   /* ================= MICROSOFT ================= */
//   {
//     id: "microsoft",
//     title: "Microsoft",
//     description: "Azure and Microsoft technologies",
//     logo: FaMicrosoft,

//     items: [
//       {
//         id: "azure-ai",
//         title: "Azure AI Fundamentals",
//         issuer: "Microsoft",
//         description: "Artificial Intelligence concepts on Azure",
//         image: "/images/certifications/azure-ai.png",
//         issueDate: "2025",
//         showOnHome: true,
//         skills: ["Azure", "AI"],
//       },
//       {
//         id: "azure-admin",
//         title: "Azure Administrator",
//         issuer: "Microsoft",
//         description: "Managing Azure cloud resources",
//         image: "/images/certifications/azure-admin.png",
//         issueDate: "2025",
//         showOnHome: false,
//         skills: ["Azure", "Cloud"],
//       },
//     ],
//   },

//   /* ================= PROGRAMMING ================= */
//   {
//     id: "programming",
//     title: "Programming",
//     description: "Programming languages and software engineering",
//     logo: SiPython,

//     items: [
//       {
//         id: "python",
//         title: "Python for Everybody",
//         issuer: "University of Michigan",
//         description: "Python programming fundamentals",
//         image: "/images/certifications/python.png",
//         issueDate: "2023",
//         featured: true,
//         showOnHome: true,
//         skills: ["Python"],
//       },
//       {
//         id: "javascript",
//         title: "JavaScript Algorithms",
//         issuer: "freeCodeCamp",
//         description: "ES6, algorithms and data structures",
//         image: "/images/certifications/javascript.png",
//         issueDate: "2024",
//         showOnHome: true,
//         skills: ["JavaScript"],
//       },
//     ],
//   },

//   /* ================= NETWORKING ================= */
//   {
//     id: "networking",
//     title: "Networking",
//     description: "Computer networking and security",
//     logo: SiCisco,

//     items: [
//       {
//         id: "ccna-intro",
//         title: "CCNA: Introduction to Networks",
//         issuer: "Cisco",
//         description: "Network fundamentals and routing",
//         image: "/images/certifications/ccna.png",
//         issueDate: "2024",
//         showOnHome: false,
//         skills: ["Networking", "Cisco"],
//       },
//       {
//         id: "cybersecurity",
//         title: "Cybersecurity Essentials",
//         issuer: "Cisco",
//         description: "Security principles and best practices",
//         image: "/images/certifications/security.png",
//         issueDate: "2025",
//         showOnHome: true,
//         skills: ["Cybersecurity"],
//       },
//     ],
//   },

//   /* ================= DATABASE ================= */
//   {
//     id: "database",
//     title: "Databases",
//     description: "Database management and SQL",
//     logo: SiJavascript,

//     items: [
//       {
//         id: "oracle-sql",
//         title: "Oracle Database SQL",
//         issuer: "Oracle",
//         description: "SQL querying and relational databases",
//         image: "/images/certifications/oracle.png",
//         issueDate: "2023",
//         showOnHome: false,
//         skills: ["SQL", "Oracle"],
//       },
//       {
//         id: "mysql",
//         title: "MySQL Database Administration",
//         issuer: "Oracle",
//         description: "Database optimization and administration",
//         image: "/images/certifications/mysql.png",
//         issueDate: "2024",
//         showOnHome: true,
//         skills: ["MySQL"],
//       },
//     ],
//   },
// ];



import {
  SiCloudflare,
  SiDocker,
  SiMeta,
  SiGoogle,
  SiCisco,
  SiKubernetes,
  SiPython,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import type { IconType } from "react-icons";

// ================= TYPES & INTERFACES =================

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  duration?: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Professional";
  hours?: number;
  featured?: boolean;
  showOnHome?: boolean;
  skills: string[]; // Enforced array initialization
  color?: string; // Brand-specific accent color hex strings
  verified?: boolean;
  location?: "Online" | "On-Site" | "Hybrid";
  learningPlatform?: string;
  certificateType?: "Professional" | "Specialization" | "Course" | "Exam-Based Certification";
}

export interface CertificationCategory {
  id: string;
  title: string;
  description?: string;
  logo: IconType;
  items: Certification[];
  skillsOverview?: string[]; // Aggregated skills for comprehensive detail panels
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

// ================= GLOBAL DATASET =================

export const certificationCategories: CertificationCategory[] = [
  /* ================= CLOUD & DEVOPS ================= */
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Cloud platforms, deployment and infrastructure automation",
    logo: SiCloudflare,
    difficulty: "Advanced",
    skillsOverview: ["AWS", "Cloud", "Docker", "DevOps", "Kubernetes", "Containers"],
    items: [
      {
        id: "aws-dev",
        title: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        description: "Cloud-native applications development and deployment infrastructure",
        image: "/images/certifications/aws.png",
        issueDate: "2025",
        expiryDate: "2028",
        credentialId: "AWS-DEV-9842X",
        credentialUrl: "https://aws.amazon.com/verification",
        duration: "3 Months",
        level: "Advanced",
        hours: 45,
        featured: true,
        showOnHome: true,
        skills: ["AWS", "Cloud", "DevOps"],
        color: "#FF9900",
        verified: true,
        location: "Online",
        learningPlatform: "AWS Training",
        certificateType: "Exam-Based Certification",
      },
      {
        id: "docker-essentials",
        title: "Docker Essentials",
        issuer: "Docker",
        description: "Containerization workflow, image orchestration, and production deployment",
        image: "/images/certifications/docker.png",
        issueDate: "2025",
        credentialId: "DCK-ESS-1102",
        credentialUrl: "https://docker.com/verify",
        duration: "2 Weeks",
        level: "Intermediate",
        hours: 15,
        featured: false,
        showOnHome: true,
        skills: ["Docker", "DevOps", "Containers"],
        color: "#2496ED",
        verified: true,
        location: "Online",
        learningPlatform: "Coursera",
        certificateType: "Course",
      },
      {
        id: "kubernetes",
        title: "Kubernetes Fundamentals",
        issuer: "Linux Foundation",
        description: "Deploying, scaling, and managing production-ready Kubernetes clusters",
        image: "/images/certifications/kubernetes.png",
        issueDate: "2025",
        credentialId: "LF-K8S-7761",
        credentialUrl: "https://training.linuxfoundation.org/verify",
        duration: "4 Weeks",
        level: "Advanced",
        hours: 30,
        featured: false,
        showOnHome: false,
        skills: ["Kubernetes", "Containers", "DevOps"],
        color: "#326CE5",
        verified: true,
        location: "Online",
        learningPlatform: "edX",
        certificateType: "Course",
      },
    ],
  },

  /* ================= FRONTEND ENGINEERING ================= */
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Modern declarative user interfaces and reactive frontend architectures",
    logo: SiMeta,
    difficulty: "Intermediate",
    skillsOverview: ["React", "Frontend", "UX", "Design", "TypeScript", "JavaScript"],
    items: [
      {
        id: "meta-frontend",
        title: "Meta Front-End Developer",
        issuer: "Meta (Coursera)",
        description: "Comprehensive React ecosystem development, web layout, and design system lifecycles",
        image: "/images/certifications/meta.png",
        issueDate: "2024",
        credentialId: "META-FE-5541B",
        credentialUrl: "https://coursera.org/verify/meta-fe",
        duration: "6 Months",
        level: "Professional",
        hours: 140,
        featured: true,
        showOnHome: true,
        skills: ["React", "Frontend", "JavaScript"],
        color: "#0668E1",
        verified: true,
        location: "Online",
        learningPlatform: "Coursera",
        certificateType: "Professional",
      },
      {
        id: "google-ux",
        title: "Google UX Design",
        issuer: "Google",
        description: "User research fundamentals, wireframing, low-fidelity to high-fidelity prototyping",
        image: "/images/certifications/ux.png",
        issueDate: "2024",
        credentialId: "GOOG-UX-8893A",
        credentialUrl: "https://coursera.org/verify/goog-ux",
        duration: "4 Months",
        level: "Intermediate",
        hours: 90,
        featured: false,
        showOnHome: false,
        skills: ["UX", "Design"],
        color: "#EA4335",
        verified: true,
        location: "Online",
        learningPlatform: "Coursera",
        certificateType: "Professional",
      },
      {
        id: "advanced-react",
        title: "Advanced React",
        issuer: "Meta",
        description: "Custom Hooks, global state mechanics, rendering performance optimization, and integration testing",
        image: "/images/certifications/react.png",
        issueDate: "2025",
        credentialId: "META-ADV-RXT",
        credentialUrl: "https://coursera.org/verify/adv-react",
        duration: "4 Weeks",
        level: "Advanced",
        hours: 35,
        featured: false,
        showOnHome: true,
        skills: ["React", "TypeScript"],
        color: "#61DAFB",
        verified: true,
        location: "Online",
        learningPlatform: "Coursera",
        certificateType: "Course",
      },
    ],
  },

  /* ================= GOOGLE CERTIFICATIONS ================= */
  {
    id: "google",
    title: "Google Certifications",
    description: "Google ecosystem operational support and high-fidelity analytics platforms",
    logo: SiGoogle,
    difficulty: "Intermediate",
    skillsOverview: ["Networking", "IT", "SQL", "Analytics", "Data Visualization"],
    items: [
      {
        id: "google-it",
        title: "Google IT Support",
        issuer: "Google",
        description: "System administration, computer networking infrastructures, and system troubleshooting metrics",
        image: "/images/certifications/google-it.png",
        issueDate: "2023",
        credentialId: "GOOG-IT-1029C",
        credentialUrl: "https://coursera.org/verify/goog-it",
        duration: "5 Months",
        level: "Beginner",
        hours: 120,
        featured: false,
        showOnHome: false,
        skills: ["Networking", "IT"],
        color: "#4285F4",
        verified: true,
        location: "Online",
        learningPlatform: "Coursera",
        certificateType: "Professional",
      },
      {
        id: "google-data",
        title: "Google Data Analytics",
        issuer: "Google",
        description: "Data visualization streams, cleaning parameters, and data-driven spreadsheet modeling using SQL",
        image: "/images/certifications/data.png",
        issueDate: "2024",
        credentialId: "GOOG-DA-4412F",
        credentialUrl: "https://coursera.org/verify/goog-da",
        duration: "6 Months",
        level: "Professional",
        hours: 180,
        featured: true,
        showOnHome: true,
        skills: ["SQL", "Analytics"],
        color: "#34A853",
        verified: true,
        location: "Online",
        learningPlatform: "Coursera",
        certificateType: "Professional",
      },
    ],
  },

  /* ================= MICROSOFT ================= */
  {
    id: "microsoft",
    title: "Microsoft Azure Ecosystem",
    description: "Enterprise Cloud solutions, virtualization systems, and intelligent edge infrastructures",
    logo: FaMicrosoft,
    difficulty: "Advanced",
    skillsOverview: ["Azure", "AI", "Cloud", "System Administration"],
    items: [
      {
        id: "azure-ai",
        title: "Azure AI Fundamentals",
        issuer: "Microsoft",
        description: "Machine Learning models and automated cognitive vision frameworks on Azure cloud architectures",
        image: "/images/certifications/azure-ai.png",
        issueDate: "2025",
        expiryDate: "2026",
        credentialId: "MS-AI900-NN82",
        credentialUrl: "https://learn.microsoft.com/certifications",
        duration: "2 Weeks",
        level: "Beginner",
        hours: 12,
        featured: false,
        showOnHome: true,
        skills: ["Azure", "AI"],
        color: "#0078D4",
        verified: true,
        location: "Online",
        learningPlatform: "Microsoft Learn",
        certificateType: "Exam-Based Certification",
      },
      {
        id: "azure-admin",
        title: "Azure Administrator",
        issuer: "Microsoft",
        description: "Implementing, monitoring, and maintaining Microsoft Azure computing instances and storage layers",
        image: "/images/certifications/azure-admin.png",
        issueDate: "2025",
        expiryDate: "2027",
        credentialId: "MS-AZ104-BB99",
        credentialUrl: "https://learn.microsoft.com/certifications",
        duration: "6 Weeks",
        level: "Intermediate",
        hours: 40,
        featured: false,
        showOnHome: false,
        skills: ["Azure", "Cloud"],
        color: "#5C2D91",
        verified: true,
        location: "Online",
        learningPlatform: "Microsoft Learn",
        certificateType: "Exam-Based Certification",
      },
    ],
  },

  /* ================= PROGRAMMING ================= */
  {
    id: "programming",
    title: "Core Programming",
    description: "Algorithmic thinking patterns, data configurations, and execution performance logic",
    logo: SiPython,
    difficulty: "Intermediate",
    skillsOverview: ["Python", "JavaScript", "ES6", "Algorithms"],
    items: [
      {
        id: "python",
        title: "Python for Everybody",
        issuer: "University of Michigan",
        description: "Fundamental procedural programming structures, networked data captures, and multi-paradigm design",
        image: "/images/certifications/python.png",
        issueDate: "2023",
        credentialId: "MICH-PY-3391",
        credentialUrl: "https://coursera.org/verify/python-everyone",
        duration: "3 Months",
        level: "Beginner",
        hours: 64,
        featured: true,
        showOnHome: true,
        skills: ["Python"],
        color: "#3776AB",
        verified: true,
        location: "Online",
        learningPlatform: "Coursera",
        certificateType: "Specialization",
      },
      {
        id: "javascript",
        title: "JavaScript Algorithms",
        issuer: "freeCodeCamp",
        description: "Object-oriented architectures, algorithmic problem solving pipelines, and functional ECMA Script applications",
        image: "/images/certifications/javascript.png",
        issueDate: "2024",
        credentialId: "FCC-JS-9021",
        credentialUrl: "https://freecodecamp.org/certification/verify",
        duration: "2 Months",
        level: "Intermediate",
        hours: 300,
        featured: false,
        showOnHome: true,
        skills: ["JavaScript"],
        color: "#F7DF1E",
        verified: true,
        location: "Online",
        learningPlatform: "freeCodeCamp",
        certificateType: "Professional",
      },
    ],
  },

  /* ================= NETWORKING & SECURITY ================= */
  {
    id: "networking",
    title: "Networking & Cyber Defense",
    description: "Enterprise hardware pathways, routing constraints, and proactive system security architectures",
    logo: SiCisco,
    difficulty: "Advanced",
    skillsOverview: ["Networking", "Cisco", "Cybersecurity", "Routing"],
    items: [
      {
        id: "ccna-intro",
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        description: "Network topography layers, routing tables, and transport protocol infrastructure parameters",
        image: "/images/certifications/ccna.png",
        issueDate: "2024",
        credentialId: "CSCO-CCNA-882",
        credentialUrl: "https://www.credly.com",
        duration: "4 Weeks",
        level: "Intermediate",
        hours: 35,
        featured: false,
        showOnHome: false,
        skills: ["Networking", "Cisco"],
        color: "#1B365D",
        verified: true,
        location: "Online",
        learningPlatform: "NetAcad",
        certificateType: "Course",
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity Essentials",
        issuer: "Cisco",
        description: "Access authorization nodes, data integrity encryption protocols, and dynamic vulnerability prevention matrices",
        image: "/images/certifications/security.png",
        issueDate: "2025",
        credentialId: "CSCO-SEC-113",
        credentialUrl: "https://www.credly.com",
        duration: "3 Weeks",
        level: "Intermediate",
        hours: 30,
        featured: false,
        showOnHome: true,
        skills: ["Cybersecurity"],
        color: "#00BCEB",
        verified: true,
        location: "Online",
        learningPlatform: "NetAcad",
        certificateType: "Course",
      },
    ],
  },

  /* ================= DATABASE MANAGEMENT ================= */
  {
    id: "database",
    title: "Relational Databases",
    description: "Structured storage configurations, performance tuning, and schema querying execution plans",
    logo: SiMysql,
    difficulty: "Advanced",
    skillsOverview: ["SQL", "Oracle", "MySQL", "Database Administration"],
    items: [
      {
        id: "oracle-sql",
        title: "Oracle Database SQL",
        issuer: "Oracle",
        description: "Advanced relational subqueries, analytical calculation methods, and structural normalization concepts",
        image: "/images/certifications/oracle.png",
        issueDate: "2023",
        credentialId: "ORCL-SQL-098",
        credentialUrl: "https://education.oracle.com",
        duration: "4 Weeks",
        level: "Intermediate",
        hours: 40,
        featured: false,
        showOnHome: false,
        skills: ["SQL", "Oracle"],
        color: "#F80000",
        verified: true,
        location: "Online",
        learningPlatform: "Oracle University",
        certificateType: "Course",
      },
      {
        id: "mysql",
        title: "MySQL Database Administration",
        issuer: "Oracle",
        description: "Server backup schemas, cluster scaling parameters, query speed optimization, and role security configurations",
        image: "/images/certifications/mysql.png",
        issueDate: "2024",
        credentialId: "ORCL-MY-772",
        credentialUrl: "https://education.oracle.com",
        duration: "5 Weeks",
        level: "Advanced",
        hours: 48,
        featured: false,
        showOnHome: true,
        skills: ["MySQL", "Database Administration"],
        color: "#4479A1",
        verified: true,
        location: "Online",
        learningPlatform: "Coursera",
        certificateType: "Course",
      },
    ],
  },
];