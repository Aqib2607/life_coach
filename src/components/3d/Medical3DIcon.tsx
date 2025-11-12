import { Suspense } from 'react';
import { motion } from 'framer-motion';

interface Medical3DIconProps {
  icon: 'heart' | 'stethoscope' | 'pill' | 'cross';
  color?: string;
  size?: number;
  autoRotate?: boolean;
}

const iconStyles = {
  heart: '❤️',
  cross: '✚',
  pill: '💊',
  stethoscope: '🩺'
};

const Medical3DIcon = ({ icon, color = '#007bff', size = 100, autoRotate = true }: Medical3DIconProps) => {
  return (
    <motion.div
      style={{ width: size, height: size }}
      className="flex items-center justify-center"
      animate={autoRotate ? { rotateY: 360 } : {}}
      transition={autoRotate ? { duration: 4, repeat: Infinity, ease: "linear" } : {}}
    >
      <motion.div
        className="text-6xl transform-3d"
        style={{ color, fontSize: size * 0.6 }}
        whileHover={{ scale: 1.2, rotateX: 15, rotateY: 15 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {iconStyles[icon] || iconStyles.cross}
      </motion.div>
    </motion.div>
  );
};

export default Medical3DIcon;