import React, { useState } from 'react';
import { Project } from '../types';
import { Play, Github, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenVideo: (url: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onOpenVideo }) => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <div key={project.id} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-900">
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
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Play size={20} className="text-black ml-1" />
                    </div>
                  </button>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                    {project.category}
                  </span>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;