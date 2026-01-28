
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  t: any;
  currentSection: number;
  onNavigate: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ t, currentSection, onNavigate }) => {
  const navItems = [
    { name: t.intro, index: 0 },
    { name: t.work, index: 1 },
    { name: t.about, index: 2 }
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100]">
      <div className="flex items-center gap-1 p-1 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.index}
            onClick={() => onNavigate(item.index)}
            className="relative px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all"
          >
            <span className={`relative z-10 ${currentSection === item.index ? 'text-white' : 'text-slate-500'}`}>
              {item.name}
            </span>
            {currentSection === item.index && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-blue-600 rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
