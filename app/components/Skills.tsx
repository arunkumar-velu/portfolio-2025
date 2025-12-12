'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

const Skills = () => {
  const categories = {
    frontend: skills.filter((skill) => skill.category === 'frontend'),
    backend: skills.filter((skill) => skill.category === 'backend'),
    tools: skills.filter((skill) => skill.category === 'tools'),
    other: skills.filter((skill) => skill.category === 'other'),
  };

  const categoryConfig = [
    {
      key: 'frontend',
      title: 'Frontend Development',
      icon: '🎨',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    },
    {
      key: 'backend',
      title: 'Backend & APIs',
      icon: '⚙️',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    },
    {
      key: 'tools',
      title: 'Tools & DevOps',
      icon: '🛠️',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
    },
    {
      key: 'other',
      title: 'Expertise & Practices',
      icon: '🚀',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-6"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Full-stack capabilities with deep expertise in modern web
            technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categoryConfig.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2.5">
                {categories[category.key as keyof typeof categories].map(
                  (skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + index * 0.02,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group relative"
                    >
                      <div className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200 cursor-default">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {categories.frontend.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Frontend Tools
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              {categories.backend.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Backend Skills
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {categories.tools.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              DevOps Tools
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {skills.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Total Skills
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
