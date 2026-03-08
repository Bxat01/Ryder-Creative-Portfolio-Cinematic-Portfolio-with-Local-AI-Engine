import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-gray-900 dark:text-white">
          Ryder XA
        </a>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#music" className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Music</a>
            <a href="#projects" className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Projects</a>
            <a href="#about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</a>
          </nav>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;