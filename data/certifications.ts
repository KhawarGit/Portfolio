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


import { SiCloudflare, SiDocker, SiMeta } from "react-icons/si";
import type { IconType } from "react-icons";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;

  image: string;

  issueDate: string;

  credentialUrl?: string; // ✅ MAKE OPTIONAL (FIX ERROR)

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
    ],
  },

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
    ],
  },
];