// "use client";

// import { motion } from "framer-motion";
// import type { CertificationCategory, Certification } from "@/data/certifications";

// import CategoryHeader from "@/components/ui/categoryHeader";
// import FeaturedCertificateCard from "@/components/ui/featuredCertificationCard";
// import CertificateShowcaseTile from "@/components/ui/certificateShowcaseTile";

// interface CategorySectionProps {
//   category: CertificationCategory;
// }

// export default function CategorySection({
//   category,
// }: CategorySectionProps) {
//   const featured: Certification | undefined = category.items.find(
//     (item) => item.featured
//   );

//   const rest: Certification[] = category.items.filter(
//     (item) => !item.featured
//   );

//   const featuredCount = category.items.filter((i) => i.featured).length;

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 0.6,
//         ease: "easeOut",
//       }}
//       className="mb-28"
//     >
//       {/* CATEGORY HEADER */}
//       <CategoryHeader
//         title={category.title}
//         description={category.description}
//         logo={category.logo}
//         totalCertificates={category.items.length}
//         featuredCount={featuredCount}
//       />

//       {/* FEATURED */}
//       {featured && (
//         <div className="mb-14">
//           <FeaturedCertificateCard certification={featured} />
//         </div>
//       )}

//       {/* GRID */}
//       {rest.length > 0 && (
//         <div
//           className="
//             grid
//             gap-6
//             md:grid-cols-2
//             xl:grid-cols-3
//           "
//         >
//           {rest.map((cert) => (
//             <CertificateShowcaseTile
//               key={cert.id}
//               certificate={cert}
//             />
//           ))}
//         </div>
//       )}
//     </motion.section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import type {
  CertificationCategory,
  Certification,
} from "@/data/certifications";

import CategoryHeader from "@/components/ui/categoryHeader";
import FeaturedCertificateCard from "@/components/ui/featuredCertificationCard";
import CertificateShowcaseTile from "@/components/ui/certificateShowcaseTile";

interface CategorySectionProps {
  category: CertificationCategory;
}

export default function CategorySection({
  category,
}: CategorySectionProps) {
  const featured: Certification | undefined = category.items.find(
    (item) => item.featured
  );

  const rest: Certification[] = category.items.filter(
    (item) => !item.featured
  );

  const featuredCount = category.items.filter((i) => i.featured).length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        relative
        w-full
        rounded-[40px]
        border
        border-white/10
        bg-gradient-to-b
        from-white/[0.04]
        via-white/[0.02]
        to-transparent
        backdrop-blur-2xl
        px-6
        py-10
        md:px-10
        md:py-14
        overflow-hidden
      "
    >
      {/* Ambient Background Orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Inner Content */}
      <div className="relative">
        {/* CATEGORY HEADER */}
        <CategoryHeader
          title={category.title}
          description={category.description}
          Icon={category.logo}
          totalCertificates={category.items.length}
          featuredCount={featuredCount}
        />

        {/* FEATURED */}
        {featured && (
          <div className="mb-16">
            <FeaturedCertificateCard certification={featured} />
          </div>
        )}

        {/* GRID */}
        {rest.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((cert) => (
              <CertificateShowcaseTile
                key={cert.id}
                certificate={cert}
              />
            ))}
          </div>
        )}

        {/* CATEGORY FOOTER LINE */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </motion.section>
  );
}