import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Activity, Info, X } from 'lucide-react';
import { Project, SiteConfig, Language } from '../types';
import { getFeatureLabels } from '../lib/RyderIntelligenceEngine';

interface IntelligenceDashboardProps {
  projects: Project[];
  config: SiteConfig;
  lang: Language;
}

const IntelligenceDashboard: React.FC<IntelligenceDashboardProps> = ({ projects, config, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!config.rieSettings.enabled) return null;

  const totalProjects = projects.filter(p => p.isVisible).length;
  const techDiversity = new Set(projects.flatMap(p => p.tech)).size;

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-slate-900/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-pulse" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/20 rounded-xl text-blue-500">
                  <Cpu size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-black tracking-widest uppercase">RIE ANALYSIS</h3>
                  <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest">Internal Engine v2.0</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Portfolio Health</span>
                  <span className="text-[10px] text-green-400 font-mono">98% OPTIMIZED</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '98%' }} className="h-full bg-blue-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                  <p className="text-[18px] font-black text-white">{totalProjects}</p>
                  <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Node Count</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                  <p className="text-[18px] font-black text-white">{techDiversity}</p>
                  <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Tech Range</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Live Synergies</p>
                {projects.slice(0, 3).map(p => {
                  const features = getFeatureLabels(p);
                  return (
                    <div key={p.id} className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-300 truncate w-32">
                        {p.title?.[lang] || p.title?.en || 'Untitled'}
                      </span>
                      <span className="text-[8px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                        {features.length > 0 ? features[0] : 'Optimized'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-green-500/60">
                  <ShieldCheck size={12} />
                  <span className="text-[8px] font-bold tracking-widest uppercase">Verified Local Engine</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center shadow-2xl text-blue-500 relative group"
      >
        <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping" />
        <Cpu size={24} className="relative z-10" />
      </motion.button>
    </div>
  );
};

export default IntelligenceDashboard;