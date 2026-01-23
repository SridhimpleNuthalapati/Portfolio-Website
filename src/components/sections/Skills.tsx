import { motion } from 'framer-motion';
import { skills } from '../../data/content';

const categoryConfig: Record<string, { 
  gradient: string; 
  accentColor: string;
  iconBg: string;
}> = {
  '#3b82f6': { 
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #f0f9ff 50%, #faf5ff 100%)',
    accentColor: '#3b82f6',
    iconBg: 'rgba(59, 130, 246, 0.1)'
  },
  '#667eea': { 
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #f0f9ff 50%, #faf5ff 100%)',
    accentColor: '#667eea',
    iconBg: 'rgba(102, 126, 234, 0.1)'
  },
  '#f97316': { 
    gradient: 'linear-gradient(135deg, #fff7ed 0%, #fff1f2 50%, #fff7ed 100%)',
    accentColor: '#f5576c',
    iconBg: 'rgba(245, 87, 108, 0.1)'
  },
  '#10b981': { 
    gradient: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0fdf4 100%)',
    accentColor: '#11998e',
    iconBg: 'rgba(17, 153, 142, 0.1)'
  },
  '#ef4444': { 
    gradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fdf2f8 100%)',
    accentColor: '#f093fb',
    iconBg: 'rgba(240, 147, 251, 0.1)'
  },
  '#a855f7': { 
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #faf5ff 100%)',
    accentColor: '#764ba2',
    iconBg: 'rgba(118, 75, 162, 0.1)'
  },
  '#14b8a6': { 
    gradient: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 50%, #ecfdf5 100%)',
    accentColor: '#38ef7d',
    iconBg: 'rgba(56, 239, 125, 0.1)'
  },
  '#764ba2': { 
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #faf5ff 100%)',
    accentColor: '#764ba2',
    iconBg: 'rgba(118, 75, 162, 0.1)'
  },
  '#ec4899': { 
    gradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fdf2f8 100%)',
    accentColor: '#ec4899',
    iconBg: 'rgba(236, 72, 153, 0.1)'
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="bg-white py-12 md:py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] md:text-[3rem] font-bold mb-3 about-title-gradient">
            Technical Skills
          </h2>
          <p className="text-lg text-[#64748b]">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7" style={{ gridAutoRows: '1fr' }}>
          {skills.map((category, index) => {
            const config = categoryConfig[category.accentColor] || categoryConfig['#3b82f6'];
            return (
              <motion.div
                key={index}
                className="group relative flex"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-[16px] p-6 md:p-7 relative overflow-hidden flex flex-col w-full"
                  style={{
                    background: config.gradient,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08)',
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  {/* Icon and Title Container - Side by Side */}
                  <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    {/* Icon Container */}
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: config.iconBg,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: 'spring', stiffness: 300 },
                      }}
                    >
                      <span 
                        className="text-2xl"
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
                      >
                        {category.icon}
                      </span>
                    </motion.div>

                    {/* Category Title */}
                    <h3 
                      className="text-lg font-bold flex-shrink-0"
                      style={{ color: config.accentColor }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 items-start">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-gray-200 text-gray-700 cursor-pointer"
                        style={{
                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.02 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                          borderColor: config.accentColor,
                          color: config.accentColor,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
