import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye } from 'lucide-react';
import { ProjectCategory, Project, Language } from '../types';

interface ProjectsProps {
  t: any;
  lang: Language;
  onOpenVideo: (url: string, id: string) => void;
  projects: Project[];
  onAnalyze: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({
  t,
  lang,
  onOpenVideo,
  projects,
}) => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    ...Object.values(ProjectCategory),
  ];

  const visibleProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section className="h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 py-24 h-full flex flex-col">

        <div className="shrink-0 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
                {t.work}
                <span className="text-blue-600">.</span>
              </h2>
              <p className="text-slate-500 text-[10px] font-black tracking-[0.4em] uppercase">
                High-end cinematic experiences
              </p>
            </motion.div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all border ${
                    filter === cat
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-transparent text-slate-500 border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          id="projects-scroll"
          className="flex-1 overflow-y-auto pr-4 scrollbar-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-40">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -120,
                    x: i % 2 === 0 ? -80 : 80,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] overflow-hidden"
                >
           
<div className="relative aspect-[4/3] overflow-hidden">
  <img
    src={project.thumbnail}
    alt={project.title[lang] || project.title.en}
    loading="lazy"
    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
  />

  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        absolute top-4 right-4
        w-9 h-9
        rounded-full
        bg-blue-600/90
        text-white
        flex items-center justify-center
        opacity-0
        group-hover:opacity-100
        scale-75
        group-hover:scale-100
        transition-all duration-300
        z-30
      "
    >
      <span className="text-lg font-bold">↗</span>
    </a>
  )}

  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
    <div className="flex gap-4">
      {project.videoUrl && (
        <button
          onClick={() => onOpenVideo(project.videoUrl!, project.id)}
          className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <Play fill="currentColor" size={26} />
        </button>
      )}

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition text-[11px] font-black"
        >
          GH
        </a>
      )}
    </div>
  </div>

  <div className="absolute top-6 left-6">
    <span className="px-4 py-1 bg-black/70 rounded-full text-[9px] font-bold uppercase text-blue-400">
      {project.category}
    </span>
  </div>
</div>


<div className="p-10">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-2xl font-black">
      {project.title[lang] || project.title.en}
    </h3>
    <div className="flex items-center gap-2 text-[9px] text-slate-500 font-bold uppercase">
      <Eye size={12} /> {project.stats.views}
    </div>
  </div>

  <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
    {project.description[lang] || project.description.en}
  </p>

  <div className="flex flex-wrap gap-2">
    {project.tech.map((t) => (
      <span
        key={t}
        className="text-[8px] uppercase font-bold px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400"
      >
        {t}
      </span>
    ))}
  </div>
</div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div id="projects-end" className="h-2" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
