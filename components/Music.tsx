import React, { useState } from 'react';
import { Album } from '../types';
import { ExternalLink, Play, Calendar, Clock, Copy, Check } from 'lucide-react';

interface MusicProps {
  albums: Album[];
}

const Music: React.FC<MusicProps> = ({ albums }) => {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
  const [copiedAlbum, setCopiedAlbum] = useState<string | null>(null);

  const copyAlbumLink = (album: Album) => {
    if (album.spotifyUrl) {
      navigator.clipboard.writeText(album.spotifyUrl);
      setCopiedAlbum(album.id);
      setTimeout(() => setCopiedAlbum(null), 2000);
    }
  };

  const getYear = () => {
    return new Date().getFullYear().toString();
  };

  return (
    <section id="music" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1DB954]/10 px-4 py-2 rounded-full border border-[#1DB954]/20 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" 
              alt="Spotify" 
              className="w-4 h-4"
            />
            <span className="text-[#1DB954] text-sm font-medium">SPOTIFY ARTIST</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Music
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Atmospheric sounds and cinematic visuals. Each track is crafted to take you on a journey.
          </p>
        </div>
        
        <div className="space-y-24">
          {albums.map((album, index) => (
            <div 
              key={album.id} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-16 items-start`}
            >
              {/* Cover Image - بدون حركة عند hover */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1DB954]/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="relative w-full rounded-2xl shadow-2xl border border-slate-800"
                  />
                  
                  {!album.isPublished && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/90 backdrop-blur-sm text-slate-300 text-sm font-bold px-8 py-4 rounded-full border-2 border-slate-600/50 shadow-2xl transform rotate-[-5deg] flex items-center gap-2">
                        <Clock size={18} className="text-slate-400" />
                        COMING SOON
                      </div>
                    </div>
                  )}
                  
                  {/* Spotify Banner - زر البلاي变成了 لوجو سبوتيفاي */}
                  {album.isPublished && (
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-[#1DB954]/30 flex items-center gap-1">
                        <span className="text-[#1DB954]">●</span> Available on Spotify
                      </div>
                      <a
                        href={album.spotifyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/70 backdrop-blur-sm p-2 rounded-full hover:bg-[#1DB954] transition-all duration-300 border border-[#1DB954]/30"
                      >
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" 
                          alt="Spotify" 
                          className="w-5 h-5"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Track List */}
              <div className="flex-1 w-full">
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {album.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {getYear()}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {album.tracks.length} {album.tracks.length === 1 ? 'track' : 'tracks'}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-8">
                  {album.tracks.map((track, trackIndex) => (
                    <div 
                      key={track.id} 
                      className="group"
                      onMouseEnter={() => setHoveredTrack(track.id)}
                      onMouseLeave={() => setHoveredTrack(null)}
                    >
                      {track.isPublished && track.spotifyUrl ? (
                        <a
                          href={track.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between py-4 px-5 bg-slate-800/40 hover:bg-slate-800/80 rounded-xl border border-slate-700/50 hover:border-[#1DB954]/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-[#1DB954] transition-colors">
                              {hoveredTrack === track.id ? (
                                <Play size={14} className="text-black ml-0.5" />
                              ) : (
                                <span className="text-sm font-mono text-slate-400">{trackIndex + 1}</span>
                              )}
                            </div>
                            <div>
                              <span className="text-slate-200 group-hover:text-white font-medium">
                                {track.title}
                              </span>
                              <span className="text-xs text-[#1DB954]/70 ml-3">● Spotify</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            {track.duration && (
                              <span className="text-sm text-slate-500">{track.duration}</span>
                            )}
                            <ExternalLink 
                              size={16} 
                              className="text-[#1DB954] opacity-0 group-hover:opacity-100 transition-opacity" 
                            />
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center justify-between py-4 px-5 bg-slate-800/20 rounded-xl border border-slate-700/30 opacity-60">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center">
                              <span className="text-sm font-mono text-slate-500">{trackIndex + 1}</span>
                            </div>
                            <span className="text-slate-500">{track.title}</span>
                            <span className="text-xs bg-slate-700/50 text-slate-400 px-2 py-1 rounded-full flex items-center gap-1">
                              <Clock size={12} /> Soon
                            </span>
                          </div>
                          {track.duration && (
                            <span className="text-sm text-slate-600">{track.duration}</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Album Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  {album.isPublished && album.spotifyUrl && (
                    <>
                      <a
                        href={album.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-medium rounded-xl transition-all duration-300 shadow-lg shadow-[#1DB954]/20"
                      >
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" 
                          alt="Spotify" 
                          className="w-5 h-5"
                        />
                        <span>Listen Full Album</span>
                        <ExternalLink size={16} />
                      </a>
                      
                      <button 
                        onClick={() => copyAlbumLink(album)}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-all duration-300 flex items-center gap-2"
                      >
                        {copiedAlbum === album.id ? (
                          <>
                            <Check size={18} className="text-green-500" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={18} />
                            <span>Share Album</span>
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spotify Profile Link */}
        <div className="mt-20 text-center">
          <a
            href="https://open.spotify.com/artist/5yP50okdrAz1yThcoadmEI?si=ltYikzEjTUy7ErcreyNvAQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1DB954] to-[#1ed760] hover:from-[#1ed760] hover:to-[#1DB954] text-black font-bold rounded-full transition-all duration-300 shadow-2xl shadow-[#1DB954]/30"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" 
              alt="Spotify" 
              className="w-6 h-6"
            />
            <span className="text-lg">View Full Spotify Profile</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;