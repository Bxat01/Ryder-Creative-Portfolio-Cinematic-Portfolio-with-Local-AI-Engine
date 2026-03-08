import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import Music from './components/Music';
import Navigation from './components/Navigation';
import YoutubePlayer from './components/YoutubePlayer';
import AdminPanel from './components/AdminPanel';
import FakeAdminPanel from './components/FakeAdminPanel';
import Footer from './components/Footer';
import { Project, SiteConfig } from './types';
import { PROJECTS, SITE_CONFIG, ALBUMS } from './constants';
import { isAdminLoggedIn } from './lib/auth';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showFakeAdmin, setShowFakeAdmin] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [projects] = useState<Project[]>(PROJECTS);
  const [siteConfig] = useState<SiteConfig>(SITE_CONFIG);

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

  const handleOpenVideo = (url: string) => {
    setSelectedVideo(url);
  };

  return (
    <div className="relative w-full bg-slate-950 text-white">
      <AnimatePresence>
        {showFakeAdmin && (
          <FakeAdminPanel onClose={() => setShowFakeAdmin(false)} />
        )}
      </AnimatePresence>

      {!isAdminMode && !showFakeAdmin && (
        <Navigation />
      )}

      {isAdminMode ? (
        <AdminPanel
          projects={projects}
          siteConfig={siteConfig}
          stats={{ totalVisitors: 0, sectionViews: {} }}
          onLogout={() => setIsAdminMode(false)}
          onUpdate={() => {}}
        />
      ) : showFakeAdmin ? null : (
        <main className="relative">
          <Hero title={siteConfig.heroTitle} subtitle={siteConfig.heroSubtitle} />
          <Music albums={ALBUMS} />
          <Projects
            projects={projects.filter(p => p.isVisible)}
            onOpenVideo={handleOpenVideo}
          />
          <AboutContact config={siteConfig} />
          <Footer />
        </main>
      )}

      <AnimatePresence>
        {selectedVideo && (
          <YoutubePlayer videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;