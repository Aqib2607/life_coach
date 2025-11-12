import { motion } from 'framer-motion';
import { useMemo } from 'react';

const FloatingShape = ({ 
  position, 
  color, 
  shape, 
  size = 1,
  delay = 0
}: { 
  position: { x: string; y: string };
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  size?: number;
  delay?: number;
}) => {
  const shapeClass = {
    circle: 'rounded-full',
    square: 'rounded-lg',
    triangle: 'rounded-sm transform rotate-45'
  };

  return (
    <motion.div
      className={`absolute ${shapeClass[shape]} opacity-20`}
      style={{
        left: position.x,
        top: position.y,
        width: `${size * 20}px`,
        height: `${size * 20}px`,
        backgroundColor: color,
        filter: 'blur(1px)'
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    />
  );
};

const FloatingBackground = () => {
  const shapes = useMemo(() => [
    { position: { x: '10%', y: '20%' }, color: '#007bff', shape: 'circle', size: 1.2, delay: 0 },
    { position: { x: '80%', y: '70%' }, color: '#00d2d3', shape: 'square', size: 1, delay: 1 },
    { position: { x: '20%', y: '80%' }, color: '#ff6b6b', shape: 'triangle', size: 1.5, delay: 2 },
    { position: { x: '70%', y: '30%' }, color: '#4ecdc4', shape: 'circle', size: 1.1, delay: 3 },
    { position: { x: '50%', y: '90%' }, color: '#45b7d1', shape: 'square', size: 0.8, delay: 4 },
    { position: { x: '30%', y: '10%' }, color: '#96ceb4', shape: 'triangle', size: 1.3, delay: 5 },
    { position: { x: '90%', y: '50%' }, color: '#feca57', shape: 'circle', size: 0.9, delay: 6 },
    { position: { x: '60%', y: '15%' }, color: '#ff9ff3', shape: 'square', size: 1, delay: 7 },
    { position: { x: '15%', y: '60%' }, color: '#54a0ff', shape: 'triangle', size: 1.4, delay: 8 },
    { position: { x: '85%', y: '85%' }, color: '#5f27cd', shape: 'circle', size: 1.1, delay: 9 }
  ] as const, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position}
          color={shape.color}
          shape={shape.shape}
          size={shape.size}
          delay={shape.delay}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;