import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Music, ExternalLink, Clock } from 'lucide-react';
import { Album } from '../types';

interface ArtistDiscographyProps {
  albums: Album[];
}

const ArtistDiscography: React.FC<ArtistDiscographyProps> = ({ albums }) => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* عنوان القسم - بسيط */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Music
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mt-3"></div>
        </div>

        <div className="space-y-24">
          {albums.map((album, idx) => (
            <div key={album.id} className="grid md:grid-cols-2 gap-10 items-start">
              
              {/* غلاف الألبوم */}
              <div className={`${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative group">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full max-w-md rounded-2xl shadow-xl border border-white/10"
                  />
                  
                  {/* حالة الألبوم (Published / Coming Soon) */}
                  {!album.isPublished && (
                    <div className="absolute top-4 right-4 bg-black/80 text-yellow-400 text-xs font-bold px-4 py-2 rounded-full border border-yellow-500/30">
                      COMING SOON
                    </div>
                  )}
                  
                  {/* رابط الألبوم (إذا منشور) */}
                  {album.isPublished && album.spotifyUrl && (
                    <a
                      href={album.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-green-600 transition border border-white/10"
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify" className="w-5 h-5" />
                      <span>Listen on Spotify</span>
                    </a>
                  )}
                </div>
              </div>

              {/* تفاصيل الألبوم */}
              <div className={`${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {album.title}
                </h3>
                
                <div className="space-y-2">
                  {album.tracks.map((track) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <Music size={16} className="text-slate-500" />
                        <span className="text-white font-medium">{track.title}</span>
                        {!track.isPublished && (
                          <span className="text-xs text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">
                            Soon
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {track.duration && (
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Clock size={12} /> {track.duration}
                          </span>
                        )}
                        
                        {track.isPublished && track.spotifyUrl && (
                          <a href={track.spotifyUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="text-slate-500 hover:text-green-500" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* رابط الألبوم الكامل (إذا منشور) */}
                {album.isPublished && album.spotifyUrl && (
                  <a
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm text-slate-400 hover:text-white"
                  >
                    <span>View full album on Spotify</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistDiscography;