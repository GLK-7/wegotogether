import PhotoCarousel from "./PhotoCarousel";
import { MapPin, CalendarDots } from '@phosphor-icons/react';

const Travels: React.FC = () => {
  const travelsData = [
    {
      title: 'Dourados - MS',
      folderId: '1rJ2U2EaNat7l7q-s3hTeksp0fWLfHQkb',
      date: '06/01/2024',
    },
    {
      title: 'Guaratuba - PR',
      folderId: '1rnaHbLrBn4xvYiofKmiu0o3qxvcOmz8j',
      date: '08/01/2024',
    },
    {
      title: 'Maragogi - AL',
      folderId: '1ru9QzEQM76d7GdVNDCPTUmP4HUw3zcHF',
      date: '07/12/2024',
    },
    {
      title: 'Curitiba - PR',
      folderId: '1i-HH4jIKlI3efG2qRKL7qtSX8Gu1wrNk',
      date: '20/12/2024',
    }
  ];





  return (
    <div className="relative flex items-center pt-4 justify-center">
      <div className="relative w-full bg-[#1e1e1e] py-0 m-0">
        {/* Linha dinâmica 
        <div
          className="absolute left-[-10px] border-l border-2 border-purple-500"
          style={{ height: lineHeight }}
        />*/}
        {travelsData.map((event, index) => (
          <div key={index} className="flex flex-col w-full mb-6 relative">
            {/* Dot 
            <div className="dot absolute rounded-full bg-purple-500 h-6 w-6 ml-[-36.6px] border-2 border-[#1e1e1e]"></div>*/}
            <div className="flex flex-wrap md:gap-4 gap-2 w-full px-4">
              {/* Título */}
              <div className="flex flex-row">
                <MapPin className="md:h-7 h-6 w-auto" weight="fill" color="#a855f7" />
                <span
                  className="ml-1 sm:text-xl text-base bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-semibold drop-shadow-lg h-21 py-1.5"
                >
                  {event.title}
                </span>
              </div>
              {/* Data */}
              <div className="flex flex-row">
                <CalendarDots className="md:h-7 h-6 w-auto" weight="fill" color="#ec4899" />
                <span
                  className="ml-1 sm:text-xl text-base bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-semibold drop-shadow-lg h-21 py-1.5"
                >
                  {event.date}
                </span>
              </div>
            </div>
            {/* Carrossel */}
            <PhotoCarousel folderId={event.folderId} height="400px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travels;
