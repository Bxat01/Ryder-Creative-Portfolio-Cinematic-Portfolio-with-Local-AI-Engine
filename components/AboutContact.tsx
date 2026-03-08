import React from 'react';
import { MapPin, Mail, Youtube, Instagram, Github, Headphones, ExternalLink } from 'lucide-react';
import { SiteConfig } from '../types';
import { TECH_STACK, SOCIALS, TECH_LOGOS, PERSONAL_INFO } from '../constants';

interface AboutContactProps {
  config: SiteConfig;
}

const AboutContact: React.FC<AboutContactProps> = ({ config }) => {
  // دالة لإرجاع الأيقونة الملونة حسب المنصة
  const getColoredIcon = (platform: string) => {
    switch(platform) {
      case 'Spotify':
        return (
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" 
            alt="Spotify" 
            className="w-5 h-5"
          />
        );
      case 'YouTube':
        return <Youtube size={20} className="text-red-500" />;
      case 'Instagram':
        return <Instagram size={20} className="text-pink-500" />;
      case 'GitHub':
        return <Github size={20} className="text-white" />;
      case 'Email':
        return <Mail size={20} className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== قسم Artist ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-green-500" />
            <h2 className="text-2xl md:text-3xl font-light text-white flex items-center gap-3">
              <Headphones className="text-green-500" size={28} />
              Artist / Musician
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                My music blends atmospheric sounds with emotional storytelling, 
                drawing inspiration from cinematic scores and modern electronic production. 
                Each track is crafted to take the listener on a journey through sound.
              </p>
            </div>
            
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify" className="w-5 h-5" />
                Latest Release
              </h3>
              <div className="flex items-center gap-4">
                <img 
                  src="https://res.cloudinary.com/ddqedxovk/image/upload/v1772943388/mq4sfkdgjmndymodma4a.png" 
                  alt="Album Cover" 
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <p className="text-white font-medium">Say My Name, Cupcake</p>
                  <p className="text-sm text-slate-400">Shattered & Reborn • 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== قسم About الأصلي (مطول) ===== */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* About */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">About</h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                {config.bio}
              </p>
              <p>
                Based in {config.location}, I've been working in the creative industry for over 5 years, 
                collaborating with artists, brands, and creators worldwide. My approach combines technical 
                precision with artistic vision, ensuring every project tells a compelling story.
              </p>
              <p>
                I believe in the power of multimedia storytelling—where music, visuals, and code come together 
                to create immersive experiences. Whether I'm producing a track, editing a video, or building a web app, 
                my goal is always the same: to evoke emotion and leave a lasting impression.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-500 mt-6">
              <MapPin size={18} />
              <span>{config.location}</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Tech Stack</h2>
            <div className="space-y-8">
              {TECH_STACK.map((group) => (
                <div key={group.name}>
                  <h3 className="text-sm font-medium text-blue-500 mb-4">{group.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.tools.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition"
                      >
                        {TECH_LOGOS[tool] && (
                          <img 
                            src={TECH_LOGOS[tool]} 
                            alt={tool} 
                            className="w-5 h-5 object-contain"
                          />
                        )}
                        <span className="text-sm text-slate-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5">
          <h3 className="text-xl font-light text-white mb-8 text-center">Connect with me</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="mt-10 text-center text-slate-500 text-sm space-y-1">
             <p>Artist: Ryder </p>
             <p>Business Email: abdkadrxa@gmail.com</p>
             <p>Independent Artist & Producer</p>
              </div>
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition group"
              >
                {getColoredIcon(social.platform)}
                <span className="text-sm">{social.platform}</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;