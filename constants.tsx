
import React from 'react';
import { Youtube, Instagram, Mail, Github } from 'lucide-react';

import { Project, ProjectCategory, SiteConfig, Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    work: "WORK",
    about: "ABOUT",
    intro: "INTRO",
    featured: "FEATURED PROJECTS",
    location: "Based in",
    contact: "Let's Connect",
    analyze: "Analyze Synergy",
    rieActive: "RIE Active",
    views: "Views"
  },
  ar: {
    work: "أعمالي",
    about: "عني",
    intro: "البداية",
    featured: "مشاريع مميزة",
    location: "مقرها في",
    contact: "تواصل معي",
    analyze: "تحليل التوافق",
    rieActive: "محرك Ryder نشط",
    views: "مشاهدة"
  },
  fr: {
    work: "PROJETS",
    about: "À PROPOS",
    intro: "INTRO",
    featured: "PROJETS VEDETTES",
    location: "Basé à",
    contact: "Contactez-moi",
    analyze: "Analyse Synergie",
    rieActive: "RIE Actif",
    views: "Vues"
  }
};

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  heroTitle: {
    en: "STORY TELLING",
    ar: "سرد القصص",
    fr: "RÉCIT VISUEL"
  },
  heroSubtitle: {
    en: "Multidisciplinary Creative",
    ar: "مبدع متعدد التخصصات",
    fr: "Créatif Multidisciplinaire"
  },
  bio: {
    en: "Merging high-fidelity visuals with robust code architectures. I define digital interfaces through the intersection of creative direction and technical execution.",
    ar: "دمج المرئيات عالية الدقة مع بنيات برمجية قوية. أحدد الواجهات الرقمية من خلال تقاطع الإخراج الإبداعي والتنفيذ التقني.",
    fr: "Fusionner des visuels haute fidélité avec des architectures de code robustes. Je définis les interfaces numériques à l'intersection de la direction créative et de l'exécution technique."
  },
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
    title: { 
      en: 'Cinematic CGI Short', 
      ar: 'فيلم قصير CGI', 
      fr: 'Court-métrage CGI' 
    },
    description: { 
      en: 'Mind Flayer | A Stranger Things Fan Film', 
      ar: 'فيلم ثلاثي الأبعاد عالي الدقة يصور وحش Mind Flayer من Stranger Things.', 
      fr: 'Un court-métrage 3D haute fidélité mettant en scène le Mind Flayer de Stranger Things.' 
    },
    category: ProjectCategory.VIDEO_CGI,
    thumbnail: 'https://i9.ytimg.com/vi/vDgMZs2osY0/mqdefault.jpg?v=6979507b&sqp=CNSg5csG&rs=AOn4CLBiugRgatBfM_2oqmZfdRpxjb1LCg',
    videoUrl: 'https://youtu.be/vDgMZs2osY0',
    tech: ['Blender', 'After Effects'],
    isVisible: true,
    order: 1,
    adminScore: 10,
    stats: { views: 1250, clicks: 450 }
  },
  {
    id: 'project-2',
    title: { 
      en: 'Final Moments – Stranger Things 5 ⚡ Epic 4K Edit', 
      ar: 'لحظات الحسم – Stranger Things الموسم 5 ⚡', 
      fr: 'Moments Décisifs – Stranger Things Saison 5 ⚡' 
    },
    description: { 
      en: 'Dive into the most intense and emotional moments of Stranger Things Season 5 in stunning 4K! Witness the suspense, drama, and epic twists that make this series unforgettable.',
      ar: 'انغمس في أكثر اللحظات إثارة وعاطفية من الموسم الخامس من Stranger Things بدقة 4K مذهلة! شاهد التشويق والدراما والتطورات الملحمية التي تجعل هذه السلسلة لا تُنسى.',
      fr: 'Plongez dans les moments les plus intenses et émotionnels de la saison 5 de Stranger Things en 4K époustouflante ! Témoignez du suspense, du drame et des rebondissements épiques qui rendent cette série inoubliable.'
    },
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi/RkAV-ES6zG4/mqdefault.jpg?v=69299a09&sqp=CNSg5csG&rs=AOn4CLA29hHkYFozcECQH4KBhb1HGq4hfQ',
    videoUrl: 'https://youtu.be/RkAV-ES6zG4',
    tech: ['Premiere Pro', 'After Effects'],
    isVisible: true,
    order: 2,
    adminScore: 9,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-3',
    title: { 
      en: 'The Dark Side of Wednesday 🎃 | Halloween 4K Edit', 
      ar: 'الجانب المظلم لـ Wednesday 🎃 | تحرير هالوين 4K', 
      fr: 'Le Côté Obscur de Wednesday 🎃 | Montage Halloween 4K' 
    },
    description: { 
      en: 'Celebrate Halloween with Wednesday Addams in this dark and cinematic 4K edit! Experience the spooky vibes, eerie atmosphere, and chilling visuals that capture the essence of Wednesday’s world.',
      ar: 'احتفل بعيد الهالوين مع Wednesday Addams في هذا التحرير السينمائي المظلم بدقة 4K! استمتع بالأجواء المخيفة والجو الغريب والمرئيات المثيرة التي تجسد جوهر عالم Wednesday.',
      fr: 'Célébrez Halloween avec Wednesday Addams dans ce montage sombre et cinématographique en 4K ! Vivez les vibes effrayantes, l’atmosphère étrange et les visuels glaçants qui capturent l’essence du monde de Wednesday.'
    },
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi/kkriT3ju8Q4/mqdefault.jpg?v=692c92d4&sqp=CKyl5csG&rs=AOn4CLDmo1fXp4YMosyxbF6P4CA35Hli_g',
    videoUrl: 'https://youtu.be/kkriT3ju8Q4',
    tech: ['Premiere Pro', 'After Effects'],
    isVisible: true,
    order: 3,
    adminScore: 8,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-4',
    title: { 
      en: 'Stranger Things Edit | Cinematic Montage', 
      ar: 'تحرير Stranger Things | مونتاج سينمائي', 
      fr: 'Montage Stranger Things | Montage Cinématographique' 
    },
    description: { 
      en: 'A cinematic tribute to the world of Stranger Things featuring the most iconic moments and characters.',
      ar: 'تحية سينمائية لعالم Stranger Things تضم أكثر اللحظات والشخصيات شهرة.',
      fr: 'Un hommage cinématographique à l’univers de Stranger Things mettant en scène les moments et personnages les plus emblématiques.'
    },
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi_webp/GyZORHu8e7A/mq2.webp?sqp=CKyl5csG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDsgZShcMA8=&rs=AOn4CLA3z3mMgjbW8aKWRzf4f52ycV0olA',
    videoUrl: 'https://youtu.be/GyZORHu8e7A',
    tech: ['Premiere Pro'],
    isVisible: true,
    order: 4,
    adminScore: 7,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-5',
    title: { 
      en: 'Arthur Morgan | Monster - Red Dead Redemption Edit', 
      ar: 'آرثر مورغان | وحش - تحرير Red Dead Redemption', 
      fr: 'Arthur Morgan | Monstre - Montage Red Dead Redemption' 
    },
    description: { 
      en: 'An emotional edit exploring Arthur Morgan’s journey in Red Dead Redemption 2.',
      ar: 'تحرير عاطفي يستكشف رحلة آرثر مورغان في Red Dead Redemption 2.',
      fr: 'Un montage émotionnel explorant le parcours d’Arthur Morgan dans Red Dead Redemption 2.'
    },
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi_webp/y07Vi9kwVN0/mq2.webp?sqp=CNin5csG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWyhWMA8=&rs=AOn4CLCplJxIpSOc_Kz2vhww0ndZa63QQQ',
    videoUrl: 'https://youtu.be/y07Vi9kwVN0',
    tech: ['Premiere Pro', 'Premiere Pro Beta'],
    isVisible: true,
    order: 5,
    adminScore: 8,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-6',
    title: { 
      en: 'Heisenberg | Breaking Bad Edit', 
      ar: 'هايزنبرغ | تحرير Breaking Bad', 
      fr: 'Heisenberg | Montage Breaking Bad' 
    },
    description: { 
      en: 'A tribute to Walter White’s transformation into Heisenberg in Breaking Bad.',
      ar: 'تحية لتحول والتر وايت إلى هايزنبرغ في مسلسل Breaking Bad.',
      fr: 'Un hommage à la transformation de Walter White en Heisenberg dans Breaking Bad.'
    },
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi_webp/Fh4cIUBSsRc/mq2.webp?sqp=CNin5csG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEggUihyMA8=&rs=AOn4CLATvqShFfP90CqHjiuTfSq-xww8ZA',
    videoUrl: 'https://youtu.be/Fh4cIUBSsRc',
    tech: ['Premiere Pro', 'Premiere Pro Beta', 'After Effects'],
    isVisible: true,
    order: 6,
    adminScore: 9,
    stats: { views: 50, clicks: 60 }
  },
  {
    id: 'project-7',
    title: { 
      en: 'WAVY 🌊 | Forza Horizon 5 Cinematic Edit', 
      ar: 'WAVY 🌊 | تحرير سينمائي لـ Forza Horizon 5', 
      fr: 'WAVY 🌊 | Montage Cinématique Forza Horizon 5' 
    },
    description: { 
      en: 'A cinematic racing experience showcasing the beauty of Forza Horizon 5 in 4K.',
      ar: 'تجربة سباق سينمائية تعرض جمال Forza Horizon 5 بدقة 4K.',
      fr: 'Une expérience de course cinématique mettant en valeur la beauté de Forza Horizon 5 en 4K.'
    },
    category: ProjectCategory.VIDEO_EDIT,
    thumbnail: 'https://i9.ytimg.com/vi_webp/R9buJPmFBXQ/mq2.webp?sqp=CNin5csG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEkgVihlMA8=&rs=AOn4CLDpFjWiTcvsOMF-ufMod-RRfUypYw',
    videoUrl: 'https://youtu.be/R9buJPmFBXQ',
    tech: ['Premiere Pro', 'After Effects'],
    isVisible: true,
    order: 7,
    adminScore: 7,
    stats: { views: 50, clicks: 60 }
  },
{
    id: 'project-8',
    title: { 
      en: 'ArtApp - Digital Painting Application', 
      ar: 'ArtApp - تطبيق الرسم الرقمي', 
      fr: 'ArtApp - Application de Dessin Numérique' 
    },
    description: { 
      en: 'A powerful digital painting application built with C++ and OpenGL. Features multiple brush types, layers, color palettes, and real-time rendering.',
      ar: 'تطبيق رسم رقمي متطور مبرمج بلغة C++ و OpenGL. يحتوي على أنواع فرش متعددة، طبقات، لوحات ألوان، وعرض فوري.',
      fr: 'Une application de dessin numérique puissante développée en C++ et OpenGL. Comprend plusieurs types de pinceaux, calques, palettes de couleurs et rendu en temps réel.'
    },
    category: ProjectCategory.WEB_APP,
    thumbnail: 'https://res.cloudinary.com/ddqedxovk/image/upload/v1769559492/geaxee8zm9ejrxzc44j1.png',
    githubUrl: 'https://github.com/Bxat01/ArtApp',
    tech: ['C++', 'OpenGL', 'CMake', 'ImGUI', 'Git'],
    isVisible: true,
    order: 8,
    adminScore: 10,
    stats: { views: 50, clicks: 60 }
},
{
  id: 'project-9',
  title: { 
    en: 'Modern Login UI | HTML CSS JS', 
    ar: 'واجهة تسجيل دخول عصرية | HTML CSS JS',
    fr: 'Interface de Connexion Moderne | HTML CSS JS'
  },
  description: { 
    en: 'A modern animated login & registration interface built with HTML, CSS, and JavaScript. This project features smooth transitions, a responsive design, and a clean UI that dynamically switches between Sign In and Sign Up panels. Ideal as a template for authentication systems or stylish front-end projects.',
    ar: 'واجهة تسجيل دخول وتسجيل حساب عصرية ومتحركة، مطوّرة باستخدام HTML وCSS وJavaScript. تتميّز بتصميم متجاوب، انتقالات سلسة، وواجهة نظيفة تسمح بالتبديل الديناميكي بين تسجيل الدخول وإنشاء حساب. مناسبة كنموذج لأنظمة المصادقة أو مشاريع الواجهة الأمامية.',
    fr: 'Une interface moderne et animée de connexion et d’inscription développée avec HTML, CSS et JavaScript. Elle offre des transitions fluides, un design responsive et une interface épurée permettant de basculer dynamiquement entre Connexion et Inscription. Idéale comme modèle pour les systèmes d’authentification ou les projets front-end.'
  },
  category: ProjectCategory.WEB_APP,
  thumbnail: 'https://res.cloudinary.com/ddqedxovk/image/upload/v1769560625/hpnst30f4e9smydszxzy.png',
  githubUrl: 'https://github.com/Bxat01/modern-login-ui',
  tech: ['HTML', 'CSS', 'JavaScript'],
  isVisible: true,
  order: 8,
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
    tools: ['Blender', 'Unreal Engine', 'Houdini', 'ZBrush'],
  },
  {
    name: 'Web Dev',
    tools: ['React', 'Next.js', 'JavaScript', 'C#', 'PHP', 'MongoDB', 'C++'],
  },
];

