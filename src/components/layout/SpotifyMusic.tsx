import React from 'react';

const SpotifyMusic: React.FC<{ trackUrl: string }> = ({ trackUrl }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-2">
      {/* Glow ring behind iframe */}
      <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 blur-xl" />
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src={trackUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Nossa Música"
            className="block"
          />
        </div>
      </div>

      <p className="text-gray-500 text-xs sm:text-sm text-center font-light tracking-wide">
        a música que nos define ♡
      </p>
    </div>
  );
};

export default SpotifyMusic;
