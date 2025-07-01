"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/theme-context";

function FloatingShape({
  position,
  color,
  scale = 1,
  theme,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  theme: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  // Adjust material properties based on theme
  const materialProps =
    theme === "light"
      ? { roughness: 0.3, metalness: 0.6, distort: 0.4 }
      : { roughness: 0.1, metalness: 0.8, distort: 0.6 };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={materialProps.distort}
          speed={1.5}
          roughness={materialProps.roughness}
          metalness={materialProps.metalness}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ theme }: { theme: string }) {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  const particleColor = theme === "light" ? "#94a3b8" : "#64748b";
  const particleOpacity = theme === "light" ? 0.4 : 0.6;

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={particleColor}
        transparent
        opacity={particleOpacity}
      />
    </points>
  );
}

function Scene({
  scrollProgress,
  theme,
}: {
  scrollProgress: any;
  theme: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const rotationY = useTransform(scrollProgress, [0, 1], [0, Math.PI * 2]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY.get();
    }
  });

  // Theme-aware colors
  const lightModeColors = {
    shapes: ["#2563eb", "#7c3aed", "#0891b2", "#d97706", "#dc2626"], // Darker, more vibrant for light mode
    ambient: 0.7,
    pointLight1: 0.3,
    pointLight2: 0.2,
  };

  const darkModeColors = {
    shapes: ["#3b82f6", "#8b5cf6", "#06b6d4", "#f59e0b", "#ef4444"], // Original colors for dark mode
    ambient: 0.4,
    pointLight1: 0.5,
    pointLight2: 0.3,
  };

  const colors = theme === "light" ? lightModeColors : darkModeColors;

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={colors.ambient} />
      <pointLight position={[10, 10, 10]} intensity={colors.pointLight1} />
      <pointLight
        position={[-10, -10, -10]}
        intensity={colors.pointLight2}
        color="#60a5fa"
      />

      <group ref={groupRef}>
        <ParticleField theme={theme} />
        <FloatingShape
          position={[-3, 2, 0]}
          color={colors.shapes[0]}
          scale={0.8}
          theme={theme}
        />
        <FloatingShape
          position={[3, -1, -2]}
          color={colors.shapes[1]}
          scale={0.6}
          theme={theme}
        />
        <FloatingShape
          position={[0, 1, -4]}
          color={colors.shapes[2]}
          scale={0.4}
          theme={theme}
        />
        <FloatingShape
          position={[-2, -2, 2]}
          color={colors.shapes[3]}
          scale={0.5}
          theme={theme}
        />
        <FloatingShape
          position={[4, 2, -1]}
          color={colors.shapes[4]}
          scale={0.3}
          theme={theme}
        />
      </group>
    </Suspense>
  );
}

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[40vh] w-full -mt-20 -mb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [0, 0, 8],
        }}
        style={{
          background: "transparent",
        }}
      >
        <Scene scrollProgress={scrollYProgress} theme={theme} />
      </Canvas>
    </motion.div>
  );
}
