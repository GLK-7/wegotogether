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
    { date: '2023-06-27', description: 'Nos conhecemos' },
    { date: '2023-07-01', description: 'Primeiro encontro' },
    { date: '2023-07-31', description: 'Namoro' },
  ];

  return (
    <div className="gap-2 flex flex-col px-4 space-y-20 text-white rounded-lg shadow-lg w-full pt-24 mb-12">
      {/* Contador de Namoro */}
      <Section title="Our Time Together" id="time">
        <Countdown2 startDate={startDate} />
      </Section>

      {/* Carrossel de Fotos */}
      <Section title="Our Moments" id="moments">
        <PhotoCarousel folderId="1ouAcJJRMROWCPr1xTyPz2nUzcB4HerFT" height='400px'/>
      </Section>

      {/* Carrossel de Fotos Timeline */}
      <Section title="Our Travels" id="travels">
        <Travels/>
      </Section>

      {/* Música do Spotify */}
      <Section title="Our Song" id="song">
        <SpotifyMusic trackUrl={trackUrl} />
      </Section>

      {/* Linha do Tempo */}
      <Section title="Our Timeline" id="timeline">
        <Timeline2 events={timelineEvents} />
      </Section>

    </div>
  );
};

export default Home;
