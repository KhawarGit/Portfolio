"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrbitControls, Grid, Sparkles } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import { isLowPowerDevice } from "@/hooks/useLowPowerMode";

function LaptopModel() {
  const navDotColors = ["#f87171", "#fbbf24", "#34d399"];
  const textLines = [
    { y: 0.4, width: 0.5 },
    { y: 0.32, width: 0.4 },
    { y: 0.24, width: 0.46 },
  ];
  const cards = [-0.45, 0, 0.45];

  return (
    <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.9}>
      <group position={[0, -0.1, 0]}>
        {/* base / keyboard deck */}
        <mesh position={[0, -0.42, 0.15]} rotation={[-0.05, 0, 0]}>
          <boxGeometry args={[1.6, 0.08, 1.05]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.375, 0.35]} rotation={[-0.05, 0, 0]}>
          <boxGeometry args={[0.5, 0.01, 0.32]} />
          <meshStandardMaterial color="#0f172a" metalness={0.4} roughness={0.5} />
        </mesh>

        {/* hinged screen, tilted back */}
        <group position={[0, -0.02, -0.34]} rotation={[-0.25, 0, 0]}>
          <mesh position={[0, 0.5, -0.02]}>
            <boxGeometry args={[1.6, 1.02, 0.06]} />
            <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.35} />
          </mesh>

          {/* screen face */}
          <mesh position={[0, 0.5, 0.02]}>
            <planeGeometry args={[1.46, 0.88]} />
            <meshStandardMaterial color="#020617" />
          </mesh>

          {/* browser chrome bar */}
          <mesh position={[0, 0.86, 0.03]}>
            <planeGeometry args={[1.36, 0.1]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
          {[-0.6, -0.52, -0.44].map((x, i) => (
            <mesh key={i} position={[x, 0.86, 0.035]}>
              <circleGeometry args={[0.02, 16]} />
              <meshStandardMaterial
                color={navDotColors[i]}
                emissive={navDotColors[i]}
                emissiveIntensity={0.6}
              />
            </mesh>
          ))}

          {/* hero gradient block */}
          <mesh position={[0, 0.62, 0.03]}>
            <planeGeometry args={[1.3, 0.28]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
          </mesh>

          {/* text lines */}
          {textLines.map((line, i) => (
            <mesh key={i} position={[-0.55 + line.width / 2, line.y, 0.03]}>
              <planeGeometry args={[line.width, 0.04]} />
              <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.8} />
            </mesh>
          ))}

          {/* content card grid */}
          {cards.map((x, i) => (
            <mesh key={i} position={[x, 0.05, 0.03]}>
              <planeGeometry args={[0.4, 0.3]} />
              <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.5} />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
}

function ChipModel() {
  const pinCount = 8;

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
      <group>
        <mesh position={[0, -0.35, 0]}>
          <boxGeometry args={[2.2, 0.1, 2.2]} />
          <meshStandardMaterial color="#0f3d2e" roughness={0.6} metalness={0.2} />
        </mesh>

        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.1, 0.3, 1.1]} />
          <meshStandardMaterial color="#111827" roughness={0.3} metalness={0.6} />
        </mesh>

        {Array.from({ length: pinCount }).map((_, i) => {
          const angle = (i / pinCount) * Math.PI * 2;
          const r = 0.75;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * r, -0.1, Math.sin(angle) * r]}
              rotation={[0, angle, 0]}
            >
              <boxGeometry args={[0.12, 0.08, 0.35]} />
              <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
            </mesh>
          );
        })}

        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[0.4, 0.05, 0.4]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

