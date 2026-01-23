import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  const baseClasses = 'bg-white rounded-xl border border-gray-200 p-8 relative overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={hover ? { scale: 1.02 } : {}}
    >
      {/* Gradient overlay on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 hover:from-purple-500/5 hover:via-blue-500/5 hover:to-pink-500/5 transition-all duration-300 pointer-events-none rounded-xl" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
