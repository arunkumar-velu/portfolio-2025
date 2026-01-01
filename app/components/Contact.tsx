'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/lib/data';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/30 px-6">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-8">
            CONTACT
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-lg"
              >
                {personalInfo.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Connect
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label={link.name}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
