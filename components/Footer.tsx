import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Ryder XA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;