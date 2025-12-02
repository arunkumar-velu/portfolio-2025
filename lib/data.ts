import { Project, Skill, SocialLink } from '@/types';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const personalInfo = {
  name: "Arun Kumar Velu",
  role: "Principal Frontend Architect",
  bio: "Expert in React, Next.js, and micro-frontend architectures. Founding engineer at ZEPIC, former Staff Engineer at Freshworks. Passionate about performance optimization, scalable design systems, and building teams that deliver exceptional user experiences.",
  email: "guruvaarun@gmail.com",
  location: "Chennai, Tamil Nadu, India",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Customer 360° View Platform",
    description:
      "Drag-and-drop platform enabling real-time customer insights. Empowers non-technical users to build custom dashboards without engineering support.",
    image: "/projects/customer360.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Micro-Frontend",
    ],
    githubUrl: "",
    liveUrl: "https://www.zepic.com/product/customer-360",
  },
  {
    id: 2,
    title: "Analytics & Reporting Dashboard",
    description:
      "Modular widget system for KPI tracking and data visualization. Features reusable chart, table, and metric components used across the entire platform.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "Redux", "D3.js", "Material-UI", "WebSockets"],
    githubUrl: "",
    liveUrl: "https://www.zepic.com/product/customer-insights",
  },
  {
    id: 3,
    title: "Marketing Automation Builder",
    description:
      "Visual workflow builder for email and WhatsApp campaigns. Increased deployment velocity by 3x with extensible trigger system and template library.",
    image: "/projects/automation.jpg",
    technologies: ["React", "TypeScript", "Node.js", "Express", "GraphQL"],
    githubUrl: "",
    liveUrl: "https://www.zepic.com/product/whatsapp-marketing",
  },
  {
    id: 4,
    title: "Real-Time Messaging Platform",
    description:
      "Message composer with HTML-fragment algorithm ensuring consistent rendering across email, chat, and mobile. Powers Freshchat's multi-channel messaging.",
    image: "/projects/freshchat.jpg",
    technologies: ["EmberJS", "JavaScript", "WebSockets", "Real-time"],
    githubUrl: "",
    liveUrl: "https://www.freshworks.com/live-chat-software/",
  },
  {
    id: 5,
    title: "Unified Product Suite",
    description:
      "Micro-frontend architecture integrating React, Angular, and Ember applications. Enables seamless cross-product navigation with shared authentication and state.",
    image: "/projects/microfrontend.jpg",
    technologies: [
      "Single-SPA",
      "React",
      "Angular",
      "EmberJS",
      "Module Federation",
    ],
    githubUrl: "",
    liveUrl: "https://www.freshworks.com",
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    description:
      "Achieved Core Web Vitals compliance through Brotli compression, CDN optimization, and lazy loading. Reduced MTTR by 44% with proactive monitoring.",
    image: "/projects/performance.jpg",
    technologies: ["Webpack", "Brotli", "CDN", "Lighthouse", "Web Performance"],
    githubUrl: "",
    liveUrl:
      "https://www.freshworks.com/saas/how-to-lazy-load-images-with-intersection-observer-blog/",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "SCSS/Less", category: "frontend" },
  { name: "EmberJS", category: "frontend" },
  { name: "AngularJS", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Material-UI", category: "frontend" },
  { name: "Single-SPA (Micro-Frontend)", category: "frontend" },
  { name: "ExtJS", category: "frontend" },
  
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "WebSockets", category: "backend" },
  
  // Tools & DevOps
  { name: "Webpack", category: "tools" },
  { name: "Babel", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "ESLint", category: "tools" },
  { name: "Prettier", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "Cypress", category: "tools" },
  { name: "React Testing Library", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Jenkins", category: "tools" },
  { name: "GitHub Actions", category: "tools" },
  { name: "ArgoCD", category: "tools" },
  { name: "Docker", category: "tools" },
  
  // Other
  { name: "Performance Optimization", category: "other" },
  { name: "Accessibility (WCAG 2.x)", category: "other" },
  { name: "Agile/Scrum", category: "other" },
  { name: "CI/CD", category: "other" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/arunkumar-velu",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/guruvaarun",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/arun_kumar_velu",
    icon: FaTwitter,
  },
  { name: "Email", url: "mailto:guruvaarun@gmail.com", icon: FaEnvelope },
];

