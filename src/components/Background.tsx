import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useMemo } from "react";

function ParticleField({ isDark }: { isDark: boolean }) {
  const count = 3000; // Increased particle count for a denser field
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={isDark ? "#a78bfa" : "#7c3aed"}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export const Background = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <color attach="background" args={[isDark ? "#0a0a0a" : "#ffffff"]} />
        <ambientLight intensity={0.5} />
        <ParticleField isDark={isDark} />
        {/* Add a glowing sphere */}
        <Sphere args={[1, 32, 32]} position={[0, 0, -5]}>
          <meshStandardMaterial
            emissive={isDark ? "#a78bfa" : "#7c3aed"}
            emissiveIntensity={1.5}
            color={isDark ? "#4c1d95" : "#8b5cf6"}
          />
        </Sphere>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};
