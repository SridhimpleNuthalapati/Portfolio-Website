export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  image?: string;
}

export interface SummaryItem {
  icon: string;
  title: string;
  items: string[];
  accentColor: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
  accentColor: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  university: string;
  location: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  image?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Sridhimple Nuthalapati",
  title: "Senior Fullstack Developer | Software Engineer",
  subtitle: "Senior Fullstack Developer | Software Engineer",
  description: "Senior Software Developer specializing in enterprise Java Spring Boot microservices and modern JavaScript frameworks. Delivered cloud-native applications across telecom, financial, and federal sectors with expertise in distributed systems, Kafka event streaming, and production-grade observability.",
  email: "Sridhimplenuthalapati@gmail.com",
  phone: "+1 (314) 224-2814",
  linkedin: "linkedin.com/in/sridhimple-nuthalapati",
  github: "github.com/SridhimpleNuthalapati",
};

export const summary: SummaryItem[] = [
  {
    icon: "🎨",
    title: "Frontend & Mobile Development",
    accentColor: "blue",
    items: [
      "Built secure, high-performing user interfaces with React/Redux, Angular/NgRx, and Vue.js/Vuex applying component-driven architecture",
      "Implemented lazy loading, code-splitting, and performance optimization reducing page load times by 40%",
      "Ensured WCAG 2.1 accessibility compliance and cross-browser compatibility for enterprise applications",
      "Developed responsive UIs using modern design systems with TypeScript and state management patterns",
    ],
  },
  {
    icon: "⚙️",
    title: "Backend Development & Cloud Architecture",
    accentColor: "purple",
    items: [
      "Engineered distributed microservices using Java Spring Boot with RESTful APIs and GraphQL endpoints",
      "Implemented event-driven architectures with Apache Kafka, RabbitMQ processing high-volume transactions",
      "Deployed cloud-native applications on AWS and GCP using Docker, Kubernetes, and Terraform",
      "Established CI/CD pipelines with Jenkins and GitLab CI reducing deployment time by 60%",
    ],
  },
];

