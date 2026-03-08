import { Youtube, Instagram, Mail, Github, Music } from 'lucide-react';
import { Album, Project, SocialLink, ProjectCategory, SiteConfig } from './types';

// ================== إعدادات الموقع الأساسية ==================
export const SITE_CONFIG: SiteConfig = {
  heroTitle: "RYDER XA",
  heroSubtitle: "Artist & Creative Technologist",
  bio: "Merging music production with visual storytelling. Creating atmospheres through sound and code.",
  location: "Algeria (GMT+1)",
  sections: { intro: true, work: true, about: true },
  rieSettings: {
    enabled: true,
    learningEnabled: true,
    weights: {
      adminPriority: 5,
      viewCount: 2,
      recency: 1
    }
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Cinematic CGI Short',
    description: 'Mind Flayer | A Stranger Things Fan Film',
    category: ProjectCategory.VIDEO_CGI,
    thumbnail: 'https://i9.ytimg.com/vi/C3SvUaoS9Gg/mqdefault.jpg?v=6984aade&sqp=CIyjtM0G&rs=AOn4CLDic5C9nOPbLjYg3fG0SPT-t-UJFg',
    videoUrl: 'https://youtu.be/vDgMZs2osY0',
    tech: ['Blender', 'After Effects'],
    isVisible: true,
    order: 1,
    adminScore: 10,
    stats: { views: 1250, clicks: 450 }
  },
  {
    id: 'project-2',
    title: 'Final Moments – Stranger Things 5',
    description: 'Epic 4K Edit of Stranger Things Season 5',
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi/RkAV-ES6zG4/mqdefault.jpg?v=69299a09&sqp=CNyZtM0G&rs=AOn4CLDgTaEtzZ-YknIQWkDwVwiRa1cTzw',
    videoUrl: 'https://youtu.be/RkAV-ES6zG4',
    tech: ['Premiere Pro', 'After Effects'],
    isVisible: true,
    order: 2,
    adminScore: 9,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-3',
    title: 'The Dark Side of Wednesday',
    description: 'Halloween 4K Edit',
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi/kkriT3ju8Q4/mqdefault.jpg?v=692c92d4&sqp=CNyZtM0G&rs=AOn4CLC-PKKTbk8zVnop7B88_wyPR9bbQw',
    videoUrl: 'https://youtu.be/kkriT3ju8Q4',
    tech: ['Premiere Pro', 'After Effects'],
    isVisible: true,
    order: 3,
    adminScore: 8,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-4',
    title: 'Stranger Things Edit',
    description: 'Cinematic Montage',
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi/GyZORHu8e7A/mqdefault.jpg?sqp=CNyZtM0G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDsgZShcMA8=&rs=AOn4CLAG7VZ7x_kT1-uM5tKR9Yz_Ta139A',
    videoUrl: 'https://youtu.be/GyZORHu8e7A',
    tech: ['Premiere Pro'],
    isVisible: true,
    order: 4,
    adminScore: 7,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-5',
    title: 'Arthur Morgan | Monster',
    description: 'Red Dead Redemption 2 Edit',
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi/y07Vi9kwVN0/mqdefault.jpg?sqp=CNyZtM0G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWyhWMA8=&rs=AOn4CLBJV5BXwh7VJ2NSahBiTwWNH_HApQ',
    videoUrl: 'https://youtu.be/y07Vi9kwVN0',
    tech: ['Premiere Pro'],
    isVisible: true,
    order: 5,
    adminScore: 8,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-6',
    title: 'Heisenberg | Breaking Bad',
    description: 'Breaking Bad Edit',
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi/C5crwgtvKpQ/mqdefault.jpg?v=6929a323&sqp=CNyZtM0G&rs=AOn4CLAHETtAoVG0DrBDvvO4o45519hCzg',
    videoUrl: 'https://youtu.be/Fh4cIUBSsRc',
    tech: ['Premiere Pro'],
    isVisible: true,
    order: 6,
    adminScore: 9,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-7',
    title: 'WAVY 🌊',
    description: 'Forza Horizon 5 Cinematic Edit',
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi/R9buJPmFBXQ/mqdefault.jpg?sqp=CNyZtM0G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEkgVihlMA8=&rs=AOn4CLCD7dYbI-aRlGz7UKhF-kPdPd3fWQ',
    videoUrl: 'https://youtu.be/R9buJPmFBXQ',
    tech: ['Premiere Pro', 'After Effects'],
    isVisible: true,
    order: 7,
    adminScore: 7,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-8',
    title: 'ArtApp',
    description: 'Digital Painting Application built with C++ and OpenGL',
    category: ProjectCategory.WEB_APP,
    thumbnail: 'https://res.cloudinary.com/ddqedxovk/image/upload/v1769559492/geaxee8zm9ejrxzc44j1.png',
    githubUrl: 'https://github.com/Bxat01/ArtApp',
    tech: ['C++', 'OpenGL'],
    isVisible: true,
    order: 8,
    adminScore: 10,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-9',
    title: 'Modern Login UI',
    description: 'Animated login & registration interface',
    category: ProjectCategory.WEB_APP,
    thumbnail: 'https://res.cloudinary.com/ddqedxovk/image/upload/v1769560625/hpnst30f4e9smydszxzy.png',
    githubUrl: 'https://github.com/Bxat01/modern-login-ui',
    tech: ['HTML', 'CSS', 'JavaScript'],
    isVisible: true,
    order: 9,
    adminScore: 10,
    stats: { views: 50, clicks: 60 }
  }
];


