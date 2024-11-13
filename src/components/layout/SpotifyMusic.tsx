import React from 'react';

const SpotifyMusic: React.FC<{ trackUrl: string }> = ({ trackUrl }) => {
  return (
    <div className="flex justify-center p-4 rounded-lg max-w-md mx-auto">
      <iframe
        src={trackUrl}
        width="100%"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
        title="Música"
        className="rounded-md"
      ></iframe>
    </div>
  );
};

export default SpotifyMusic;
