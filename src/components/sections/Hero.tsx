import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Briefcase, Github, Download, Check, Copy, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/content';
import { Typewriter } from '../ui/Typewriter';
import { useState } from 'react';

export const Hero = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number; itemIndex: number } | null>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopy = async (text: string, itemType: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemType);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, item: { text: string; link?: string; type: string }, itemIndex: number) => {
    // Ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, itemIndex });
    setTimeout(() => setRipple(null), 600);

    // Handle copy or link
    if (item.link) {
      setTimeout(() => {
        window.open(item.link, '_blank', 'noopener,noreferrer');
      }, 150);
    } else {
      handleCopy(item.text, item.type);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="relative gradient-hero min-h-screen flex items-center pt-16 pb-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - 60% */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            variants={itemVariants}
          >
            <motion.p
              className="text-sm text-gray-600 uppercase tracking-wide flex items-center gap-2"
              variants={itemVariants}
            >
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: "70% 70%" }}
              >
                👋
              </motion.span>
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900"
              variants={itemVariants}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gradient"
              variants={itemVariants}
            >
              <Typewriter
                roles={[
                  'Senior Software Developer',
                  'Full Stack Developer',
                  'Backend Engineer',
                ]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseDuration={2000}
              />
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed mt-6 max-w-2xl"
              variants={itemVariants}
            >
              {personalInfo.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              {/* Download Resume Button with Advanced Animations */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="relative px-6 py-3 rounded-lg font-semibold text-white overflow-hidden group shadow-md animate-float"
                style={{
                  background: 'linear-gradient(90deg, #2563eb, #9333ea, #ec4899, #2563eb)',
                  backgroundSize: '200% 100%',
                  transformOrigin: 'center',
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
                
                {/* Hover Glow Effect - Extended Beyond Button */}
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
                  <motion.span
                    className="group-hover:animate-bounce"
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'easeInOut',
                    }}
                    whileHover={{
                      y: [0, 4, 0],
                      transition: {
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      },
                    }}
                  >
                    <Download size={18} />
                  </motion.span>
                  Download Resume
                </span>
              </motion.button>

              {/* Contact Me Button with Gradient Border and Animations */}
              <motion.div
                className="relative inline-block rounded-lg p-[2px] animate-float"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #9333ea, #ec4899, #3b82f6)',
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 3s linear infinite',
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}
              >
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="relative w-full px-6 py-3 rounded-lg font-semibold overflow-hidden group shadow-md transition-all duration-300 ease-in-out"
                  style={{
                    background: 'white',
                    transformOrigin: 'center',
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 25px -5px rgba(147, 51, 234, 0.3), 0 10px 10px -5px rgba(147, 51, 234, 0.2)',
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
                  {/* Hover Background Gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                  
                  {/* Content with Gradient Text */}
                  <span className="relative z-10 text-gray-700 font-semibold transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent">
                    Contact Me
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - 40% */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 overflow-hidden"
              style={{
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Animated Gradient Orbs Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
                  animate={{
                    x: [0, -20, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"
                  animate={{
                    x: [0, 15, 0],
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              
              {/* Title */}
              <motion.h3
                className="relative z-10 text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                Get in Touch
                <motion.div
                  className="mt-2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </motion.h3>
              
              <div className="relative z-10 space-y-3">
                {[
                  { icon: Mail, text: personalInfo.email, type: 'email', gradient: 'from-blue-500 to-cyan-500' },
                  { icon: Phone, text: personalInfo.phone, type: 'phone', gradient: 'from-green-500 to-emerald-500' },
                  { icon: Briefcase, text: personalInfo.linkedin, link: `https://${personalInfo.linkedin}`, type: 'linkedin', gradient: 'from-blue-600 to-blue-400' },
                  { icon: Github, text: personalInfo.github, link: `https://${personalInfo.github}`, type: 'github', gradient: 'from-purple-600 to-pink-500' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const isCopied = copiedItem === item.type;
                  const showCopyIcon = !item.link && !isCopied;
                  
                  return (
                    <motion.div
                      key={index}
                      className="relative flex items-center gap-3 p-4 rounded-lg cursor-pointer group overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{
                        x: 8,
                        scale: 1.02,
                        boxShadow: '0 10px 15px -3px rgba(147, 51, 234, 0.2), 0 4px 6px -2px rgba(147, 51, 234, 0.1)',
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => handleClick(e, item, index)}
                    >
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 opacity-0 group-hover:opacity-100" />
                      
                      {/* Left Gradient Border on Hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[4px] opacity-0 group-hover:opacity-100 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                      
                      {/* Ripple Effect */}
                      <AnimatePresence>
                        {ripple && ripple.itemIndex === index && (
                          <motion.div
                            className="absolute rounded-full bg-white/40 pointer-events-none z-0"
                            style={{
                              left: ripple.x - 20,
                              top: ripple.y - 20,
                              width: 40,
                              height: 40,
                            }}
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 6, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                          />
                        )}
                      </AnimatePresence>
                      
                      {/* Icon with Gradient Background */}
                      <motion.div
                        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center p-2 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <Icon size={20} className="text-white" />
                      </motion.div>
                      
                      {/* Text */}
                      <div className="relative z-10 flex-1">
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 font-medium">
                          {item.text}
                        </span>
                      </div>
                      
                      {/* Copy Icon, Success Checkmark, or External Link Icon */}
                      <AnimatePresence mode="wait">
                        {isCopied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="relative z-10"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                              <Check size={16} className="text-white" />
                            </div>
                          </motion.div>
                        ) : showCopyIcon ? (
                          <motion.div
                            key="copy"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="relative z-10 opacity-0 group-hover:opacity-100"
                            title="Click to copy"
                            whileHover={{
                              scale: 1.1,
                            }}
                            whileTap={{
                              scale: 0.95,
                            }}
                            transition={{ duration: 0.1 }}
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-purple-500 group-hover:to-pink-500 flex items-center justify-center">
                              <Copy size={16} className="text-white" />
                            </div>
                          </motion.div>
                        ) : item.link ? (
                          <motion.div
                            key="external"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative z-10 opacity-0 group-hover:opacity-100"
                            whileHover={{
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.1 }}
                          >
                            <ExternalLink size={18} className="text-gray-400 group-hover:text-purple-600" />
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                      
                      {/* "Copied!" Toast */}
                      <AnimatePresence>
                        {isCopied && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -20, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap z-20"
                          >
                            Copied!
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