export const TECH_STACK = [
  {
    name: 'Video Editing',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Adobe Audition'],
  },
  {
    name: '3D & CGI',
    tools: ['Blender', 'Unreal Engine', 'Houdini'],
  },
  {
    name: 'Web Dev',
    tools: ['React', 'Next.js', 'JavaScript', 'PHP', 'C++', 'MongoDB'],
  },
];

export const TECH_LOGOS: Record<string, string> = {
  // Web Dev
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  
  // Video Editing
  'Premiere Pro': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg',
  'After Effects': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
  'DaVinci Resolve': 'https://img.icons8.com/color/48/davinci-resolve.png',
  'Adobe Audition': 'https://img.icons8.com/color/48/adobe-audition.png',
  
  // 3D & CGI
  Blender: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
  'Unreal Engine': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg',
  Houdini: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/houdini/houdini-original.svg',
  ZBrush: 'https://img.icons8.com/color/48/zbrush.png',
};
// ================== وسائل التواصل ==================
export const SOCIALS: SocialLink[] = [
  { platform: 'Spotify', url: 'https://open.spotify.com/artist/5yP50okdrAz1yThcoadmEI?si=ltYikzEjTUy7ErcreyNvAQ', icon: 'Spotify' },
  { platform: 'YouTube', url: 'https://youtube.com/@Ryder-XA', icon: 'Youtube' },
  { platform: 'Instagram', url: 'https://instagram.com/xavort', icon: 'Instagram' },
  { platform: 'GitHub', url: 'https://github.com/Bxat01', icon: 'Github' },
  { platform: 'Email', url: 'abdkadrxt100@gmail.com', icon: 'Mail' }
];

// ================== معلومات شخصية ==================
export const PERSONAL_INFO = {
  name: 'RYDER XA',
  title: 'Artist, Producer & Creative Technologist',
  bio: "I'm a music producer and video editor from Algeria. I create atmospheric sounds and cinematic visuals that blend emotion with technology. My work explores the intersection of sound design, visual storytelling, and creative coding. Currently working on new music and visual projects inspired by cinematic scores and modern electronic production.",
  location: 'Algeria (GMT+1)'
};

// ================== الألبومات والأغاني ==================
export const ALBUMS: Album[] = [
  {
    id: 'fumes-dreams',
    title: 'Shattered & Reborn',
    coverImage: 'https://res.cloudinary.com/ddqedxovk/image/upload/v1772943388/mq4sfkdgjmndymodma4a.png',
    spotifyUrl: 'https://open.spotify.com/album/1LnSucJyIn4rwDUol31WXu?si=hCD-krBbRcaGglUaRAdTNw',
    isPublished: true,
    tracks: [
      {
        id: 'Say-My-Name-Cupcake',
        title: 'Say My Name, Cupcake',
        duration: '4:00',
        spotifyUrl: 'https://open.spotify.com/track/1b4kaByRMozbpiDMAinPxF?si=b5eaa484aa39431a',
        isPublished: true
      }
    ]
  },
  {
    id: 'shadows-to-light',
    title: 'From Shadows to Light',
    coverImage: 'https://res.cloudinary.com/ddqedxovk/image/upload/v1772942433/lmt6vt9e552k6fu1vdkz.jpg',
    spotifyUrl: 'https://open.spotify.com/album/your_album_id_2',
    isPublished: null,
    tracks: [
      {
        id: 'inspired-by-jensen',
        title: 'Inspired by Jensen Ackles',
        duration: '2:34',
        spotifyUrl: 'https://open.spotify.com/track/your_track_id_2',
        isPublished: null
      },
      {
        id: 'silent-bomb',
        title: 'Silent Bomb',
        duration: '2:58',
        spotifyUrl: 'https://open.spotify.com/track/your_track_id_3',
        isPublished: null
      }
    ]
  },
  {
    id: 'shattered-reborn',
    title: 'Shattered & Reborn',
    coverImage: 'https://res.cloudinary.com/ddqedxovk/image/upload/v1772942397/adzn9xavedo6587t2el6.jpg',
    spotifyUrl: 'https://open.spotify.com/album/your_album_id_3',
    isPublished: null,
    tracks: [
      {
        id: 'Static-in-My-Head',
        title: 'Static in My Head',
        duration: '2:19',
        spotifyUrl: 'https://open.spotify.com/',
        isPublished: null
      }
    ]
  },

];