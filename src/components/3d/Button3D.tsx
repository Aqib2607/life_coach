import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Button3DProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button3D = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}: Button3DProps) => {
  const baseClasses = 'relative font-semibold rounded-xl transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'gradient-primary text-white shadow-3d hover:shadow-glow-primary',
    secondary: 'gradient-secondary text-white shadow-3d hover:shadow-glow-secondary',
    accent: 'gradient-accent text-white shadow-3d hover:shadow-glow-primary',
    glass: 'glass text-foreground hover:text-primary border border-glass-border hover:border-primary/30'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98,
        y: disabled ? 0 : 0
      }}
      transition={{ 
        type: 'spring',
        stiffness: 400,
        damping: 17
      }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: variant === 'glass' 
            ? 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.button>
  );
};

export default Button3D;