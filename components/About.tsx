import React from 'react';
import { MapPin, Music, Youtube, Instagram, Github, Mail } from 'lucide-react';
import { SocialLink } from '../types';

interface AboutProps {
  bio: string;
  location: string;
  socials: SocialLink[];
}

const About: React.FC<AboutProps> = ({ bio, location, socials }) => {
  const getIcon = (platform: string) => {
    switch(platform) {
      case 'Spotify': return <Music size={20} className="text-green-500" />;
      case 'YouTube': return <Youtube size={20} className="text-red-500" />;
      case 'Instagram': return <Instagram size={20} className="text-pink-500" />;
      case 'GitHub': return <Github size={20} className="text-white" />;
      case 'Mail': return <Mail size={20} className="text-blue-500" />;
      default: return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          About / Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {bio}
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={18} />
              <span>{location}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Find me on
            </h3>
            <div className="flex flex-col gap-4">
              {socials.map(social => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {getIcon(social.platform)}
                  <span>{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;