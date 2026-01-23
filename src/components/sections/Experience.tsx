import { motion } from 'framer-motion';
import { experience } from '../../data/content';
import { SkillPill } from '../ui/SkillPill';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="bg-white py-16 md:py-20 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] md:text-[3rem] font-bold mb-3 about-title-gradient">
            Professional Experience
          </h2>
          <p className="text-lg text-[#64748b]">
            My journey in software development
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 to-purple-200" />

          <div className="space-y-12 md:space-y-16">
            {experience.map((exp, index) => {
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-12 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full border-4 border-purple-500 shadow-lg relative group overflow-hidden ${
                        exp.company === 'General Dynamics Information Technology' ? 'bg-white' : ''
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className={`w-full h-full rounded-full ${
                            exp.company === 'General Dynamics Information Technology' 
                              ? 'object-contain p-2' 
                              : 'object-cover'
                          }`}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-white');
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      {!exp.logo && (
                        <div className="w-full h-full bg-white flex items-center justify-center">
                          <Briefcase 
                            size={20} 
                            className="text-purple-500"
                          />
                        </div>
                      )}
                      {/* Pulsing ring effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-400 pointer-events-none"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-24 md:ml-20 md:w-[calc(100%-5rem)]">
                    <motion.div
                      className="bg-white rounded-xl border-2 border-gray-200 pt-8 pb-6 px-6 md:pt-10 md:pb-8 md:px-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 relative group"
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      {/* Gradient border effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl" />
                      
                      {/* Date Badge */}
                      <div className="absolute -top-3 right-4 md:-top-3 md:right-6 z-20">
                        <motion.span
                          className="text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg whitespace-nowrap block"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.date}
                        </motion.span>
                      </div>

                      <div className="relative z-10">
                        <div className="mb-4">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                          <p className="text-base text-purple-600 font-semibold">{exp.company}</p>
                          <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
                        </div>

                        <div className="border-t border-gray-100 my-4"></div>

                        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">{exp.description}</p>

                        <div className="mb-6">
                          <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.slice(0, 5).map((responsibility, respIndex) => (
                              <motion.li
                                key={respIndex}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: respIndex * 0.03 }}
                              >
                                <span className="text-purple-500 mt-1.5 flex-shrink-0">▸</span>
                                <span className="text-gray-600 leading-relaxed text-sm">{responsibility}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 8).map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: techIndex * 0.05 }}
                              >
                                <SkillPill skill={tech} />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
