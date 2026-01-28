
import { Project, SiteConfig } from '../types';


export const calculateRIEScore = (project: Project, config: SiteConfig): number => {
  const { weights } = config.rieSettings;
  
  const adminPart = project.adminScore * weights.adminPriority;

  const viewPart = Math.log10(Math.max(project.stats.views, 1) + 1) * weights.viewCount;

  const now = Date.now();
  const lastViewed = project.stats.lastViewed || now;
  const hoursSinceLastView = (now - lastViewed) / (1000 * 60 * 60);
  const recencyPart = Math.max(0, 10 - hoursSinceLastView / 24) * weights.recency;

  return adminPart + viewPart + recencyPart;
};

export const getOptimizedProjects = (projects: Project[], config: SiteConfig): Project[] => {
  if (!config.rieSettings.enabled) {
    return [...projects].sort((a, b) => a.order - b.order);
  }

  return projects
    .map(p => ({
      ...p,
      rieScore: calculateRIEScore(p, config)
    }))
    .sort((a, b) => (b.rieScore || 0) - (a.rieScore || 0));
};

export const getFeatureLabels = (project: Project): string[] => {
  const labels: string[] = [];
  if (project.stats.views > 100) labels.push('Trending');
  if (project.adminScore > 8) labels.push('Featured');
  if (project.tech.length > 5) labels.push('Complex Build');
  return labels;
};
