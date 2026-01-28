import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/content';

// Define vibrant gradients for each card
const cardGradients = [
  'linear-gradient(135deg, #667eea 0%, #f093fb 50%, #ff6b9d 100%)',
  'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ffa94d 100%)',
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-24 overflow-hidden">
      {/* Light & Subtle Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #faf8ff 0%, #f8f9ff 100%)',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] md:text-[3rem] font-bold mb-3 about-title-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-[#64748b]">
            Some of my notable work
          </p>
        </motion.div>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => {
            const gradient = cardGradients[index % cardGradients.length];
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: 'easeOut' }}
              >
                <motion.div
                  className="bg-white rounded-[20px] overflow-hidden cursor-pointer relative"
                  style={{
                    boxShadow: `
                      0 10px 40px rgba(0, 0, 0, 0.12),
                      0 4px 16px rgba(0, 0, 0, 0.08),
                      0 2px 8px rgba(0, 0, 0, 0.04),
                      inset 0 1px 0 rgba(255, 255, 255, 0.9)
                    `,
                    border: '1px solid rgba(226, 232, 240, 0.6)',
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: `
                      0 25px 70px rgba(102, 126, 234, 0.25),
                      0 15px 40px rgba(0, 0, 0, 0.15),
                      0 5px 15px rgba(0, 0, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 1)
                    `,
                    borderColor: 'rgba(102, 126, 234, 0.3)',
                    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  }}
                >
                  {/* Background shadow layer */}
                  <div 
                    className="absolute -inset-1 bg-gradient-to-br from-purple-200/20 via-blue-200/20 to-purple-200/20 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10"
                  />
                  {/* Project Image Area */}
                  <motion.div
                    className="relative h-[250px] md:h-[280px] overflow-hidden bg-gray-100"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                    }}
                  >
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay for better text readability */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                        />
                        {/* Hover overlay effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.4 }}
                        />
                      </>
                    ) : (
                      <>
                        {/* Fallback gradient if no image */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: gradient,
                          }}
                        />
                        {/* Subtle pattern overlay */}
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                          }}
                        />
                        {/* Animated gradient overlay */}
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, 
                              rgba(102, 126, 234, 0.3) 0%, 
                              rgba(240, 147, 251, 0.3) 50%, 
                              rgba(255, 107, 157, 0.3) 100%)`,
                          }}
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </>
                    )}
                  </motion.div>

                  {/* Card Content Area */}
                  <div className="p-6">
                    {/* Project Name */}
                    <h3 className="text-[1.3rem] font-bold text-[#1e293b] mb-3">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-[0.9rem] text-[#64748b] leading-relaxed mb-4" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 rounded-md text-[0.8rem] font-medium"
                          style={{
                            background: '#f1f5f9',
                            color: '#475569',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons - Both GitHub and Live Demo */}
                    <div className="flex gap-3">
                      {/* GitHub Button */}
                      <motion.a
                        href={project.codeUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex-1 px-4 py-2.5 rounded-lg font-semibold text-white overflow-hidden group shadow-md flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(90deg, #2563eb, #9333ea, #ec4899, #2563eb)',
                          backgroundSize: '200% 100%',
                          transformOrigin: 'center',
                          fontSize: '0.9rem',
                          fontWeight: 600,
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
                        <span className="relative z-10 flex items-center gap-2">
                          <Github size={16} />
                          <span className="hidden sm:inline">GitHub</span>
                        </span>
                      </motion.a>
                      
                      {/* Live Demo Button */}
                      <motion.a
                        href={project.demoUrl && project.demoUrl !== '#' ? project.demoUrl : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative flex-1 px-4 py-2.5 rounded-lg font-semibold text-white overflow-hidden group shadow-md flex items-center justify-center ${
                          project.demoUrl && project.demoUrl !== '#' ? '' : 'opacity-50 cursor-not-allowed pointer-events-none'
                        }`}
                        style={{
                          background: project.demoUrl && project.demoUrl !== '#' 
                            ? 'linear-gradient(90deg, #10b981, #059669, #047857, #10b981)'
                            : 'linear-gradient(90deg, #6b7280, #4b5563, #374151, #6b7280)',
                          backgroundSize: '200% 100%',
                          transformOrigin: 'center',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                        }}
                        animate={
                          project.demoUrl && project.demoUrl !== '#'
                            ? {
                                backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
                              }
                            : {}
                        }
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        whileHover={
                          project.demoUrl && project.demoUrl !== '#'
                            ? {
                                scale: 1.05,
                                filter: 'brightness(1.1)',
                                transition: {
                                  duration: 0.3,
                                  ease: 'easeInOut',
                                },
                              }
                            : {}
                        }
                        whileTap={
                          project.demoUrl && project.demoUrl !== '#'
                            ? {
                                scale: 0.95,
                                transition: { duration: 0.1 },
                              }
                            : {}
                        }
                        onClick={(e) => {
                          if (!project.demoUrl || project.demoUrl === '#') {
                            e.preventDefault();
                          }
                        }}
                      >
                        {/* Pulsing Glow Effect */}
                        {project.demoUrl && project.demoUrl !== '#' && (
                          <motion.div
                            className="absolute inset-0 rounded-lg blur-xl opacity-0"
                            style={{
                              background: 'linear-gradient(90deg, #10b981, #059669, #047857)',
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
                        )}
                        
                        {/* Hover Glow Effect */}
                        {project.demoUrl && project.demoUrl !== '#' && (
                          <motion.div
                            className="absolute -inset-2 rounded-lg blur-xl opacity-0 pointer-events-none group-hover:opacity-70"
                            style={{
                              background: 'linear-gradient(90deg, #10b981, #059669, #047857)',
                              boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)',
                            }}
                            transition={{
                              duration: 0.3,
                              ease: 'easeInOut',
                            }}
                          />
                        )}
                        
                        {/* Shimmer/Shine Effect */}
                        {project.demoUrl && project.demoUrl !== '#' && (
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
                        )}
                        
                        {/* Content */}
                        <span className="relative z-10 flex items-center gap-2">
                          <ExternalLink size={16} />
                          <span className="hidden sm:inline">Live Demo</span>
                        </span>
                      </motion.a>
                    </div>
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
