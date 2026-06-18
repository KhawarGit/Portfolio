// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function MouseGlow() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <motion.div
//       className="pointer-events-none fixed inset-0 z-0"
//       animate={{
//         background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.12), transparent 80%)`,
//       }}
//       transition={{ type: "tween", ease: "linear", duration: 0.15 }}
//     />
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `
          radial-gradient(
            600px circle at ${pos.x}px ${pos.y}px,
            rgba(99, 102, 241, 0.18),
            transparent 60%
          )
        `,
        transition: "background 0.15s ease-out",
      }}
    />
  );
}