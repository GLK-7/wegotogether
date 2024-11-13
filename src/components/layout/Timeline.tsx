import React from 'react';

const Timeline: React.FC<{
  events: { date: string; description: string }[];
}> = ({ events }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-purple-500 to-pink-500 rounded-lg p-1 m-4 shadow-lg">
      <div className="m-0 p-0 w-full flex items-center justify-center rounded mb-2">
        <h1 className="md:text-3xl font-bold m-2 bg-clip-text text-[#1e1e1e]">
          Nossa Linha do Tempo
        </h1>
      </div>
      <div className="relative w-full bg-[#1e1e1e] py-6">
        <div className="absolute left-1/2 border-l border-purple-500 h-[70%]"></div>
        {events.map((event, index) => (
          <div key={index} className="flex justify-between mb-6 relative">
            <div className="flex-1 text-right pr-4">
              <span className="font-bold text-purple-500">{event.date}</span>
            </div>
            <div className="flex-1 text-left pl-4">
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-500 font-semibold drop-shadow-lg">
                {event.description}
              </p>
            </div>
            {/* Bolinha do marcador */}
            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
