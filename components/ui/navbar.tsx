// "use client";

// import Link from "next/link";

// const navItems = [
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Experience", href: "#experience" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <div className="container-width">
//         <nav className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-neutral-200/60 bg-white/80 px-6 backdrop-blur-xl dark:border-neutral-800/60 dark:bg-neutral-950/80">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
//           >
//             KK
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className="hidden items-center gap-8 md:flex">
//             {navItems.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className="text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Resume Button */}
//           <Link
//             href="/resume.pdf"
//             target="_blank"
//             className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
//           >
//             Resume
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import ThemeToggle from "@/components/ui/theme-toggle";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     { label: "Home", href: "#" },
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Experience", href: "#experience" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
//       <div className="container-width flex h-16 items-center justify-between">
        
//         {/* Logo */}
//         <Link
//           href="#"
//           className="text-xl font-black tracking-tight text-black dark:text-white"
//         >
//           Khawar<span className="text-gradient">.dev</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden gap-8 md:flex">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-sm font-medium text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Right CTA (optional) */}
//         <div className="hidden md:block">
//           <Link
//             href="#contact"
//             className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-black"
//           >
//             Hire Me
//           </Link>
//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden"
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="border-t border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
//           <div className="flex flex-col gap-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link
//               href="#contact"
//               onClick={() => setOpen(false)}
//               className="mt-2 rounded-xl bg-black px-4 py-2 text-center text-sm font-medium text-white dark:bg-white dark:text-black"
//             >
//               Hire Me
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200/70 bg-white/70 backdrop-blur-xl dark:border-neutral-800/70 dark:bg-neutral-950/70">
      <div className="container-width flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="text-xl font-black tracking-tight text-neutral-900 dark:text-white"
        >
          Khawar<span className="text-gradient">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="#contact"
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-white/95 px-6 py-5 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-700 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-neutral-900 px-4 py-3 text-center text-sm font-medium text-white transition hover:scale-[1.02] dark:bg-white dark:text-black"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}