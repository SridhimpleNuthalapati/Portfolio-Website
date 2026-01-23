import { Code2, Server, Github, Linkedin, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';

export const Summary = () => {
  const profileImageSrc = personalInfo.image || '/SRI.jpeg';

  const expertiseCards = [
    {
      key: 'frontend',
      title: 'Frontend Development',
      IconComponent: Code2,
      iconGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      bulletPoints: [
        'Built enterprise-scale applications using Angular 16 and React.js with TypeScript, implementing NgRx/Redux state management and reusable component libraries',
        'Developed multi-step Reactive Forms with real-time validation, virtual scrolling, and drag-and-drop interfaces for improved user experience',
        'Integrated WebSocket connections for streaming AI responses and multi-user collaboration, with intelligent caching and code splitting optimization',
        'Achieved WCAG 2.1 AA compliance and built comprehensive test automation using Jasmine, Cypress, Jest, and React Testing Library',
        'Integrated RESTful and GraphQL APIs with centralized error handling, RxJS streams for reactive data flow, and NgRx/Redux state management',
      ],
    },
    {
      key: 'backend',
      title: 'Backend Development & Cloud',
      IconComponent: Server,
      iconGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      bulletPoints: [
        'Designed Java 17 Spring Boot microservices deployed on AWS EKS and GCP using Docker, Kubernetes, and Helm with autoscaling',
        'Implemented OAuth 2.0, OIDC, SAML, and JWT authentication with Spring Security RBAC, achieving FedRAMP compliance',
        'Engineered Kafka and RabbitMQ systems with reliability patterns for asynchronous processing. Optimized persistence using Spring Data JPA, Hibernate, PostgreSQL, Oracle, and Redis',
        'Built CI/CD pipelines using Jenkins and GitLab CI with automated testing and blue-green deployments. Instrumented services with CloudWatch, X-Ray, Prometheus, and Grafana',
        'Developed RAG-based AI assistant using Amazon Bedrock. Secured FedRAMP-compliant AWS GovCloud infrastructure with IAM, TLS, and disaster recovery',
      ],
    },
  ];
  
  return (
    <section id="about" className="about-section-bg py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] md:text-[3rem] font-bold mb-3 about-title-gradient">
            About Me
          </h2>
          <p className="text-lg text-[#64748b]">
            Professional expertise and technical capabilities
          </p>
        </div>

        <div className="about-content">
          {/* Left Side - Image + Bio Card */}
          <div className="image-card">
            <div className="profile-image-wrapper">
              <div className="profile-image-ring">
                <img
                  src={profileImageSrc}
                  alt={`${personalInfo.name} profile photo`}
                  className="profile-image"
                />
              </div>
            </div>

            <div className="about-bio">
              <p>
                Senior Software Developer with 7+ years building enterprise-grade, cloud-native applications across telecom, financial, and federal domains. Expert in Java 17 and Spring Boot microservices with strong Angular and React experience.
              </p>
              <p>
                Skilled in designing distributed systems and event-driven architectures using Kafka and RabbitMQ. Experienced with PostgreSQL, Oracle, Redis, and cloud deployments on AWS and GCP. Focused on production reliability, security best practices, and operational excellence.
              </p>
              
              {/* Social Links */}
              <div className="social-links">
                <motion.a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  <span>GitHub</span>
                  <ExternalLink size={14} className="external-icon" />
                </motion.a>
                <motion.a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                  <ExternalLink size={14} className="external-icon" />
                </motion.a>
                <motion.a
                  href="https://medium.com/@sridhimple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen size={18} />
                  <span>Medium</span>
                  <ExternalLink size={14} className="external-icon" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Side - Expertise Cards Stacked */}
          <div className="expertise-cards">
            {expertiseCards.map((card) => {
              const Icon = card.IconComponent;
              return (
                <motion.div
                  key={card.key}
                  className="expertise-card"
                  data-key={card.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: card.key === 'frontend' ? 0.2 : 0.4 }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)',
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Header: icon + title */}
                  <div className="card-header">
                    <div
                      className={`card-icon ${card.key === 'frontend' ? 'frontend-icon' : 'backend-icon'}`}
                      style={{
                        background: card.iconGradient,
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>
                    <h4 className="card-title">{card.title}</h4>
                  </div>

                  {/* Animated Points */}
                  <ul className="card-content">
                    {card.bulletPoints.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="animated-point-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.1,
                          ease: 'easeOut',
                        }}
                      >
                        <motion.span
                          className="point-text"
                          whileHover={{
                            color: card.key === 'frontend' ? '#667eea' : '#f093fb',
                            transition: { duration: 0.2 },
                          }}
                        >
                          {point}
                        </motion.span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
