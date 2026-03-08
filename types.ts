export enum ProjectCategory {
  VIDEO_CGI = 'Video & CGI',
  WEB_APP = 'Web & App',
  GAME_DEV = 'Game Dev',
  VIDEO_EDIT = "Edits"
}

export interface ProjectAnalytics {
  views: number;
  clicks: number;
  lastViewed?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  thumbnail: string;
  videoUrl?: string;
  githubUrl?: string;
  tech: string[];
  isVisible: boolean;
  order: number;
  adminScore: number;
  stats: ProjectAnalytics;
  rieScore?: number;
}

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  bio: string;
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

export interface Track {
  id: string;
  title: string;
  duration?: string | null;
  spotifyUrl: string | null;
  isPublished: boolean;
}

export interface Album {
  id: string;
  title: string;
  coverImage: string;
  spotifyUrl: string | null;
  isPublished: boolean;
  tracks: Track[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}