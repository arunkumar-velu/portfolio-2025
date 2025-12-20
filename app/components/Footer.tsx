'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl w-full mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © {currentYear} Arun Kumar. Built with Next.js, TypeScript & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
