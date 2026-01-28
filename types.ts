
export enum ProjectCategory {
  VIDEO_CGI = 'Video & CGI',
  WEB_APP = 'Web & App',
  GAME_DEV = 'Game Dev',
  VIDEO_EDIT = "Edits"
}

export type Language = 'en' | 'ar' | 'fr';

export interface ProjectAnalytics {
  views: number;
  clicks: number;
  lastViewed?: number;
}

export interface Project {
  _id?: string;
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: ProjectCategory;
  thumbnail: string;
  videoUrl?: string; 
  liveLink?: string;
  tech: string[];
  isVisible: boolean;
  order: number;
  adminScore: number; 
  stats: ProjectAnalytics;
  rieScore?: number; 
}

export interface SiteConfig {
  heroTitle: Record<Language, string>;
  heroSubtitle: Record<Language, string>;
  bio: Record<Language, string>;
  location: string;
  sections: {
    intro: boolean;
    work: boolean;
    about: boolean;
  };
  rieSettings: {
    enabled: boolean;
    learningEnabled: boolean;
    weights: {
      adminPriority: number;
      viewCount: number;
      recency: number;
    };
  };
}

export interface GlobalAnalytics {
  totalVisitors: number;
  sectionViews: Record<string, number>;
}
