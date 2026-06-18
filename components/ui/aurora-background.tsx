"use client";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Blob 1 */}
      <div className="aurora aurora-1" />

      {/* Blob 2 */}
      <div className="aurora aurora-2" />

      {/* Blob 3 */}
      <div className="aurora aurora-3" />
    </div>
  );
}