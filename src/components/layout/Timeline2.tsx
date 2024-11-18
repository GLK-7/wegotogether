import React from 'react';

const Timeline2: React.FC<{
  events: { date: string; description: string }[];
}> = ({ events }) => {

  return (
    <div className="relative w-full bg-[#1e1e1e] py-6 px-4 min-h-96">
      <div className="absolute left-1/2 border-l border-purple-500 h-[70%] mt-2"></div>
      {events.map((event, index) => (
        <div key={index} className="flex justify-between mb-6 relative">
          <div className="flex-1 text-right pr-4 h-12 py-2">
            <span className="sm:text-xl font-bold text-purple-500">
              {event.date}
            </span>
          </div>
          <div className="flex-1 text-left pl-4">
            <p className="sm:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-500 font-semibold drop-shadow-lg h-12 py-2">
              <span className="">{event.description}</span>
            </p>
          </div>
          {/* Bolinha do marcador */}
          <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline2;
