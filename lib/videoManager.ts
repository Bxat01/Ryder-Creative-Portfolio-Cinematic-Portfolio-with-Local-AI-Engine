

export interface CustomVideo {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnail: string;
  description: string;
  category: string;
  isActive: boolean;
}

const CUSTOM_VIDEOS: CustomVideo[] = [
  {
    id: 'custom-1',
    title: 'Cinematic Showreel 2024',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/seed/showreel/800/450',
    description: 'My best cinematic work from 2024',
    category: 'Showreel',
    isActive: true
  },
  {
    id: 'custom-2',
    title: 'Unreal Engine 5 Demo',
    youtubeUrl: 'https://www.youtube.com/watch?v=9zeTbP8s7iY',
    thumbnail: 'https://picsum.photos/seed/ue5/800/450',
    description: 'Real-time rendering demo',
    category: 'Game Dev',
    isActive: true
  }
];

export const getCustomVideos = (): CustomVideo[] => {
  return CUSTOM_VIDEOS.filter(v => v.isActive);
};

export const addCustomVideo = (video: Omit<CustomVideo, 'id'>): string => {
  const newVideo: CustomVideo = {
    ...video,
    id: `custom-${Date.now()}`
  };
  
  localStorage.setItem('custom_videos', 
    JSON.stringify([...CUSTOM_VIDEOS, newVideo])
  );
  
  return newVideo.id;
};

export const toggleVideoActive = (videoId: string, isActive: boolean): void => {
  const stored = localStorage.getItem('custom_videos');
  if (stored) {
    const videos: CustomVideo[] = JSON.parse(stored);
    const updated = videos.map(v => 
      v.id === videoId ? { ...v, isActive } : v
    );
    localStorage.setItem('custom_videos', JSON.stringify(updated));
  }
};