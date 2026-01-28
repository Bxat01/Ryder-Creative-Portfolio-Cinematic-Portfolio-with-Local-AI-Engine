
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface YoutubePlayerProps {
  videoId: string;
  onClose: () => void;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoId, onClose }) => {
  const [isReady, setIsReady] = useState(false);

  const getEmbedId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const id = getEmbedId(videoId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-slate-950/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <div className="relative w-full max-w-6xl aspect-video rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-white/5" onClick={e => e.stopPropagation()}>
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsReady(true)}
        />
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all z-10"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
    </motion.div>
  );
};

export default YoutubePlayer;
