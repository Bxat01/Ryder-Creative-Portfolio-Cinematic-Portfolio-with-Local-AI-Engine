import React from 'react';

const Navigation: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-1 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-2 py-1.5">
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className="px-5 py-2 text-xs font-medium text-slate-300 hover:text-white transition rounded-full hover:bg-slate-800"
        >
          Home
        </a>
        <a
          href="#music"
          onClick={(e) => scrollToSection(e, 'music')}
          className="px-5 py-2 text-xs font-medium text-slate-300 hover:text-white transition rounded-full hover:bg-slate-800"
        >
          Music
        </a>
        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, 'projects')}
          className="px-5 py-2 text-xs font-medium text-slate-300 hover:text-white transition rounded-full hover:bg-slate-800"
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="px-5 py-2 text-xs font-medium text-slate-300 hover:text-white transition rounded-full hover:bg-slate-800"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navigation;