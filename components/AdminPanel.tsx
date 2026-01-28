import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Key, Shield, Terminal, X, Loader2, Volume2, VolumeX, Music } from 'lucide-react';

interface FakeAdminPanelProps {
  onClose: () => void;
}

const FakeAdminPanel: React.FC<FakeAdminPanelProps> = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRickRoll, setShowRickRoll] = useState(false);
  const [volume, setVolume] = useState(true);
  const [countdown, setCountdown] = useState(3);

  const rickRollUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const embedUrl = `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&modestbranding=1&rel=0`;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    
    setIsLoading(true);
    
    let count = 3;
    const countdownInterval = setInterval(() => {
      count--;
      setCountdown(count);
      
      if (count <= 0) {
        clearInterval(countdownInterval);
        setIsLoading(false);
        setShowRickRoll(true);
        
        // تشغيل صوت الضحك
        try {
          const laugh = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cartoon-laugh-161.mp3');
          laugh.volume = 0.3;
          laugh.play();
        } catch (e) {
          console.log('Audio error');
        }
      }
    }, 1000);
  };

  const openInNewTab = () => {
    window.open(rickRollUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border-2 border-red-500/40 shadow-2xl shadow-red-500/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Matrix Background Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-500 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `fall ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              {Math.random() > 0.5 ? '0' : '1'}
            </div>
          ))}
        </div>

        <div className="relative p-8 border-b border-gray-800/50 bg-gradient-to-r from-red-900/20 to-black">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600/20 rounded-2xl border border-red-500/30">
                <Terminal className="text-red-400" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  ADMIN ACCESS PANEL
                </h2>
                <p className="text-gray-400 text-sm font-mono mt-1">
                  [SECURITY LEVEL: MAXIMUM] - (JUST KIDDING! 😉)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-2xl border border-gray-700/50 transition-all hover:scale-105"
            >
              <X size={22} className="text-gray-300" />
            </button>
          </div>
        </div>

        <div className="relative p-8">
          {showRickRoll ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="text-7xl animate-bounce">🎵</div>
                  <div className="absolute -top-2 -right-2 text-4xl animate-ping">🎤</div>
                </div>
              </div>
              
              <h3 className="text-4xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                  YOU'VE BEEN RICK ROLLED! 🎉
                </span>
              </h3>
              
              <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                Never gonna give you up, never gonna let you down! 
                <br />
                <span className="text-yellow-400 font-bold">Rick Astley is dancing just for you! 💃🕺</span>
              </p>
              
              <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-2xl mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-blue-900/30" />
                <iframe
                  src={embedUrl}
                  title="Rick Astley - Never Gonna Give You Up"
                  className="w-full h-full relative z-10"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-4 py-2 bg-red-600 rounded-full text-xs font-bold text-white flex items-center gap-2">
                    <Music size={12} /> LIVE RICK ROLLING
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 z-20">
                  <button
                    onClick={() => setVolume(!volume)}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    {volume ? <Volume2 size={20} /> : <VolumeX size={20} />}
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openInNewTab}
                  className="px-8 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-bold uppercase text-lg flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <span className="text-2xl">▶️</span>
                  Open in Full Screen
                </button>
                
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold uppercase text-lg transition-all hover:scale-105"
                >
                  Close & Laugh About It 😂
                </button>
              </div>
              
              <div className="mt-8 p-6 bg-black/30 rounded-2xl border border-gray-700/50 max-w-2xl mx-auto">
                <p className="text-gray-400">
                  <span className="text-green-400 font-bold">Fun Fact:</span> You just experienced the internet's favorite prank! 
                  Over 1 billion people have been Rick Rolled since 2007. Welcome to the club! 🎉
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-8 p-6 bg-gradient-to-r from-yellow-900/30 to-red-900/30 rounded-2xl border-2 border-yellow-500/30">
                <div className="flex items-start gap-4">
                  <Shield size={28} className="text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-yellow-400 mb-2">⚠️ WARNING: THIS IS A TRAP! ⚠️</h4>
                    <p className="text-gray-300">
                      This is not a real admin panel. It's a <span className="text-red-400 font-bold">Rick Roll trap</span>!
                      Enter any password to experience internet history in action. 😈
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-lg mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to get Rick Rolled?</h3>
                  <p className="text-gray-400">
                    Type anything in the password field below. 
                    <span className="text-green-400"> Seriously, anything works! </span>
                    Then enjoy the show! 🎭
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-3 uppercase tracking-widest">
                      Fake Password Field (Try: "hacker123", "admin", "password", etc.)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Type anything here... literally anything! ✨"
                        className="w-full bg-gray-900/70 border-2 border-gray-700 rounded-2xl px-6 py-4 text-white text-lg focus:outline-none focus:border-red-500 transition-all placeholder-gray-500"
                        autoFocus
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <Lock className="text-gray-500" size={20} />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 transition-all ${isLoading ? 'bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 hover:shadow-2xl hover:shadow-red-500/30'}`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={24} className="animate-spin" />
                        <span>RICK ROLL IN... {countdown}</span>
                      </>
                    ) : (
                      <>
                        <Key size={24} />
                        <span>CLICK TO GET RICK ROLLED! 🎵</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8">
                  <p className="text-gray-400 text-center mb-3">Try these classic "hacker" passwords:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['password123', 'admin', '123456', 'letmein', 'hackerman', 'matrix'].map((pass) => (
                      <button
                        key={pass}
                        onClick={() => setPassword(pass)}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm font-mono transition-all hover:scale-105"
                      >
                        {pass}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-black/30 rounded-2xl border border-gray-800/50">
                    <div className="text-3xl font-black text-red-400">1B+</div>
                    <div className="text-gray-400 text-sm">People Rick Rolled</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-2xl border border-gray-800/50">
                    <div className="text-3xl font-black text-yellow-400">100%</div>
                    <div className="text-gray-400 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-2xl border border-gray-800/50">
                    <div className="text-3xl font-black text-green-400">😂</div>
                    <div className="text-gray-400 text-sm">Your Reaction</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-2xl border border-gray-800/50">
                    <div className="text-3xl font-black text-blue-400">2007</div>
                    <div className="text-gray-400 text-sm">Since Year</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-6 border-t border-gray-800/50 bg-black/50">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              🎭 This is a harmless internet prank. No real security was breached. Just pure fun! 😄
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Pro tip: The real admin password is much more secure! (Hint: It's in the README)
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FakeAdminPanel;