export const experience: Experience[] = [
  {
    title: "Senior Software Developer",
    company: "T-Mobile",
    location: "Overland Park, Kansas",
    date: "June 2024 – Present",
    description: "Contributed to T-Mobile's Unified Subscriber Management (USM) Portal, an enterprise web platform that streamlines subscriber plan migrations and 5G service activations. Developed full-stack features across Angular dashboard and Java 17/Spring Boot microservices, aligning implementation with security and reliability standards.",
    responsibilities: [
      "Implemented customer-facing subscriber portal using Angular 16, TypeScript with mobile-first responsive UI, reusable component libraries, and Storybook documentation",
      "Developed NgRx state management with lazy-loaded routes and built multi-step Reactive Forms plan-migration flow using RxJS for fast navigation and real-time validation",
      "Integrated REST APIs using Angular HTTP Client with WebSocket support for real-time updates, centralized error handling via HTTP interceptors, and intelligent caching strategies",
      "Designed RESTful microservices using Java 17 and Spring Boot 3.1 with layered architecture, supporting scalable subscriber management and activation workflows",
      "Built a RAG-based support assistant on Amazon Bedrock, implementing document ingestion from internal KB/runbooks, embedding generation, and hybrid retrieval",
      "Implemented circuit breaker patterns using Resilience4j to handle downstream service failures gracefully, configuring fallback mechanisms, bulkhead isolation, and retry strategies",
      "Deployed containerized microservices on AWS EKS using Docker, Kubernetes, and Helm charts with Horizontal Pod Autoscaling for high availability",
      "Engineered CI/CD pipelines using Jenkins and GitLab CI with automated testing, security scanning, artifact storage, and blue-green deployments",
    ],
    technologies: ["Java 17", "Spring Boot 3.1", "Spring Security", "Angular 16", "TypeScript", "NgRx", "PostgreSQL", "Apache Kafka", "Redis", "AWS EKS", "Docker", "Kubernetes", "Helm", "Terraform", "Amazon Bedrock", "Jenkins", "GitLab CI", "Prometheus", "Grafana"],
    logo: "/T-Mobile.jpg",
  },
  {
    title: "Software Developer",
    company: "General Dynamics Information Technology",
    location: "Remote",
    date: "July 2022 – Dec 2023",
    description: "Contributed to a FedRAMP-compliant federal operations platform on AWS GovCloud used by analysts and auditors for secure document management, data visualization, and compliance reporting. Delivered full-stack features across React and Java/Spring Boot microservices.",
    responsibilities: [
      "Designed modular React.js applications with Redux, React Router, and Context API, seamlessly integrating with Spring Boot APIs to streamline data visualization, document management, and workflow approvals",
      "Enhanced UI/UX and implemented ADA accessibility standards, enabling analysts and compliance officers to navigate data visualizations, documents, and supporting forms with improved efficiency",
      "Built React component architecture with lazy loading and code splitting, reducing initial page load times and optimizing application performance for low-bandwidth government networks",
      "Implemented Spring Security supporting OAuth 2.0 / OIDC-based authentication, with SAML integration for legacy federal identity providers, and JWT-based service-to-service security",
      "Engineered RESTful APIs with layered architecture and connection pooling, reducing API latency and efficiently handling thousands of concurrent requests for mission-critical operations",
      "Designed the async workflow architecture using RabbitMQ by defining message contracts and reliability patterns (retry/backoff, DLQ, idempotent handlers) to decouple long-running document/compliance processing",
      "Containerized Java services and React apps using Docker; deployed on AWS GovCloud with Kubernetes, implementing rolling deployments and autoscaling",
      "Secured cloud infrastructure with IAM role-based access, TLS encryption, and VPC networking, ensuring strict compliance with federal security requirements and FedRAMP standards",
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "React.js", "Redux", "React Router", "PostgreSQL", "RabbitMQ", "Redis", "AWS GovCloud", "AWS RDS", "AWS S3", "Docker", "Kubernetes", "Jenkins", "Jest", "React Testing Library", "JUnit", "Mockito"],
    logo: "/gdit.png",
  },
  {
    title: "Full Stack Developer",
    company: "Raymond James Financial",
    location: "Remote",
    date: "Feb 2021 – Jun 2022",
    description: "Contributed to the Relationship Management Center (RMC), an enterprise platform enabling financial advisors to onboard clients, service accounts, and manage secure document workflows. Developed Spring Boot microservices and Angular frontend modules to replace legacy monolithic systems.",
    responsibilities: [
      "Designed advisor onboarding and account servicing workflows using Angular Reactive Forms with multi-step validation, cross-field business rules, and error handling to reduce data entry errors",
      "Developed client profile and document history screens with virtual scrolling, server-side pagination, and RxJS streams, maintaining UI responsiveness when rendering large datasets",
      "Created document upload module with drag-and-drop functionality, client-side file validation, progress tracking, and retry logic, reducing failed uploads and improving document processing reliability",
      "Implemented RESTful APIs for onboarding and account updates using Spring Boot with request validation, idempotency patterns, and standardized error contracts",
      "Integrated GraphQL APIs and schema design (queries, mutations, subscriptions) to aggregate data across microservices, reduce over-fetching/under-fetching, and improve performance",
      "Created transactional persistence with Spring Data JPA and Hibernate on Oracle using optimistic locking and rollback handling to maintain data integrity during concurrent advisor operations",
      "Defined Kafka topic strategy and event schemas for onboarding milestones and document status (partitioning, consumer groups, ordering guarantees), enabling real-time workflow visibility",
      "Enhanced Jenkins CI/CD pipelines with Maven builds, automated JUnit testing, and SonarQube quality gates to enforce code standards and reduce regression defects",
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "Angular", "TypeScript", "RxJS", "Oracle", "Apache Kafka", "Docker", "Jenkins", "Maven", "SonarQube", "AWS CloudWatch"],
    logo: "/raymond.webp",
  },
  {
    title: "Software Developer",
    company: "MindMade Technologies",
    location: "Hyderabad, India",
    date: "Sep 2018 – Dec 2020",
    description: "Built CRM and business process automation web platform using Angular and Spring Boot on Google Cloud Platform. The application supported internal operations teams in managing customer records, tasks, and notifications, delivered in an Agile environment.",
    responsibilities: [
      "Designed searchable customer directory with advanced filtering using Angular, TypeScript, and RxJS, enabling quick access to customer information across large datasets",
      "Created dynamic task assignment interface with drag-and-drop functionality using Angular Material, improving workflow visibility and streamlining operations team task management",
      "Developed custom Angular pipes and directives for date formatting and conditional styling, establishing reusable utilities that simplify template logic across modules",
      "Designed RESTful service contracts for customer operations using Spring Boot and Spring MVC with Swagger documentation, establishing consistent API patterns for frontend integration",
      "Designed the notification and scheduled-processing subsystem using ActiveMQ (queue/topic modeling, scheduled delivery, error handling/monitoring) to improve reliability of task alerts",
      "Implemented custom exception handling framework using Spring AOP and SLF4J logging, improving debugging capabilities and providing actionable error messages to clients",
      "Configured Apache Tomcat connection pooling and JVM tuning on GCP Compute Engine, optimizing memory usage and garbage collection for increased concurrent sessions",
      "Created automated build pipelines using Jenkins and Maven with JUnit test execution, standardizing release processes and reducing deployment time",
    ],
    technologies: ["Java", "Spring Boot", "Spring MVC", "Spring AOP", "Angular", "TypeScript", "RxJS", "Angular Material", "MySQL", "ActiveMQ", "Flyway", "GCP Compute Engine", "Apache Tomcat", "Docker", "Jenkins", "Maven", "JUnit", "Mockito"],
    logo: "/mindmade.jpeg",
  },
];

