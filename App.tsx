import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import YoutubePlayer from './components/YoutubePlayer';
import AdminPanel from './components/AdminPanel'; 
import FakeAdminPanel from './components/FakeAdminPanel'; 
import IntelligenceDashboard from './components/IntelligenceDashboard';
import Footer from './components/Footer';
import { Project, SiteConfig, Language, GlobalAnalytics } from './types';
import { PROJECTS as DEFAULT_PROJECTS, DEFAULT_SITE_CONFIG, TRANSLATIONS } from './constants';
import { getOptimizedProjects } from './lib/RyderIntelligenceEngine';
import { trackGlobalVisit, trackSectionView, trackProjectView } from './lib/AnalyticsEngine';
import { verifyAdminPassword, loginAdmin, isAdminLoggedIn, logoutAdmin } from './lib/auth';
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [activeProjectForRIE, setActiveProjectForRIE] = useState<Project | null>(null);
  const [loginError, setLoginError] = useState('');
  const [showFakeAdmin, setShowFakeAdmin] = useState(false); 

  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [globalStats, setGlobalStats] = useState<GlobalAnalytics>({
    totalVisitors: 0,
    sectionViews: { intro: 0, work: 0, about: 0 }
  });

  const lastScrollTime = useRef(0);
  const loginInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAdminLoggedIn()) {
      setIsAdminMode(true);
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setShowFakeAdmin(true);
      window.history.replaceState({}, '', '/');
    }
  }, []);

  useEffect(() => {
    setGlobalStats(prev => trackGlobalVisit(prev));
  }, []);

  useEffect(() => {
    const sections = ['intro', 'work', 'about'];
    setGlobalStats(prev => trackSectionView(sections[currentSection], prev));
  }, [currentSection]);

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        setLoginVisible(true);
        setTimeout(() => {
          if (loginInputRef.current) {
            loginInputRef.current.focus();
          }
        }, 100);
      }
    };
    
    const handleF12 = (e: KeyboardEvent) => {
      if (e.key === 'F12') {
        e.preventDefault();
        setShowFakeAdmin(true);
        
        // إضافة صوت ضحك
        const laugh = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cartoon-laugh-161.mp3');
        laugh.volume = 0.3;
        laugh.play().catch(() => {});
      }
    };
    
    window.addEventListener('keydown', handleKeys);
    window.addEventListener('keydown', handleF12);
    
    return () => {
      window.removeEventListener('keydown', handleKeys);
      window.removeEventListener('keydown', handleF12);
    };
  }, []);

  const handleNavigate = useCallback((index: number) => {
    if (isAnimating || index === currentSection || isAdminMode || showFakeAdmin) return;
    setIsAnimating(true);
    setCurrentSection(index);
    setTimeout(() => setIsAnimating(false), 1200); 
  }, [currentSection, isAnimating, isAdminMode, showFakeAdmin]);
const handleWheel = useCallback((e: WheelEvent) => {
  if (isAnimating || isAdminMode || selectedVideo || showFakeAdmin) return;

  const now = Date.now();
  if (now - lastScrollTime.current < 1200) return;

  if (currentSection === 1) {
    const end = document.getElementById('projects-end');
    if (!end) return;

    const rect = end.getBoundingClientRect();

    if (e.deltaY > 0 && rect.top <= window.innerHeight) {
      handleNavigate(2);
      lastScrollTime.current = now;
    }

    if (e.deltaY < 0) {
      handleNavigate(0);
      lastScrollTime.current = now;
    }

    return;
  }

  if (e.deltaY > 0 && currentSection < 2) {
    handleNavigate(currentSection + 1);
    lastScrollTime.current = now;
  } else if (e.deltaY < 0 && currentSection > 0) {
    handleNavigate(currentSection - 1);
    lastScrollTime.current = now;
  }
}, [
  currentSection,
  handleNavigate,
  isAnimating,
  isAdminMode,
  selectedVideo,
  showFakeAdmin,
]);


