import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const Button = ({ children, onClick, href, className = '' }: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold relative overflow-hidden group shadow-md';
  
  const buttonContent = (
    <>
      {/* Pulsing Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg blur-xl opacity-0"
        style={{
          background: 'linear-gradient(90deg, #2563eb, #9333ea, #ec4899)',
        }}
        animate={{
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute -inset-2 rounded-lg blur-xl opacity-0 pointer-events-none group-hover:opacity-70"
        style={{
          background: 'linear-gradient(90deg, #2563eb, #9333ea, #ec4899)',
          boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      />
      
      {/* Shimmer/Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          transition: {
            duration: 0.6,
            ease: 'easeInOut',
          },
        }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${className}`}
        style={{
          background: 'linear-gradient(90deg, #2563eb, #9333ea, #ec4899, #2563eb)',
          backgroundSize: '200% 100%',
          transformOrigin: 'center',
          color: 'white',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        whileHover={{
          scale: 1.05,
          filter: 'brightness(1.1)',
          transition: {
            duration: 0.3,
            ease: 'easeInOut',
          },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={{
        background: 'linear-gradient(90deg, #2563eb, #9333ea, #ec4899, #2563eb)',
        backgroundSize: '200% 100%',
        transformOrigin: 'center',
        color: 'white',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      }}
      whileHover={{
        scale: 1.05,
        filter: 'brightness(1.1)',
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      {buttonContent}
    </motion.button>
  );
};
