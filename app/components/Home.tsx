'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa';

const Home = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Enterprise Solutions",
      description: "Delivered platforms used by 1000s of businesses globally",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaRocket,
      title: "Performance Leader",
      description: "Achieved 44% MTTR reduction & Core Web Vitals compliance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaUsers,
      title: "Technical Leadership",
      description: "Mentored teams & established testing culture (70%+ coverage)",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaAward,
      title: "Architecture Innovation",
      description: "Pioneered micro-frontend integration across products",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent"
          >
            Hi, I'm {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold mb-4"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6"
          >
            Transforming complex business requirements into elegant,
            high-performance web solutions. Specializing in micro-frontend
            architectures, performance optimization, and team leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
              Framework Agnostic
            </span>
            <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">
              Micro-Frontends
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Performance Expert
            </span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Team Leadership
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
              14 Years Experience
            </span>
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            What I Bring to the Table
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="text-white text-2xl" />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