useEffect(() => {
  window.addEventListener('wheel', handleWheel, { passive: false });
  return () => window.removeEventListener('wheel', handleWheel);
}, [handleWheel]);


  const onOpenVideo = (url: string, id: string) => {
    setSelectedVideo(url);
    if (siteConfig.rieSettings.learningEnabled) {
      setProjects(prev => trackProjectView(id, prev));
    }
  };

  const handleLogin = () => {
    const passwordInput = loginInputRef.current;
    if (!passwordInput) return;
    
    const password = passwordInput.value.trim();
    if (!password) {
      setLoginError('Please enter the password');
      return;
    }
    
    if (loginAdmin(password)) {
      setIsAdminMode(true);
      setLoginVisible(false);
      setLoginError('');
      passwordInput.value = '';
    } else {
      setShowFakeAdmin(true);
      setLoginVisible(false);
      setLoginError('');
      passwordInput.value = '';
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAdminMode(false);
  };

  // RIE Optimization
  const optimizedProjects = useMemo(() => 
    getOptimizedProjects(projects, siteConfig), 
  [projects, siteConfig]);

  const t = TRANSLATIONS[lang];

  return (
    <div className={`relative w-screen h-screen overflow-hidden bg-[#020617] select-none ${lang === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <Background3D section={currentSection} />
      
      <AnimatePresence>
        {showFakeAdmin && (
          <FakeAdminPanel onClose={() => setShowFakeAdmin(false)} />
        )}
      </AnimatePresence>
      
      {!isAdminMode && !showFakeAdmin && (
        <>
          <Navigation t={t} currentSection={currentSection} onNavigate={handleNavigate} />
          <div className="fixed top-8 right-8 z-[200] flex gap-2">
            {(['en', 'ar', 'fr'] as Language[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`w-8 h-8 rounded-full text-[10px] font-bold border transition-all ${lang === l ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-900 border-white/10 text-slate-500'}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </>
      )}

      <AnimatePresence mode="wait">
        {isAdminMode ? (
          <motion.div key="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-50 h-full overflow-auto">
            <AdminPanel 
              projects={projects} 
              siteConfig={siteConfig}
              stats={globalStats}
              onLogout={handleLogout} 
              onUpdate={(p, c) => { setProjects(p); setSiteConfig(c); }}
            />
          </motion.div>
        ) : showFakeAdmin ? null : ( 
          <motion.main
            key={currentSection}
            initial={{ opacity: 0, scale: 1.1, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -100 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full z-10"
          >
            {currentSection === 0 && siteConfig.sections.intro && (
              <Hero title={siteConfig.heroTitle[lang]} subtitle={siteConfig.heroSubtitle[lang]} />
            )}
            {currentSection === 1 && siteConfig.sections.work && (
              <Projects 
                t={t}
                lang={lang}
                projects={optimizedProjects.filter(p => p.isVisible)} 
                onOpenVideo={onOpenVideo}
                onAnalyze={setActiveProjectForRIE}
              />
            )}
            {currentSection === 2 && siteConfig.sections.about && (
              <AboutContact t={t} lang={lang} config={siteConfig} />
            )}
          </motion.main>
        )}
      </AnimatePresence>

      {!isAdminMode && !showFakeAdmin && (
        <IntelligenceDashboard projects={optimizedProjects} config={siteConfig} lang={lang} />
      )}

      <AnimatePresence>
        {selectedVideo && (
          <YoutubePlayer videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>

      {/* Admin Login الحقيقي */}
      <AnimatePresence>
        {loginVisible && !showFakeAdmin && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[2000] bg-slate-950/90 backdrop-blur-3xl flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setLoginVisible(false);
                setLoginError('');
              }
            }}
          >
            <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[3rem] w-full max-w-md shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">Admin Access</h3>
                <button 
                  onClick={() => {
                    setLoginVisible(false);
                    setLoginError('');
                  }}
                  className="text-slate-500 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <input 
                  ref={loginInputRef}
                  type="password" 
                  placeholder="Enter Admin Password..." 
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none text-white transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleLogin();
                    }
                  }}
                />
                
                {loginError && (
                  <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-xl border border-red-400/20">
                    {loginError}
                  </div>
                )}
                
                <div className="text-slate-500 text-xs mt-2">
                  <p>Default password: <span className="font-mono">RyderAdmin2024!</span></p>
                  <p className="mt-2 text-yellow-500/70">
                    ⚠️ Wrong password? Enjoy a free concert! 🎵
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={handleLogin}
                  className="flex-1 py-4 bg-blue-600 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-blue-500 transition-colors text-white"
                >
                  Unlock Dashboard
                </button>
                <button 
                  onClick={() => {
                    setLoginVisible(false);
                    setLoginError('');
                  }}
                  className="px-8 py-4 bg-slate-800 rounded-2xl font-bold uppercase text-xs hover:bg-slate-700 transition-colors text-white"
                >
                  Cancel
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <button
                  onClick={() => {
                    setLoginVisible(false);
                    setShowFakeAdmin(true);
                  }}
                  className="text-sm text-yellow-400 hover:text-yellow-300"
                >
                  😉 Feeling lucky? Try anyway!
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      
      {!isAdminMode && !showFakeAdmin && (
        <div className="fixed bottom-8 left-8 flex items-center gap-3 z-50 pointer-events-none opacity-40 hover:opacity-80 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[9px] font-bold tracking-[0.4em] text-white uppercase">
            {siteConfig.location} // CORE_NODE
          </span>
          <span className="text-[7px] text-slate-600">
            Ctrl+Alt+A for Admin | Try /admin 😉
          </span>
        </div>
      )}
      
      {!isAdminMode && !showFakeAdmin && (
        <div className="fixed bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity">
          <a 
            href="/admin" 
            onClick={(e) => {
              e.pre0ventDefault();
              setShowFakeAdmin(true);
            }}
            className="text-[6px] text-slate-700 hover:text-slate-500"
            title="Secret admin link (not really)"
          >
            /admin
          </a>
        </div>
      )}
    </div>
  );
};

export default App;