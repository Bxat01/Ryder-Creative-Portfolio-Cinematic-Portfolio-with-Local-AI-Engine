
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[1000] bg-slate-950 flex flex-col items-center justify-center"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 border-2 border-transparent border-t-blue-500 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute w-56 h-56 border border-transparent border-b-blue-800 opacity-30 rounded-full"
        />
        
        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.5em', scale: 0.9 }}
          animate={{ opacity: 1, letterSpacing: '1.2em', scale: 1 }}
          transition={{ 
            duration: 2.5, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          onAnimationComplete={() => {
            setTimeout(onComplete, 500);
          }}
          className="text-white text-4xl font-black tracking-[1.2em] ml-[1.2em] uppercase mix-blend-difference"
        >
          Ryder
        </motion.h1>
      </div>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "200px", opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="mt-12 h-[1px] bg-blue-500/30 overflow-hidden"
      >
        <motion.div
          animate={{ x: [-200, 200] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-blue-400"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5] }}
        transition={{ delay: 1, duration: 2 }}
        className="mt-8 text-[9px] text-blue-500/50 uppercase tracking-[0.8em] font-bold"
      >
        Initializing Experience
      </motion.p>
    </motion.div>
  );
};

export default Loader;
