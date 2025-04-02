import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useMemo } from "react";

function ParticleField({ isDark }: { isDark: boolean }) {
  const count = 8000; // Further increased particle count for better visibility
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30; // Expanded particle field
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
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
        size={0.2} // Further increased particle size
        color={isDark ? "#a78bfa" : "#7c3aed"}
        transparent
        opacity={0.8} // Slightly reduced opacity for a softer look
        sizeAttenuation
      />
    </points>
  );
}

export const Background = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <color attach="background" args={[isDark ? "#0a0a0a" : "#ffffff"]} />
        <ambientLight intensity={0.8} /> {/* Increased ambient light */}
        <ParticleField isDark={isDark} />
        {/* Enhanced glowing sphere */}
        <Sphere args={[2, 32, 32]} position={[0, 0, -15]}>
          <meshStandardMaterial
            emissive={isDark ? "#a78bfa" : "#7c3aed"}
            emissiveIntensity={3.5} // Further increased emissive intensity
            color={isDark ? "#4c1d95" : "#8b5cf6"}
          />
        </Sphere>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5} // Slightly faster rotation
        />
      </Canvas>
      <div
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/40 to-black/80 animate-gradient"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};
