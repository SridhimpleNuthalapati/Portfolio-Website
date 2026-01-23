import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../../data/content';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden about-section-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] md:text-[3rem] font-bold mb-3 about-title-gradient">
            Get In Touch
          </h2>
          <p className="text-lg text-[#64748b] max-w-[600px] mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message!
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-10 max-w-6xl mx-auto items-start">
          {/* Left Column - Contact Information Card */}
          <motion.div
            className="relative rounded-[20px] p-10 overflow-hidden h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #ddd6fe 0%, #c7d2fe 20%, #fbcfe8 40%, #e9d5ff 60%, #ddd6fe 80%, #c7d2fe 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
            }}
          >
            {/* Decorative circle */}
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                transform: 'translate(30%, 30%)',
              }}
            />

            <div className="relative z-10">
              <h3 className="text-[1.5rem] font-bold text-[#1e293b] mb-4">
                Contact Information
              </h3>
              <p className="text-[0.9rem] text-[#64748b] leading-relaxed mb-8">
                Feel free to reach out! I'm here to help with your project needs.
              </p>

              {/* Contact Details */}
              <div className="space-y-5">
                {/* Phone */}
                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                    <Phone size={22} className="text-white relative z-10" strokeWidth={2} />
                  </motion.div>
                  <motion.p 
                    className="text-[0.95rem] text-[#1e293b] font-medium"
                    whileHover={{ color: '#667eea' }}
                    transition={{ duration: 0.3 }}
                  >
                    {personalInfo.phone}
                  </motion.p>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      boxShadow: '0 4px 15px rgba(240, 147, 251, 0.4)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                      boxShadow: '0 8px 25px rgba(240, 147, 251, 0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                    <Mail size={22} className="text-white relative z-10" strokeWidth={2} />
                  </motion.div>
                  <motion.p 
                    className="text-[0.95rem] text-[#1e293b] font-medium"
                    whileHover={{ color: '#f5576c' }}
                    transition={{ duration: 0.3 }}
                  >
                    {personalInfo.email}
                  </motion.p>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                      boxShadow: '0 4px 15px rgba(17, 153, 142, 0.4)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 8px 25px rgba(17, 153, 142, 0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                    <MapPin size={22} className="text-white relative z-10" strokeWidth={2} />
                  </motion.div>
                  <motion.p 
                    className="text-[0.95rem] text-[#1e293b] font-medium"
                    whileHover={{ color: '#11998e' }}
                    transition={{ duration: 0.3 }}
                  >
                    St. Louis, Missouri, US
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white rounded-[20px] p-10 h-full flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-[0.85rem] text-[#64748b] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full pb-2 border-0 border-b border-[#e2e8f0] text-[0.95rem] text-[#1e293b] focus:outline-none focus:border-[#667eea] focus:border-b-2 transition-colors"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-[0.85rem] text-[#64748b] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full pb-2 border-0 border-b border-[#e2e8f0] text-[0.95rem] text-[#1e293b] focus:outline-none focus:border-[#667eea] focus:border-b-2 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-[0.85rem] text-[#64748b] mb-2">
                  Your Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What can I help you with?"
                  className="w-full pb-2 border-0 border-b border-[#e2e8f0] text-[0.95rem] text-[#1e293b] focus:outline-none focus:border-[#667eea] focus:border-b-2 transition-colors"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[0.85rem] text-[#64748b] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write here your message"
                  rows={5}
                  className="w-full pb-2 border-0 border-b border-[#e2e8f0] text-[0.95rem] text-[#1e293b] focus:outline-none focus:border-[#667eea] focus:border-b-2 transition-colors resize-none"
                  required
                />
              </div>

              {/* Send Button */}
              <motion.button
                type="submit"
                className="relative w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-white overflow-hidden group shadow-md mt-auto"
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
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