export const skills: SkillCategory[] = [
  {
    icon: "💻",
    title: "Programming Languages",
    accentColor: "#3b82f6",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "PL/SQL", "C", "C++"],
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    accentColor: "#667eea",
    skills: ["React", "Redux", "Angular", "Next.js", "HTML5", "CSS3", "Sass", "Bootstrap", "Tailwind CSS", "jQuery", "AJAX", "WebSocket", "NgRx", "RxJS"],
  },
  {
    icon: "⚙️",
    title: "Backend & Frameworks",
    accentColor: "#f97316",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Spring Batch", "Node.js", "Express.js", "J2EE", "Servlets", "JSP", "EJB", "JavaBeans", "JDBC", "JPA", "JMS", "Hibernate"],
  },
  {
    icon: "🗄️",
    title: "Database & Messaging",
    accentColor: "#10b981",
    skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis", "MS SQL Server", "DynamoDB", "Apache Kafka", "RabbitMQ", "ActiveMQ"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    accentColor: "#ef4444",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Helm", "Ansible", "Jenkins", "GitLab CI", "GitHub Actions", "CI/CD Pipelines", "CloudWatch", "Prometheus", "Grafana", "Apache Tomcat", "JBoss/WildFly", "Nginx"],
  },
  {
    icon: "🧪",
    title: "Testing & Quality Assurance",
    accentColor: "#a855f7",
    skills: ["JUnit", "TestNG", "Mockito", "Jest", "Jasmine", "Karma", "Cypress", "Selenium", "Postman"],
  },
  {
    icon: "🔗",
    title: "Web Services & Architecture",
    accentColor: "#14b8a6",
    skills: ["RESTful APIs", "SOAP", "GraphQL", "Microservices", "SOA", "JAX-RS", "JAX-WS", "WSDL", "Apache Axis", "OAuth2", "OIDC", "SAML 2.0", "JWT"],
  },
  {
    icon: "🛠️",
    title: "Development Tools & SDLC",
    accentColor: "#764ba2",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "IntelliJ IDEA", "VS Code", "Eclipse", "Maven", "Gradle", "npm", "JIRA", "Agile", "Scrum", "TDD", "MVC", "Design Patterns"],
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    accentColor: "#ec4899",
    skills: ["Amazon Bedrock", "RAG", "Vector Embeddings", "MLOps", "LangChain", "Prompt Engineering"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Certification Name",
    organization: "Issuing Organization",
    date: "Issue Date",
  },
  {
    name: "Certification Name",
    organization: "Issuing Organization",
    date: "Issue Date",
  },
  {
    name: "Certification Name",
    organization: "Issuing Organization",
    date: "Issue Date",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Achievement Title",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    title: "Achievement Title",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    title: "Achievement Title",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
];

export const education: Education[] = [
  {
    degree: "Master's in Cybersecurity with Artificial Intelligence",
    university: "Webster University",
    location: "Saint Louis, MO",
    period: "2020 - 2022",
    description: "Specialized in cybersecurity principles, AI applications in security, and advanced threat detection systems.",
  },
  {
    degree: "Bachelor's in Computer Science",
    university: "R.M.D Engineering College",
    location: "Chennai, India",
    period: "2014 - 2018",
    description: "Comprehensive computer science curriculum covering algorithms, data structures, software engineering, and database systems.",
  },
];

export const projects: Project[] = [
  {
    title: "Splitshare Application",
    description: "A modern expense-sharing application that allows users to split bills and expenses seamlessly. Built with real-time synchronization and intuitive user interface for managing group expenses efficiently.",
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
    image: "/splitshare.jpeg",
  },
  {
    title: "Customer Segmentation System",
    description: "An intelligent customer segmentation platform using machine learning algorithms to categorize customers based on behavior and preferences. Enables targeted marketing strategies and personalized experiences.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "Machine Learning"],
    demoUrl: "https://customer-segmentation-system-dyh997iusci9njgq5hefxn.streamlit.app/",
    codeUrl: "https://github.com/SridhimpleNuthalapati/Customer-Segmentation-System/tree/main",
    image: "/customer.jpg.avif",
  },
  {
    title: "Chat Bot Application",
    description: "An AI-powered conversational chatbot application with natural language processing capabilities. Provides intelligent customer support and automated responses with context-aware interactions.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    demoUrl: "#",
    codeUrl: "#",
    image: "/chatbot.jpeg",
  },
];
