import PhotoCarousel from './PhotoCarousel';
import { MapPin, CalendarDots } from '@phosphor-icons/react';

const travelsData = [
  {
    title: 'Dourados - MS',
    folderId: '1rJ2U2EaNat7l7q-s3hTeksp0fWLfHQkb',
    date: '06/01/2024',
    emoji: '🌿',
  },
  {
    title: 'Guaratuba - PR',
    folderId: '1rnaHbLrBn4xvYiofKmiu0o3qxvcOmz8j',
    date: '08/01/2024',
    emoji: '🌊',
  },
  {
    title: 'Maragogi - AL',
    folderId: '1ru9QzEQM76d7GdVNDCPTUmP4HUw3zcHF',
    date: '07/12/2024',
    emoji: '🏖️',
  },
  {
    title: 'Curitiba - PR',
    folderId: '1i-HH4jIKlI3efG2qRKL7qtSX8Gu1wrNk',
    date: '20/12/2024',
    emoji: '🌲',
  },
];

const Travels: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 py-2">
      {travelsData.map((travel, index) => (
        <div key={index} className="flex flex-col gap-4">
          {/* Card header */}
          <div className="flex items-center gap-4 px-2">
            {/* Index badge */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-40" />
              <div className="relative w-10 h-10 rounded-full animated-gradient flex items-center justify-center text-lg shadow-lg">
                {travel.emoji}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
              {/* Destination */}
              <div className="flex items-center gap-1.5 min-w-0">
                <MapPin weight="fill" className="text-purple-400 w-4 h-4 flex-shrink-0" />
                <span
                  className="gradient-text font-semibold text-base sm:text-lg truncate"
                >
                  {travel.title}
                </span>
              </div>

              {/* Separator dot */}
              <span className="hidden sm:block text-gray-600">•</span>

              {/* Date */}
              <div className="flex items-center gap-1.5">
                <CalendarDots weight="fill" className="text-pink-400 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-medium">
                  {travel.date}
                </span>
              </div>
            </div>
          </div>

          {/* Separator line */}
          <div className="h-px bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-transparent mx-2" />

          {/* Carousel */}
          <PhotoCarousel folderId={travel.folderId} height="300px" />
        </div>
      ))}
    </div>
  );
};

export default Travels;
