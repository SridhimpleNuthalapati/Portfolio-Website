import { motion } from 'framer-motion';
import { education } from '../../data/content';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="bg-white py-12 md:py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] md:text-[3rem] font-bold mb-3 about-title-gradient">
            Education
          </h2>
          <p className="text-lg text-[#64748b]">
            Academic background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => {
            const isMasters = index === 0;
            const iconGradient = isMasters
              ? 'linear-gradient(135deg, #667eea 0%, #11998e 100%)'
              : 'linear-gradient(135deg, #f093fb 0%, #764ba2 100%)';
            const cardGradient = isMasters
              ? 'linear-gradient(135deg, #faf5ff 0%, #f0f9ff 50%, #faf5ff 100%)'
              : 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fdf2f8 100%)';
            const borderGradient = isMasters
              ? 'linear-gradient(180deg, #667eea 0%, #11998e 100%)'
              : 'linear-gradient(180deg, #f093fb 0%, #764ba2 100%)';
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="rounded-[20px] p-6 md:p-8 relative overflow-hidden flex items-center gap-5 h-full"
                  style={{
                    background: cardGradient,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
                    border: '1px solid rgba(226, 232, 240, 0.5)',
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08)',
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  {/* Left Gradient Border */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-[20px]"
                    style={{
                      background: borderGradient,
                    }}
                  />

                  {/* Icon with Gradient Background */}
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: iconGradient,
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: 'spring', stiffness: 300 },
                    }}
                  >
                    <GraduationCap size={24} className="text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#1e293b] mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-[#64748b] font-semibold mb-3">
                      {edu.university}
                    </p>
                    <p className="text-sm text-[#64748b] mb-3">
                      {edu.location}
                    </p>
                    {edu.description && (
                      <p className="text-xs text-[#64748b] leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  {/* Subtle gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]"
                    style={{
                      background: isMasters 
                        ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(17, 153, 142, 0.05) 100%)'
                        : 'linear-gradient(135deg, rgba(240, 147, 251, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
