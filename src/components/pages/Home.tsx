import React from 'react';
import Countdown2 from './../layout/Countdown2';
import PhotoCarousel from './../layout/PhotoCarousel';
import SpotifyMusic from './../layout/SpotifyMusic';
import Timeline2 from './../layout/Timeline2';
import Section from '../layout/Section';
import Travels from '../layout/Travels';

const Home: React.FC = () => {
  const startDate = new Date('2023-06-27');
  const trackUrl =
    'https://open.spotify.com/embed/track/0SccFtYdj75y6lL2OW10Cf?utm_source=generator';
  const timelineEvents = [
    { date: '27/06/2023', description: 'Nos conhecemos' },
    { date: '01/07/2023', description: 'Primeiro encontro' },
    { date: '30/07/2023', description: 'Namoro' },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0d0d0f]">
      {/* Subtle background texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-pink-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20 flex flex-col gap-10">
        {/* Time Together */}
        <Section title="Our Time Together" id="time">
          <Countdown2 startDate={startDate} />
        </Section>

        {/* Moments */}
        <Section title="Our Moments" id="moments">
          <PhotoCarousel folderId="1ouAcJJRMROWCPr1xTyPz2nUzcB4HerFT" height="400px" />
        </Section>

        {/* Travels */}
        <Section title="Our Travels" id="travels">
          <Travels />
        </Section>

        {/* Song */}
        <Section title="Our Song" id="song">
          <SpotifyMusic trackUrl={trackUrl} />
        </Section>

        {/* Timeline */}
        <Section title="Our Timeline" id="timeline">
          <Timeline2 events={timelineEvents} />
        </Section>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-2 pt-6">
          <div className="heartbeat text-2xl select-none">💕</div>
          <p className="text-gray-600 text-xs tracking-widest uppercase font-light">
            feito com amor
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Home;
