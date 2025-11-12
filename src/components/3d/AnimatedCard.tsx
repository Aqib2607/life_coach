import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: 'lift' | 'tilt' | 'glow' | 'scale';
}

const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0, 
  hoverEffect = 'lift' 
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case 'lift':
        return {
          y: -12,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          transition: { duration: 0.3 }
        };
      case 'tilt':
        return {
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
          transition: { duration: 0.3 }
        };
      case 'glow':
        return {
          boxShadow: '0 0 60px hsl(210 100% 70% / 0.6)',
          transition: { duration: 0.3 }
        };
      case 'scale':
        return {
          scale: 1.05,
          transition: { duration: 0.3 }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ 
        opacity: 0, 
        y: 50,
        rotateX: 10 
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0 
      }}
      transition={{ 
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={getHoverAnimation()}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <motion.div
        animate={isHovered ? { rotateX: 2, rotateY: 2 } : { rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;