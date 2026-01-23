import { motion } from 'framer-motion';

interface SkillPillProps {
  skill: string;
}

export const SkillPill = ({ skill }: SkillPillProps) => {
  return (
    <motion.span
      className="inline-block px-3 py-1 rounded-md bg-gradient-to-r from-gray-100 to-gray-50 text-sm text-gray-700 font-medium m-1 border border-gray-200/50"
      whileHover={{ 
        scale: 1.05,
        background: 'linear-gradient(to right, #f3e8ff, #dbeafe)',
        borderColor: '#a78bfa',
      }}
      transition={{ duration: 0.2 }}
    >
      {skill}
    </motion.span>
  );
};
