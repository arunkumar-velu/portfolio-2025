'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Principal Frontend Architect",
      company: "ZEPIC Technologies",
      period: "2023 – Present",
      year: "Present",
      location: "Chennai, India",
      logo: "https://zepic-webflow.s3.us-east-1.amazonaws.com/favicon.ico",
      color: "from-purple-50 to-pink-50",
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
      year: "2023",
      location: "Chennai, India",
      logo: "https://www.freshworks.com/favicons/favicon.ico",
      color: "from-blue-50 to-cyan-50",
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
      year: "2015",
      location: "Chennai, India",
      logo: "https://www.cognizant.com/content/dam/cognizant-dot-com/favicon/default-favicon/32x32.png",
      color: "from-indigo-50 to-blue-50",
      achievements: [
        "Developed enterprise web applications using ExtJS",
        "Led UI modernization to HTML5/CSS3 frameworks",
        "Mentored developers on frontend architecture",
      ],
    },
    {
      id: 4,
      role: "Career Start",
      company: "",
      period: "",
      year: "2011",
      location: "",
      logo: "",
      color: "",
      achievements: [],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-6"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Career Journey
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            From enterprise solutions at Cognizant to architecting platforms at
            ZEPIC
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300"></div>

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div key={exp.id}>
                {/* Timeline dot with year */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xs leading-tight text-center px-1">
                      {exp.year}
                    </span>
                  </div>
                </motion.div>

                {/* Content card - only show if not the career start marker */}
                {exp.company && (
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row gap-8 pb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div
                        className={`bg-gradient-to-br ${exp.color} dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600`}
                      >
                        {/* Header with logo */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
                            <div className="w-12 h-12 relative bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-600">
                              {exp.logo ? <Image
                                src={exp.logo}
                                alt={exp.company}
                                fill
                                className="object-contain rounded-lg"
                              /> : exp.company.charAt(0)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.role}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                📅 {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                📍 {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2.5">
                          {exp.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 group"
                            >
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                ✓
                              </span>
                              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Empty space for timeline */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Education & Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl">
                  🎓
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Bachelor of Engineering
                  </h4>
                  <p className="text-blue-600 dark:text-blue-300 font-semibold text-sm mb-1">
                    Computer Science
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Anna University • 2007 - 2011
                  </p>
                  <p className="text-gray-500 dark:text-gray-300 text-xs mt-1">
                    Jaya Institute of Technology
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📜
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Certifications
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Microsoft: HTML5, JavaScript & CSS
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        W3C Schools: JavaScript & jQuery
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
