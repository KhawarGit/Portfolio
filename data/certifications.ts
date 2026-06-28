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

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  issueDate: string;
  credentialUrl?: string;
  featured?: boolean;
  showOnHome?: boolean;
  skills?: string[];
}

export interface CertificationCategory {
  id: string;
  title: string;
  description?: string;
  logo: IconType;
  items: Certification[];
}

export const certificationCategories: CertificationCategory[] = [
  /* ================= CLOUD ================= */
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Cloud platforms, deployment and infrastructure",
    logo: SiCloudflare,

    items: [
      {
        id: "aws-dev",
        title: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        description: "Cloud-native apps development",
        image: "/images/certifications/aws.png",
        issueDate: "2025",
        featured: true,
        showOnHome: true,
        skills: ["AWS", "Cloud"],
      },
      {
        id: "docker-essentials",
        title: "Docker Essentials",
        issuer: "Docker",
        description: "Containerization and deployment",
        image: "/images/certifications/docker.png",
        issueDate: "2025",
        showOnHome: true,
        skills: ["Docker", "DevOps"],
      },
      {
        id: "kubernetes",
        title: "Kubernetes Fundamentals",
        issuer: "Linux Foundation",
        description: "Deploying and managing Kubernetes clusters",
        image: "/images/certifications/kubernetes.png",
        issueDate: "2025",
        showOnHome: false,
        skills: ["Kubernetes", "Containers"],
      },
    ],
  },

  /* ================= FRONTEND ================= */
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Modern frontend technologies",
    logo: SiMeta,

    items: [
      {
        id: "meta-frontend",
        title: "Meta Front-End Developer",
        issuer: "Meta (Coursera)",
        description: "React & modern frontend development",
        image: "/images/certifications/meta.png",
        issueDate: "2024",
        featured: true,
        showOnHome: true,
        skills: ["React", "Frontend"],
      },
      {
        id: "google-ux",
        title: "Google UX Design",
        issuer: "Google",
        description: "UI/UX fundamentals",
        image: "/images/certifications/ux.png",
        issueDate: "2024",
        showOnHome: false,
        skills: ["UX", "Design"],
      },
      {
        id: "advanced-react",
        title: "Advanced React",
        issuer: "Meta",
        description: "Hooks, performance optimization and testing",
        image: "/images/certifications/react.png",
        issueDate: "2025",
        showOnHome: true,
        skills: ["React", "TypeScript"],
      },
    ],
  },

  /* ================= GOOGLE ================= */
  {
    id: "google",
    title: "Google Certifications",
    description: "Google professional certifications",
    logo: SiGoogle,

    items: [
      {
        id: "google-it",
        title: "Google IT Support",
        issuer: "Google",
        description: "Computer networking and troubleshooting",
        image: "/images/certifications/google-it.png",
        issueDate: "2023",
        showOnHome: false,
        skills: ["Networking", "IT"],
      },
      {
        id: "google-data",
        title: "Google Data Analytics",
        issuer: "Google",
        description: "Data visualization and SQL",
        image: "/images/certifications/data.png",
        issueDate: "2024",
        featured: true,
        showOnHome: true,
        skills: ["SQL", "Analytics"],
      },
    ],
  },

  /* ================= MICROSOFT ================= */
  {
    id: "microsoft",
    title: "Microsoft",
    description: "Azure and Microsoft technologies",
    logo: FaMicrosoft,

    items: [
      {
        id: "azure-ai",
        title: "Azure AI Fundamentals",
        issuer: "Microsoft",
        description: "Artificial Intelligence concepts on Azure",
        image: "/images/certifications/azure-ai.png",
        issueDate: "2025",
        showOnHome: true,
        skills: ["Azure", "AI"],
      },
      {
        id: "azure-admin",
        title: "Azure Administrator",
        issuer: "Microsoft",
        description: "Managing Azure cloud resources",
        image: "/images/certifications/azure-admin.png",
        issueDate: "2025",
        showOnHome: false,
        skills: ["Azure", "Cloud"],
      },
    ],
  },

  /* ================= PROGRAMMING ================= */
  {
    id: "programming",
    title: "Programming",
    description: "Programming languages and software engineering",
    logo: SiPython,

    items: [
      {
        id: "python",
        title: "Python for Everybody",
        issuer: "University of Michigan",
        description: "Python programming fundamentals",
        image: "/images/certifications/python.png",
        issueDate: "2023",
        featured: true,
        showOnHome: true,
        skills: ["Python"],
      },
      {
        id: "javascript",
        title: "JavaScript Algorithms",
        issuer: "freeCodeCamp",
        description: "ES6, algorithms and data structures",
        image: "/images/certifications/javascript.png",
        issueDate: "2024",
        showOnHome: true,
        skills: ["JavaScript"],
      },
    ],
  },

  /* ================= NETWORKING ================= */
  {
    id: "networking",
    title: "Networking",
    description: "Computer networking and security",
    logo: SiCisco,

    items: [
      {
        id: "ccna-intro",
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        description: "Network fundamentals and routing",
        image: "/images/certifications/ccna.png",
        issueDate: "2024",
        showOnHome: false,
        skills: ["Networking", "Cisco"],
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity Essentials",
        issuer: "Cisco",
        description: "Security principles and best practices",
        image: "/images/certifications/security.png",
        issueDate: "2025",
        showOnHome: true,
        skills: ["Cybersecurity"],
      },
    ],
  },

  /* ================= DATABASE ================= */
  {
    id: "database",
    title: "Databases",
    description: "Database management and SQL",
    logo: SiJavascript,

    items: [
      {
        id: "oracle-sql",
        title: "Oracle Database SQL",
        issuer: "Oracle",
        description: "SQL querying and relational databases",
        image: "/images/certifications/oracle.png",
        issueDate: "2023",
        showOnHome: false,
        skills: ["SQL", "Oracle"],
      },
      {
        id: "mysql",
        title: "MySQL Database Administration",
        issuer: "Oracle",
        description: "Database optimization and administration",
        image: "/images/certifications/mysql.png",
        issueDate: "2024",
        showOnHome: true,
        skills: ["MySQL"],
      },
    ],
  },
];