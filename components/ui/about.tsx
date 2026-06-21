// import { Code2, Cpu, Rocket, Sparkles } from "lucide-react";

// export default function About() {
//   const highlights = [
//     {
//       icon: <Code2 size={20} />,
//       title: "Clean Code",
//       desc: "I focus on writing scalable, maintainable, and readable code.",
//     },
//     {
//       icon: <Rocket size={20} />,
//       title: "Performance First",
//       desc: "Optimized web apps with fast load times and smooth UX.",
//     },
//     {
//       icon: <Cpu size={20} />,
//       title: "Full Stack Dev",
//       desc: "Frontend + backend + APIs + deployment workflows.",
//     },
//     {
//       icon: <Sparkles size={20} />,
//       title: "Modern UI",
//       desc: "Beautiful interfaces using Tailwind and modern design systems.",
//     },
//   ];

//   return (
//     <section id="about" className="section-padding">
//       <div className="container-width">
        
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             About <span className="text-gradient">Me</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             I’m a passionate Full Stack Developer who enjoys building scalable
//             systems, automation tools, and modern web applications with great UX.
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid gap-10 lg:grid-cols-2">
          
//           {/* Left Text */}
//           <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
//             <p>
//               I specialize in building modern web applications using Next.js,
//               React, TypeScript, and Node.js. My focus is on creating systems
//               that are not only functional but also optimized and scalable.
//             </p>

//             <p>
//               Over time, I’ve worked on automation tools, backend systems,
//               dashboards, and full-stack applications that solve real-world
//               problems efficiently.
//             </p>

//             <p>
//               I enjoy learning new technologies and continuously improving my
//               development workflow with better architecture and tools.
//             </p>
//           </div>

//           {/* Right Cards */}
//           <div className="grid gap-4 sm:grid-cols-2">
//             {highlights.map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900"
//               >
//                 <div className="mb-3 flex items-center gap-2 text-black dark:text-white">
//                   {item.icon}
//                   <h3 className="font-semibold">{item.title}</h3>
//                 </div>

//                 <p className="text-sm text-neutral-600 dark:text-neutral-400">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import ProfileCard from "@/components/ui/ProfileCard";
// import { Code2, Cpu, Rocket, Sparkles } from "lucide-react";

// export default function About() {
//   const highlights = [
//     {
//       icon: <Code2 size={20} />,
//       title: "Clean Code",
//       desc: "I focus on writing scalable, maintainable, and readable code.",
//     },
//     {
//       icon: <Rocket size={20} />,
//       title: "Performance First",
//       desc: "Optimized web apps with fast load times and smooth UX.",
//     },
//     {
//       icon: <Cpu size={20} />,
//       title: "Full Stack Dev",
//       desc: "Frontend + backend + APIs + deployment workflows.",
//     },
//     {
//       icon: <Sparkles size={20} />,
//       title: "Modern UI",
//       desc: "Beautiful interfaces using Tailwind and modern design systems.",
//     },
//   ];

//   return (
//     <section id="about" className="section-padding">
//       <div className="container-width">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             About <span className="text-gradient">Me</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
//             I’m a passionate Full Stack Developer who enjoys building scalable
//             systems, automation tools, and modern web applications with great UX.
//           </p>
//         </div>

//         {/* MAIN GRID */}

// <div className="flex items-center justify-center max-w-5xl mx-auto gap-10">

//   {/* LEFT → PROFILE IMAGE */}
//   <div className="flex-1 flex justify-center lg:justify-end">
//     <ProfileCard
//       name="Khawar Khan"
//       title="Full Stack Developer"
//       handle="khawarkhan"
//       status="Available for work"
//       avatarUrl="/images/profile.jpeg"
//       miniAvatarUrl="/images/profile.jpeg"
//       contactText="Hire Me"
//       showUserInfo={true}
//       enableTilt={true}
//       enableMobileTilt={false}
//       behindGlowColor="rgba(99, 102, 241, 0.6)"
//       innerGradient="linear-gradient(145deg,#0f172a 0%,#1e293b 100%)"
//       onContactClick={() => {
//         window.location.href = "#contact";
//       }}
//     />
//   </div>

//   {/* RIGHT → TEXT */}
//   <div className="flex-1 space-y-6">

//     <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
//       <p>
//         I specialize in building modern web applications using Next.js,
//         React, TypeScript, and Node.js.
//       </p>

//       <p>
//         I’ve worked on automation tools, backend systems, dashboards,
//         and scalable full-stack apps.
//       </p>

//       <p>
//         I enjoy learning new technologies and improving architecture.
//       </p>
//     </div>

//     {/* Highlights */}
//     <div className="grid gap-4 sm:grid-cols-2">
//       {highlights.map((item) => (
//         <div
//           key={item.title}
//           className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
//         >
//           <div className="mb-3 flex items-center gap-2">
//             {item.icon}
//             <h3 className="font-semibold">{item.title}</h3>
//           </div>
//           <p className="text-sm text-neutral-600 dark:text-neutral-400">
//             {item.desc}
//           </p>
//         </div>
//       ))}
//     </div>

//   </div>
// </div>
//       </div>
//     </section>
//   );
// }


"use client";

import ProfileCard from "@/components/ui/ProfileCard";
import { Code2, Cpu, Rocket, Sparkles } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={20} />,
      title: "Clean Code",
      desc: "I focus on writing scalable, maintainable, and readable code.",
    },
    {
      icon: <Rocket size={20} />,
      title: "Performance First",
      desc: "Optimized web apps with fast load times and smooth UX.",
    },
    {
      icon: <Cpu size={20} />,
      title: "Full Stack Dev",
      desc: "Frontend + backend + APIs + deployment workflows.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Modern UI",
      desc: "Beautiful interfaces using Tailwind and modern design systems.",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-width">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            About <span className="text-gradient">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            I’m a passionate Full Stack Developer who enjoys building scalable
            systems, automation tools, and modern web applications with great UX.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="relative grid gap-6 lg:gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">

          {/* optional center divider (desktop only) */}
          {/* <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-white/5" /> */}

          {/* LEFT → PROFILE IMAGE */}
          <div className="flex justify-center lg:justify-end lg:-translate-x-4">
            <ProfileCard
              name="Khawar Khan"
              title="Full Stack Developer"
              handle="khawarkhan"
              status="Available for work"
              avatarUrl="/images/profile.jpeg"
              miniAvatarUrl="/images/profile.jpeg"
              contactText="Hire Me"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="rgba(99, 102, 241, 0.6)"
              innerGradient="linear-gradient(145deg,#0f172a 0%,#1e293b 100%)"
              onContactClick={() => {
                window.location.href = "#contact";
              }}
            />
          </div>

          {/* RIGHT → TEXT */}
          <div className="space-y-6 lg:-ml-6">

            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
              <p>
                I specialize in building modern web applications using Next.js,
                React, TypeScript, and Node.js.
              </p>

              <p>
                I’ve worked on automation tools, backend systems, dashboards,
                and scalable full-stack apps.
              </p>

              <p>
                I enjoy learning new technologies and improving architecture.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="mb-3 flex items-center gap-2">
                    {item.icon}
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}