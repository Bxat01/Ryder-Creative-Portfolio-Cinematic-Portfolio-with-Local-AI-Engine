
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const titleParts = title.split(' ');
  const part1 = titleParts[0] || 'STORY';
  const part2 = titleParts.slice(1).join(' ') || 'TELLING';

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-bold tracking-[0.4em] mb-12 uppercase"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span>{subtitle}</span>
        </motion.div>
        
        <h1 className="text-6xl md:text-[11rem] font-black tracking-tighter leading-[0.85] mb-12 select-none">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="block"
          >
            {part1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1.2 }}
            className="block outline-text"
          >
            {part2}
          </motion.span>
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide leading-relaxed uppercase">
            Video Editor & 3D Artist building websites and apps, <br />
            exploring the boundaries of game development.
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute top-10 left-10 w-24 h-px bg-white/10 hidden md:block" />
      <div className="absolute top-10 left-10 w-px h-24 bg-white/10 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-24 h-px bg-white/10 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-px h-24 bg-white/10 hidden md:block" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-slate-500 font-bold">Scroll to Enter</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
