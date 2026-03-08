import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye } from 'lucide-react';
import { ProjectCategory, Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onOpenVideo: (url: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onOpenVideo }) => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    ...Object.values(ProjectCategory),
  ];

  const visibleProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="w-full py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mt-3"></div>
        </div>

        {/* الفلاتر */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {project.videoUrl && (
                  <button
                    onClick={() => onOpenVideo(project.videoUrl!)}
                    className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex items-center justify-center"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Play size={24} className="text-black ml-1" />
                    </div>
                  </button>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Eye size={14} /> {project.stats.views}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;