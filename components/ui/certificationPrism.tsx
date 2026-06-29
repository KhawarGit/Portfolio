"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.4;
    mesh.current.rotation.x = Math.sin(t * 0.3) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#7dd3fc"
          roughness={0.15}
          metalness={0.8}
          emissive="#4f46e5"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Inner glow core */}
      <mesh scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

export default function CertificationCore() {
  return (
    <div className="h-28 w-28">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />

        <Core />

        {/* optional (disable if too heavy) */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}