import React from 'react';

interface HeroProps {
  name: string;
  title: string;
}

const Hero: React.FC<HeroProps> = ({ name, title }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-slate-950 overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-ping"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-400 mb-8">
          {title}
        </h2>
        
        <div className="max-w-3xl text-slate-300 space-y-4 text-lg">
          <p>
            Music producer and video editor from Algeria. Creating atmospheric sounds 
            and cinematic visuals that blend emotion with technology.
          </p>
          <p>
            My work explores the intersection of sound design, visual storytelling, 
            and creative coding. Each project is crafted to take the listener on 
            a journey through sound and vision.
          </p>
          <p className="text-blue-400">
            Currently working on new music and visual projects. Stay tuned.
          </p>
        </div>

        <div className="mt-10">
          <a 
            href="#music" 
            className="inline-block px-8 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-full border border-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            Explore My Music
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
          100% { transform: translateY(-40px) translateX(20px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-ping { animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-bounce { animation: bounce 1s infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;