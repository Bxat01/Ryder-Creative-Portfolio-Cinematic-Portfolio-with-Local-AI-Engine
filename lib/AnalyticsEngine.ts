
import { Project, GlobalAnalytics } from '../types';



export const trackProjectView = (projectId: string, projects: Project[]): Project[] => {
  return projects.map(p => {
    if (p.id === projectId) {
      return {
        ...p,
        stats: {
          ...p.stats,
          views: p.stats.views + 1,
          lastViewed: Date.now()
        }
      };
    }
    return p;
  });
};

export const trackGlobalVisit = (currentStats: GlobalAnalytics): GlobalAnalytics => {
  return {
    ...currentStats,
    totalVisitors: currentStats.totalVisitors + 1
  };
};

export const trackSectionView = (sectionId: string, currentStats: GlobalAnalytics): GlobalAnalytics => {
  return {
    ...currentStats,
    sectionViews: {
      ...currentStats.sectionViews,
      [sectionId]: (currentStats.sectionViews[sectionId] || 0) + 1
    }
  };
};
