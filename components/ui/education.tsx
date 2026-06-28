"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Calendar, GraduationCap, School, Laptop2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Timeline() {
const items = [
  {
    type: "job",
    title: "Software Engineer",
    institution: "ABC Technologies",
    duration: "2024 - Present",
    location: "Karachi, Pakistan",
    linkedin: "https://linkedin.com/company/abc",
    logo: "/images/company1.png",
    description:
      "Building scalable full-stack applications, automation platforms, and internal engineering tools.",

    points: [
      "Developed enterprise Next.js applications",
      "Built automation solutions using Python & TCL",
      "Optimized backend APIs and deployment workflows",
    ],
  },

  {
    type: "university",
    title: "Bachelor of Software Engineering",
    institution: "Your University",
    duration: "2022 - 2026",
    location: "Karachi, Pakistan",
    linkedin: "https://linkedin.com/school/your-university",
    logo: "/images/university.png",
    description:
      "Focused on Software Engineering, Artificial Intelligence, Data Structures and Algorithms, and Full Stack Development.",

    points: [
      "CGPA: 3.6 / 4.0",
      "Built 20+ academic & personal projects",
      "Relevant Coursework: DSA, DBMS, OS, AI",
    ],
  },

  {
    type: "internship",
    title: "Software Engineering Intern",
    institution: "XYZ Solutions",
    duration: "Jun 2024 - Aug 2024",
    location: "Karachi, Pakistan",
    linkedin: "https://linkedin.com/company/xyz",
    logo: "/images/company2.png",
    description:
      "Worked on frontend development, API integrations and automation tooling for internal systems.",

    points: [
      "Built reusable React components",
      "Integrated REST APIs",
      "Improved application performance by 25%",
    ],
  },

  {
    type: "college",
    title: "Higher Secondary Education",
    institution: "ABC Government College",
    duration: "2020 - 2022",
    location: "Karachi, Pakistan",
    linkedin: "https://linkedin.com",
    logo: "/images/college.png",
    description:
      "Completed Pre-Engineering with emphasis on Mathematics, Physics and Computer Science.",

    points: [
      "Grade: A+",
      "Participated in programming competitions",
      "Built foundation in mathematics & computing",
    ],
  },
];

  return (
    <section id="timeline" className="relative py-24">
      <div className="container-width">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400">
            Education and experience shaping my engineering path
          </p>
        </div>


        <div className="relative mt-20 space-y-20">
        {/* CENTER LINE */}
 {/* Apple Timeline */}
<div className="absolute left-1/2 top-0 h-full -translate-x-1/2">

  {/* Glow */}
  <div className="
    absolute
    left-1/2
    h-full
    w-6
    -translate-x-1/2
    bg-violet-500/10
    blur-3xl
  "/>

  {/* Line */}
  <motion.div
    initial={{ height: 0 }}
    whileInView={{ height: "100%" }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className="
      absolute
      left-1/2
      top-0
      w-[3px]
      -translate-x-1/2
      bg-gradient-to-b
      from-cyan-400
      via-violet-500
      to-blue-500
      rounded-full
    "
  />

</div>

          {items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
initial={{
opacity:0,
x:isLeft?-120:120,
rotate:isLeft?-4:4,
scale:.94
}}

whileInView={{
opacity:1,
x:0,
rotate:0,
scale:1
}}
whileHover={{
  scale: 1.02,
}}

transition={{
duration:.8,
ease:"easeOut"
}}
              
                viewport={{ once: false, amount: 0.45 }}
               
                className="grid grid-cols-1 lg:grid-cols-2 items-center relative"
              >

                {/* DOT */}
{/* <div className="absolute left-1/2 top-8 -translate-x-1/2 z-30"> */}
<div
    className="
        absolute
        left-1/2
        top-10
        -translate-x-1/2
        -translate-y-1/2
        z-30
    "
>

<motion.div

animate={{
    y:[0,-4,0],
    rotate:[0,5,0,-5,0],
    scale:[1,1.05,1],
}}

transition={{
    duration:5,
    repeat:Infinity,
    ease: "easeInOut"
}}

className="
relative
flex
h-14
w-14
items-center
justify-center

rounded-full

border
border-white/20

bg-white/10

backdrop-blur-xl

shadow-[0_0_35px_rgba(59,130,246,.25)]
">

{
  item.type === "job" ? (
    <Briefcase className="text-cyan-400" />
  ) : item.type === "university" ? (
    <GraduationCap className="text-violet-400" />
  ) : item.type === "internship" ? (
    <Laptop2 className="text-emerald-400" />
  ) : (
    <School className="text-orange-400" />
  )
}

<div className="
absolute
inset-0
rounded-full
bg-cyan-400/20
blur-xl
"/>

</motion.div>

</div>

                {/* LEFT */}
                {isLeft ? (
                  <div className="lg:pr-16">
                    <motion.div
  initial={{
    width: 0,
    opacity: 0,
  }}
  whileInView={{
    width: 112,
    opacity: 1,
  }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{
    duration: 0.8,
    delay: 0.25,
    ease: "easeOut",
  }}
  className="
    absolute
    top-12
    right-[48%]
    h-[2px]
    bg-gradient-to-r
    from-cyan-400
    to-transparent
  "
/>
                    <Card item={item} />
                  </div>
                ) : (
                  <div />
                )}

                {/* RIGHT */}
                {!isLeft ? (
                  <div className="lg:pl-16">

<motion.div
  initial={{
    width: 0,
    opacity: 0,
  }}
  whileInView={{
    width: 112,
    opacity: 1,
  }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{
    duration: 0.8,
    delay: 0.25,
    ease: "easeOut",
  }}
  className="
    absolute
    top-12
    left-[48%]
    h-[2px]
    bg-gradient-to-r
    from-transparent
    to-cyan-400
  "
/>
                    <Card item={item} />
                  </div>
                ) : (
                  <div />
                )}

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ item }: any) {
  return (
<motion.div
whileHover={{
    y:-8,
    scale:1.015,
}}

transition={{
    type:"spring",
    stiffness:180,
    damping:20,
}}

className="
group
relative
rounded-2xl
p-[1px]
bg-gradient-to-r
from-blue-500
via-violet-500
to-cyan-500
hover:shadow-[0_30px_80px_rgba(59,130,246,.18)]
"
>
        <div
className="
absolute
-inset-2

rounded-3xl

bg-gradient-to-r

from-blue-500/30

via-violet-500/30

to-cyan-500/30

opacity-0

blur-xl

transition

duration-700

group-hover:opacity-100
"
/>

      {/* INNER CARD */}
      <div className="
        relative rounded-3xl p-6
        bg-white/5 dark:bg-neutral-900/80
        backdrop-blur-xl
        border border-white/15
        transition-all duration-500
        group-hover:-translate-y-2
        group-hover:rotate-[0.5deg]
      ">

<div
className="
absolute
-inset-12

opacity-0

blur-3xl

transition

duration-700

group-hover:opacity-100

bg-gradient-to-r

from-blue-500/10

via-violet-500/10

to-cyan-500/10
"/>

<div
className="
absolute

right-6

top-2

text-8xl

font-black

tracking-tight

text-white/5

select-none
">
{item.duration.split("-")[1]?.trim()}
</div>
        {/* HEADER */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-4">

            <div className="
              relative h-12 w-12 overflow-hidden rounded-xl
              border border-white/10
              bg-white/5
            ">
              <Image
                src={item.logo}
                alt={item.institution}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
{
  item.type === "job" ? (
    <Briefcase size={18} className="text-cyan-400" />
  ) : item.type === "university" ? (
    <GraduationCap size={18} className="text-violet-400" />
  ) : item.type === "internship" ? (
    <Laptop2 size={18} className="text-emerald-400" />
  ) : (
    <School size={18} className="text-orange-400" />
  )
}

                {item.title}
              </h3>

              <p className="text-sm text-neutral-500">
                {item.institution}
              </p>

              {item.location && (
                <p className="text-xs text-neutral-400">
                  📍 {item.location}
                </p>
              )}
            </div>
          </div>

          <div className="text-right text-sm text-neutral-500">
            <div className="flex items-center gap-2 justify-end">
              <Calendar size={14} />
              {/* {item.duration} */}
              <span
className="
rounded-full

border

border-violet-500/30

bg-violet-500/10

px-3

py-1

text-xs

font-semibold

text-violet-300
">
{item.duration}
</span>
            </div>

            <Link
              href={item.linkedin}
              target="_blank"
              className="text-xs hover:text-violet-500 transition"
            >
              LinkedIn ↗
            </Link>
          </div>
        </div>

        {/* DESCRIPTION */}
        {/* <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p> */}
        <motion.p

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{delay:.3}}

className="mt-5 leading-7 text-neutral-400"
>
    {item.description}
</motion.p>

        {/* POINTS */}
        <ul className="mt-4 space-y-2 text-sm text-neutral-500">
          {item.points.map((p: string, i: number) => (
            // <li key={i} className="flex gap-2">
            <motion.li
            key={i}

initial={{
opacity:0,
x:-20
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
delay:.4+i*.12,
duration:.5,
type:"spring",
stiffness:120
}}

className="flex gap-3"
>

    <span className="text-violet-500">▹</span>
    {p}
</motion.li>
            // </li>
          ))}
        </ul>

      </div>
    </motion.div>
  );
}