'use client';

import { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '@/lib/data';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '@/app/context/ThemeContext';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        {isOpen ? (
          <HiX className="text-2xl text-gray-800 dark:text-white" />
        ) : (
          <HiMenu className="text-2xl text-gray-800 dark:text-white" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-80 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-gradient-to-br from-white via-gray-50 to-white border-r border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white z-40 overflow-y-auto shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-8 flex flex-col h-full">
          {/* Profile Section */}
          <div className="mb-8 text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl font-bold shadow-xl ring-4 ring-blue-500/20 dark:ring-blue-400/30">
              AV
            </div>
            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-blue-600 dark:text-blue-400 text-sm mb-3 font-medium">
              {personalInfo.role}
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 text-sm bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded-full mx-auto w-fit">
              <span>📍</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-grow">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-4 py-3 cursor-pointer rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-white hover:shadow-lg hover:scale-105 font-medium group relative overflow-hidden"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          {/* <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <>
                    <HiMoon className="text-2xl text-white group-hover:rotate-12 transition-transform" />
                    <span className="text-white font-medium">Dark Mode</span>
                  </>
                ) : (
                  <>
                    <HiSun className="text-2xl text-white group-hover:rotate-90 transition-transform" />
                    <span className="text-white font-medium">Light Mode</span>
                  </>
                )}
              </button>
            )}
          </div> */}

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center font-medium">
              Connect with me
            </p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 hover:from-blue-500 hover:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-gray-700 dark:text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={link.name}
                >
                  <link.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="mt-6 text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
