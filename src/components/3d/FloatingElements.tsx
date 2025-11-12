import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';
import { Suspense } from 'react';

const FloatingShape = ({ position, color, shape }: { position: [number, number, number], color: string, shape: 'sphere' | 'box' | 'torus' }) => {
  const renderShape = () => {
    switch (shape) {
      case 'sphere':
        return <Sphere args={[0.5]} material-color={color} />;
      case 'box':
        return <Box args={[0.8, 0.8, 0.8]} material-color={color} />;
      case 'torus':
        return <Torus args={[0.6, 0.2, 8, 16]} material-color={color} />;
      default:
        return <Sphere args={[0.5]} material-color={color} />;
    }
  };

  return (
    <Float
      speed={Math.random() * 2 + 1}
      rotationIntensity={Math.random() * 2}
      floatIntensity={Math.random() * 2}
      position={position}
    >
      {renderShape()}
    </Float>
  );
};

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          
          <FloatingShape position={[-8, 4, -5]} color="#007bff" shape="sphere" />
          <FloatingShape position={[8, -3, -3]} color="#00d2d3" shape="box" />
          <FloatingShape position={[-6, -4, -4]} color="#ff6b6b" shape="torus" />
          <FloatingShape position={[6, 5, -6]} color="#4ecdc4" shape="sphere" />
          <FloatingShape position={[0, -6, -5]} color="#45b7d1" shape="box" />
          <FloatingShape position={[-4, 2, -7]} color="#96ceb4" shape="torus" />
          <FloatingShape position={[4, -1, -3]} color="#feca57" shape="sphere" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingElements;