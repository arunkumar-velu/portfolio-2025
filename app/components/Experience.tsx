'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      role: "Principal Frontend Architect",
      company: "ZEPIC Technologies",
      period: "2023 – Present",
      location: "Chennai, India",
      logo: "https://zepic-webflow.s3.us-east-1.amazonaws.com/favicon.ico",
      technologies: "React, TypeScript, Next.js, Micro-Frontend",
      achievements: [
        "Engineered Customer 360° view platform with drag-and-drop UI",
        "Built customizable Reporting Dashboard with modular widget system",
        "Created Automation & Template Builders (3x deployment velocity)",
        "Achieved Core Web Vitals optimization & 44% MTTR reduction",
        "Established CI/CD pipelines with 70%+ test coverage",
      ],
    },
    {
      id: 2,
      role: "Staff Engineer",
      company: "Freshworks",
      period: "2015 – 2023",
      location: "Chennai, India",
      logo: "https://www.freshworks.com/favicons/favicon.ico",
      technologies: "EmberJS, React, Node.js",
      achievements: [
        "Architected message fragment structure for multi-format messaging",
        "Built Message Composer with HTML-fragment conversion algorithm",
        "Led Micro-Frontend Integration for unified suite experience",
        "Drove performance initiatives: Brotli, CDN, lazy-loading",
        "Streamlined release management with Jenkins & ArgoCD",
      ],
    },
    {
      id: 3,
      role: "Associate",
      company: "Cognizant Technologies",
      period: "2011 – 2015",
      location: "Chennai, India",
      logo: "https://www.cognizant.com/content/dam/cognizant-dot-com/favicon/default-favicon/32x32.png",
      technologies: "EmberJS, HTML5, CSS3",
      achievements: [
        "Developed enterprise web applications using ExtJS",
        "Led UI modernization to HTML5/CSS3 frameworks",
        "Mentored developers on frontend architecture",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-8">
            EXPERIENCES
          </h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <motion.div
                className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md cursor-pointer"
                onHoverStart={() => setExpandedId(exp.id)}
                onHoverEnd={() => setExpandedId(null)}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                {/* Header - Always Visible */}
                <div className="flex items-start gap-4 p-6">
                  {/* Company Logo */}
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 relative grayscale group-hover:grayscale-0 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-contain"
                      />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.role} · {exp.technologies}
                    </p>
                  </div>
                </div>

                {/* Expandable Achievements */}
                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30"
                    >
                      <ul className="px-6 py-4 space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400"
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24"
        >
          <motion.h2
            className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            EDUCATION
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Anna University
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  2007 - 2011
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor of Engineering · Computer Science
              </p>
            </motion.div>

            <motion.div
              className="pt-6 border-t border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Certifications
              </h4>
              <ul className="space-y-2">
                <motion.li
                  className="text-sm text-gray-600 dark:text-gray-400 pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  Microsoft: HTML5, JavaScript & CSS
                </motion.li>
                <motion.li
                  className="text-sm text-gray-600 dark:text-gray-400 pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  W3C Schools: JavaScript & jQuery
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
