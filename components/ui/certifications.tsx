"use client";

import CertificationCard from "@/components/ui/certification-card";
import TimelineLine from "@/components/ui/timeline-line";

const certifications = [
  {
    title: "AWS Certified Developer",
    description:
      "Validated expertise in building and deploying cloud-native applications.",
    image: "/images/certifications/aws.png",
    date: "2025",
    link: "https://example.com",
  },
  {
    title: "Meta Front-End Professional Certificate",
    description:
      "Completed comprehensive front-end training with React and modern web technologies.",
    image: "/images/certifications/meta.png",
    date: "2024",
    link: "https://example.com",
  },
  {
    title: "LeetCode Achievement",
    description:
      "Solved hundreds of algorithmic problems across data structures and dynamic programming.",
    image: "/images/certifications/leetcode.png",
    date: "2024",
    link: "https://leetcode.com/",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden section-padding"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container-width">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Certifications &{" "}
            <span className="text-gradient">Achievements</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Professional certifications, accomplishments, and milestones that
            reflect my technical growth and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          {/* <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-500 lg:block" /> */}
        <TimelineLine />
          <div className="space-y-16">
            {certifications.map((item, index) => (
              <CertificationCard
                key={item.title}
                item={item}
                align={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}