
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Github, Twitter, Youtube, Mail, Instagram, ChevronRight } from 'lucide-react';
import { TECH_STACK, SOCIALS, TECH_LOGOS } from '../constants';
import { SiteConfig, Language } from '../types';
import NextJSIcon from '@/components/icons/NextJSIcon';

interface AboutContactProps {
  config: SiteConfig;
  lang: Language;
  t: any;
}

const AboutContact: React.FC<AboutContactProps> = ({ config, lang, t }) => {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 md:px-24 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
          
        >
          {/* Left Footer */}
<div className="mt-24 text-[9px] text-white/30 tracking-widest uppercase">
  © 2026 Ryder XA — Engineering Aesthetics

</div>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-blue-600" />
            <span className="text-blue-500 text-[10px] font-bold tracking-[0.5em] uppercase">The Profile</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-12 leading-none">
            ENGINEERING <br />
            <span className="outline-text">AESTHETICS.</span>
          </h2>
          <div className="space-y-8 text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            <p>
              {config.bio[lang]}
            </p>
            <p>
              Based in <span className="text-white font-semibold italic">{config.location}</span>, I collaborate globally to define the next generation of digital interfaces.
            </p>
            <p>
              My work sits at the intersection of <span className="text-blue-400">creative direction</span> and <span className="text-blue-400">technical execution</span>. I don't just build websites; I craft environments.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-12">
            <div>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">Current Focus</p>
              <div className="flex items-center gap-2 text-white font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Game Engine Integration
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">Availability</p>
              <p className="text-white font-medium">Q4 2024 / Q1 2025</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 space-y-8"
        >
          
          <div className="bg-slate-900/30 backdrop-blur-2xl border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group">
            <h3 className="text-xl font-bold mb-10 tracking-tight flex items-center gap-3">
              <ChevronRight className="text-blue-500" size={20} />
              TECH STACK
              
            </h3>
            
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
<div className="flex items-center justify-center h-full">
  <div
    className="
      w-42 h-40
      rounded-full
      overflow-hidden
      border border-white/10
      bg-white/5
      hover:border-blue-600
      transition-all duration-500
    "
  >
    <img
      src="https://github.com/Bxat01.png"
      alt="GitHub Profile"
      className="w-full h-full object-cover transition duration-500"
    />
  </div>
</div>

              {TECH_STACK.map(group => (
                <div key={group.name}>
                  <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mb-4">{group.name}</p>
                  
                  <ul className="space-y-2">
                    {group.tools.map(tool => (
                      
                     <li
                     
                     
  key={tool}
  className="flex items-center gap-2 text-slate-400 text-xs font-medium hover:text-white transition-colors cursor-default"
>
  
  {TECH_LOGOS[tool] && (
    <img
      src={TECH_LOGOS[tool]}
      alt={tool}
      className="w-4 h-4"
    />
  )}
  <span>{tool}</span>
</li>


                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 pt-10 border-t border-white/5">
              <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mb-6">Let's Connect</p>
              <div className="grid grid-cols-1 gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="flex items-center justify-between p-1 bg-white/22 hover:bg-white/15 border border-white/10 rounded-2xl group transition-all"
                  >
                    <div className="flex items-center gap-4">
                     <div
  className="
    w-10 h-10
    flex items-center justify-center
    rounded-xl
    border border-white/10
    text-blue-400
    group-hover:border-blue-500/40
    group-hover:text-blue-500
    transition-all
  "
>
  {social.icon}
</div>


                      <span className="text-[11px] font-bold tracking-widest uppercase">{social.platform}</span>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-700 group-hover:text-blue-500 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
    
    </div>
  );
};

export default AboutContact;
