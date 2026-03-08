import React from 'react';
import { X } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, onClose }) => {
  const getYoutubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|watch\?v=)([\w-]+)/);
    return match ? match[1] : url;
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
        <iframe
          src={`https://www.youtube.com/embed/${getYoutubeId(videoId)}?autoplay=1`}
          className="w-full h-full rounded-xl"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;