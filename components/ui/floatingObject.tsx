"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Edges } from "@react-three/drei";

export default function FloatingPrism({ color = "#22d3ee" }) {
  return (
    <div className="h-20 w-20 opacity-80">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
          <mesh rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />

            {/* transparent core */}
            <meshStandardMaterial
              color={color}
              transparent
              opacity={0.08}
              roughness={0.2}
              metalness={1}
            />

            {/* glowing wireframe edges */}
            <Edges color={color} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}