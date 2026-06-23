// components/ui/PressureKhan.tsx
"use client";
import TextPressure from "@/components/ui/TextPressure";

export default function PressureKhan() {
  return (
    <span className="inline-block h-[1em] w-[4.5em] align-baseline">
      <TextPressure
        text="KHAN"
        minFontSize={20}
        flex={false}
        alpha={false}
        stroke={false}
        width
        weight
        italic={false}
        scale={false}
        textColor="#8b5cf6"
      />
    </span>
  );
}