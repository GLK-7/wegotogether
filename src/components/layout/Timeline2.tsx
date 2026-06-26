import React from 'react';

const icons: Record<string, string> = {
  'Nos conhecemos': '👋',
  'Primeiro encontro': '☕',
  'Namoro': '💕',
};

const Timeline2: React.FC<{
  events: { date: string; description: string }[];
}> = ({ events }) => {
  return (
    <div className="relative py-4 px-2 sm:px-6">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/60 via-pink-500/60 to-transparent" />

      <div className="flex flex-col gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center gap-4 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Text side */}
            <div
              className={`flex-1 ${
                index % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'
              }`}
            >
              <div
                className={`inline-flex flex-col ${
                  index % 2 === 0 ? 'items-end' : 'items-start'
                } gap-1`}
              >
                <span className="text-xs sm:text-sm text-purple-300/70 font-medium tracking-widest uppercase">
                  {event.date}
                </span>
                <p
                  className="text-base sm:text-lg md:text-xl font-semibold gradient-text"
                >
                  {event.description}
                </p>
              </div>
            </div>

            {/* Center dot */}
            <div className="relative z-10 flex-shrink-0 flex items-center justify-center">
              <div className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-40" />
              <div className="relative w-10 h-10 rounded-full animated-gradient flex items-center justify-center text-base shadow-lg">
                {icons[event.description] ?? '✦'}
              </div>
            </div>

            {/* Empty side */}
            <div className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline2;
