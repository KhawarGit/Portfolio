"use client";

import { motion } from "framer-motion";

export default function HoverCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="transition-shadow hover:shadow-xl"
    >
      {children}
    </motion.div>
  );
}