export const TECH_LOGOS: Record<string, string> = {
  // Web Dev
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  MongoDB: 'https://cdn.simpleicons.org/mongodb/ffffff',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',

  // Video Editing
  'Premiere Pro':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Adobe_Premiere_Pro_CC_2026_icon.svg/640px-Adobe_Premiere_Pro_CC_2026_icon.svg.png',

  'After Effects':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Adobe_After_Effects_CC_2026_icon.svg/640px-Adobe_After_Effects_CC_2026_icon.svg.png',

  'DaVinci Resolve':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/DaVinci_Resolve_Studio.png/640px-DaVinci_Resolve_Studio.png',

  'Adobe Audition':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Adobe_Audition_CC_2026_icon.svg/640px-Adobe_Audition_CC_2026_icon.svg.png',

  // 3D & CGI
  Blender:
    'https://cdn.simpleicons.org/blender/F5792A',

  'Unreal Engine':
    'https://cdn.simpleicons.org/unrealengine/FFFFFF',

  Houdini:
    'https://cdn.simpleicons.org/houdini/FF4713',

  ZBrush:
    'https://res.cloudinary.com/ddqedxovk/image/upload/v1769570012/i2pyzq2orrtkxovzalda.png',
};




export const SOCIALS = [
  { platform: 'YouTube', url: 'https://www.youtube.com/@Ryder-XA', icon: <Youtube size={20} /> },
  { platform: 'Instagram', url: 'https://www.instagram.com/xavort/', icon: <Instagram size={20} /> },
  { platform: 'GitHub', url: 'https://github.com/Bxat01/', icon: <Github size={20} /> },
  { platform: 'Email', url: 'abdkadrxt100@gmail.com', icon: <Mail size={20} /> }
];
