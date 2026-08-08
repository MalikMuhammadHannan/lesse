"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, Text3D } from "@react-three/drei";
import type { Mesh } from "three";

const FONT_URL = "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json";

function ChromeS() {
  const meshRef = useRef<Mesh>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.05;

    const { x, y } = state.pointer;
    target.current.x = y * 0.25;
    target.current.y = x * 0.35;

    meshRef.current.rotation.x += (target.current.x - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.z += (target.current.y * 0.2 - meshRef.current.rotation.z) * 0.05;
  });

  return (
    <Center>
      <Text3D
        ref={meshRef}
        font={FONT_URL}
        size={3.2}
        height={0.9}
        curveSegments={24}
        bevelEnabled
        bevelThickness={0.06}
        bevelSize={0.04}
        bevelSegments={8}
      >
        C
        <meshPhysicalMaterial
          color="#e4e4e4"
          metalness={1}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Text3D>
    </Center>
  );
}

export default function Hero3DLogo() {
  const [ready, setReady] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        onCreated={() => setReady(true)}
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.8s ease" }}
      >
        <ambientLight intensity={0.4} />
        <spotLight position={[5, 5, 5]} intensity={2} angle={0.3} penumbra={1} />
        <Environment preset="studio" />
        <ChromeS />
      </Canvas>
    </div>
  );
}