function RobotModel() {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1}>
      <group position={[0, -0.3, 0]}>
        <mesh position={[0, 0.9, 0]}>
          <boxGeometry args={[0.6, 0.5, 0.5]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.4} roughness={0.3} />
        </mesh>

        <mesh position={[-0.15, 0.92, 0.26]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.5} />
        </mesh>
        <mesh position={[0.15, 0.92, 0.26]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.5} />
        </mesh>

        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[0.9, 0.8, 0.5]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>

        <mesh position={[-0.65, 0.25, 0]}>
          <boxGeometry args={[0.2, 0.7, 0.2]} />
          <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0.65, 0.25, 0]}>
          <boxGeometry args={[0.2, 0.7, 0.2]} />
          <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
        </mesh>

        <mesh position={[-0.22, -0.5, 0]}>
          <boxGeometry args={[0.25, 0.6, 0.25]} />
          <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0.22, -0.5, 0]}>
          <boxGeometry args={[0.25, 0.6, 0.25]} />
          <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function TerminalModel() {
  const lines = [0.28, 0.05, -0.18];

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group>
        <mesh>
          <boxGeometry args={[1.8, 1.2, 0.15]} />
          <meshStandardMaterial color="#111827" roughness={0.4} metalness={0.5} />
        </mesh>

        <mesh position={[0, 0, 0.09]}>
          <planeGeometry args={[1.5, 0.9]} />
          <meshStandardMaterial color="#020617" />
        </mesh>

        {lines.map((y, i) => (
          <mesh key={i} position={[-0.5 + i * 0.15, y, 0.1]}>
            <planeGeometry args={[0.7 - i * 0.15, 0.06]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={1.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Each project gets its own backdrop mood (still one cohesive cool
// blue/violet/cyan/teal family, matching the site's palette) so the
// four browser windows don't all sit in an identical scene.
const backdropThemes: Record<
  string,
  { bg: string; cellColor: string; sectionColor: string; sparkleColor: string }
> = {
  laptop: {
    bg: "#172554", // blue-950
    cellColor: "#1e3a8a", // blue-900
    sectionColor: "#3b82f6", // blue-500
    sparkleColor: "#60a5fa", // blue-400
  },
  chip: {
    bg: "#042f2e", // teal-950
    cellColor: "#134e4a", // teal-900
    sectionColor: "#14b8a6", // teal-500
    sparkleColor: "#2dd4bf", // teal-400
  },
  robot: {
    bg: "#2e1065", // violet-950
    cellColor: "#4c1d95", // violet-900
    sectionColor: "#8b5cf6", // violet-500
    sparkleColor: "#a78bfa", // violet-400
  },
  terminal: {
    bg: "#083344", // cyan-950
    cellColor: "#164e63", // cyan-900
    sectionColor: "#06b6d4", // cyan-500
    sparkleColor: "#22d3ee", // cyan-400
  },
};

// Shared backdrop structure for every scene: a dark gradient "studio"
// behind the object, a soft grid floor receding into fog, and a few
// drifting sparkles for ambiance — so the model reads as sitting in a
// scene rather than floating on a flat card background. Colors vary
// per project via `backdropThemes`; scaled back on low-power devices
// (this module is ssr:false, so it's safe to read navigator/window
// directly during render, no hydration to mismatch).
function SceneBackdrop({ scene }: { scene: string }) {
  const lowPower = isLowPowerDevice();
  const theme = backdropThemes[scene] ?? backdropThemes.laptop;

  return (
    <>
      <color attach="background" args={[theme.bg]} />

      <Grid
        position={[0, -1.55, 0]}
        args={[20, 20]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor={theme.cellColor}
        sectionSize={2.5}
        sectionThickness={1}
        sectionColor={theme.sectionColor}
        fadeDistance={lowPower ? 5 : 9}
        fadeStrength={1.5}
        infiniteGrid
      />

      {!lowPower && (
        <Sparkles
          count={40}
          scale={[6, 3, 6]}
          size={2.2}
          speed={0.25}
          color={theme.sparkleColor}
          opacity={0.6}
        />
      )}
    </>
  );
}

function SceneContent({ scene }: { scene: string }) {
  switch (scene) {
    case "laptop":
      return <LaptopModel />;
    case "robot":
      return <RobotModel />;
    case "terminal":
      return <TerminalModel />;
    case "chip":
    default:
      return <ChipModel />;
  }
}

export default function ProjectScene3D({
  scene,
  className,
}: {
  scene: string;
  className?: string;
}) {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

  return (
    <div ref={ref} className={className}>
      {inView && (
        <Canvas
          camera={{ position: [2, 1.5, 3.2], fov: 40 }}
          dpr={isLowPowerDevice() ? 1 : [1, 1.5]}
          frameloop={inView ? "always" : "never"}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 4, 2]} intensity={1.1} />
          <pointLight position={[-3, -2, -2]} intensity={0.4} color="#8b5cf6" />

          <SceneBackdrop scene={scene} />

          {/* Separate Suspense boundaries: the environment HDRI is a
              network fetch that can lag behind the (local/instant)
              geometry — it shouldn't hold up the model appearing. */}
          <Suspense fallback={null}>
            <SceneContent scene={scene} />
          </Suspense>
          <Suspense fallback={null}>
            <Environment preset="city" background={false} />
          </Suspense>

          {/* Drag to rotate; auto-rotates when idle, pauses while the
              user is actively spinning it. No zoom/pan so it can't be
              dragged out of frame inside the small card viewport. */}
          <OrbitControls
            makeDefault
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.1}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.7}
          />
        </Canvas>
      )}
    </div>
  );
}
