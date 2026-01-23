import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/content';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-900 text-gray-400 py-6 md:py-8 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-5 md:mb-6 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white text-lg font-semibold leading-tight mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </p>
            <p className="text-sm leading-snug">Senior Software Developer</p>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-2 leading-tight">Quick Links</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm relative group leading-snug"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-2 leading-tight">Social</h4>
            <div className="flex gap-2">
              {[
                { icon: Github, href: `https://${personalInfo.github}`, color: 'hover:from-gray-700 hover:to-gray-600' },
                { icon: Linkedin, href: `https://${personalInfo.linkedin}`, color: 'hover:from-blue-700 hover:to-blue-600' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, color: 'hover:from-purple-700 hover:to-indigo-600' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`bg-gray-800 hover:bg-gradient-to-br ${social.color} rounded-full p-2 text-gray-400 hover:text-white transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800/60 pt-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 text-xs md:text-sm leading-snug">
            © 2026 {personalInfo.name}. All rights reserved. Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
