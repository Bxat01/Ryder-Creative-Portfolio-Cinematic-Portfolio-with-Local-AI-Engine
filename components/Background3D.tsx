
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundProps {
  section: number;
}

const Background3D: React.FC<BackgroundProps> = ({ section }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-950">
      {/* Background Gradients that change based on section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${section}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {section === 0 && (
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[120px] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  x: [0, -50, 0],
                  y: [0, -30, 0],
                }}
                transition={{ duration: 18, repeat: Infinity }}
                className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/10 blur-[120px] rounded-full"
              />
            </div>
          )}
          {section === 1 && (
            <div className="absolute inset-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-900/10 via-slate-950 to-indigo-900/10 opacity-50 blur-[80px]"
              />
            </div>
          )}
          {section === 2 && (
            <div className="absolute inset-0 bg-slate-950">
              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-blue-950/20 to-transparent blur-[100px]" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Persistent Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Dynamic Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 
          }}
          animate={{ 
            y: ['0%', '100%'],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity,
            delay: Math.random() * 10
          }}
          className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default Background3D;
