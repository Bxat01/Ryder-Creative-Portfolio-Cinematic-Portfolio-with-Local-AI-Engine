import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-xs text-slate-500 tracking-widest uppercase">
          © {new Date().getFullYear()} Ryder-XA — All Rights Reserved
        </p>

        <p className="text-[10px] text-slate-600 tracking-[0.3em] uppercase">
          Built with Next.js & Motion
        </p>

      </div>
    </footer>
  );
};

export default Footer;
