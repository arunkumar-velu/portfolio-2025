'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from "@/lib/data";

const Home = () => {
  const yearsOfExperience = new Date().getFullYear() - 2011;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-32 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            {personalInfo.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            {personalInfo.role}.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={link.name}
              >
                <link.icon className="text-2xl" />
              </a>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-16 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {yearsOfExperience}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                3
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Companies
              </div>
            </div> */}

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                2+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Micro Frontend Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                10+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Teams Mentored
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
