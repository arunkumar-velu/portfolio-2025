'use client';

import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-6 border-t border-gray-800 dark:border-gray-700">
      <div className="max-w-7xl w-full mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-gray-200 dark:text-gray-300">
          Made with <FaHeart className="text-red-500" /> by Arun Kumar ©{" "}
          {currentYear}
        </p>
        <p className="text-gray-300 dark:text-gray-400 mt-2 text-sm">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
