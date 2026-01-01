'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "14 Years Experience",
      description: "Building scalable web applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaRocket,
      title: "Performance Expert",
      description: "Core Web Vitals & optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaUsers,
      title: "Team Leadership",
      description: "Mentoring & architecture design",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaAward,
      title: "Innovation",
      description: "Micro-frontends & modern tooling",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-linear-to-b from-gray-50 to-white px-6"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Frontend Architect passionate about building exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <Card className="bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 border-blue-100">
              <CardContent className="pt-8">
                <div className="flex items-center gap-6 mb-6">
                  <Avatar className="w-24 h-24 bg-linear-to-br from-blue-600 to-purple-600 text-4xl shadow-lg">
                    <AvatarFallback className="bg-transparent text-white font-bold">
                      AK
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {personalInfo.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">
                      {personalInfo.role}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>📍</span>
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Seasoned Frontend Architect with proven expertise across
                  React, Angular, Ember, and modern toolchains. Leading design,
                  development, and optimization of scalable web applications and
                  micro-frontend platforms for global enterprises.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-blue-600">📧</span>
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {personalInfo.email}
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">
                      As a founding engineer at ZEPIC
                    </strong>
                    , I architect customizable, high-performance dashboards and
                    automation tools that empower businesses to make data-driven
                    decisions.
                  </p>

                  <p>
                    <strong className="text-gray-900">
                      During my time at Freshworks
                    </strong>
                    , I was a core leader shipping real-time messaging systems,
                    unified product suites, and robust platform integrations
                    used by thousands of businesses worldwide.
                  </p>

                  <p>
                    <strong className="text-gray-900">
                      My expertise spans
                    </strong>{" "}
                    performance optimization, CI/CD automation, micro-frontend
                    architectures, and mentoring high-performing teams to
                    deliver impactful user experiences at scale.
                  </p>

                  <p>
                    <strong className="text-gray-900">I believe in</strong>{" "}
                    writing clean, maintainable code, championing test-first
                    engineering culture, and continuously learning emerging
                    technologies to stay ahead in the ever-evolving frontend
                    landscape.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            What I Bring to the Table
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <CardContent className="relative pt-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="text-white text-2xl" />
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
