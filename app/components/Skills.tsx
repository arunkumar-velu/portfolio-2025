'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const categories = {
    frontend: skills.filter((skill) => skill.category === 'frontend'),
    backend: skills.filter((skill) => skill.category === 'backend'),
    tools: skills.filter((skill) => skill.category === 'tools'),
    other: skills.filter((skill) => skill.category === 'other'),
  };

  const categoryConfig = [
    { key: 'frontend', title: 'Frontend Development' },
    { key: 'backend', title: 'Backend & APIs' },
    { key: 'tools', title: 'Tools & DevOps' },
    { key: 'other', title: 'Expertise & Practices' },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800/30 px-6">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-8">
            SKILLS & EXPERTISE
          </h2>
        </motion.div>

        <div className="space-y-12">
          {categoryConfig.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {categories[category.key as keyof typeof categories].map(
                  (skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="hover:bg-accent transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
