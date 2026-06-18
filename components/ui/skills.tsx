import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <SiGit /> },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            My <span className="text-gradient">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Technologies I work with to build scalable, fast, and modern applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-black dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="text-3xl text-neutral-700 transition group-hover:scale-110 dark:text-neutral-300">
                {skill.icon}
              </div>

              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}