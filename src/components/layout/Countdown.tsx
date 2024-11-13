import React, { useState, useEffect } from 'react';

const Countdown: React.FC<{ startDate: Date }> = ({ startDate }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate.getTime();
      setTime(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col items-center rounded-lg bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="mb-[-10px] m-3 p-0 flex items-center items-center justify-center rounded">
        <h1 className="text-3xl font-bold m-2 p-0 bg-clip-text text-[#1e1e1e]">
          Tempo Juntos S2
        </h1>
      </div>
      <div className="text-lg flex space-x-8 p-6 bg-[#1e1e1e] m-1 rounded">
        <span className="flex flex-col items-center">
          <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-500 drop-shadow-lg pt-6">
            {days}
          </span>
          <span className="text-pink-400 md:text-lg font-semibold">dias</span>
        </span>
        <span className="flex flex-col items-center">
          <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-500 drop-shadow-lg pt-6">
            {hours}
          </span>
          <span className="text-pink-400 md:text-lg font-semibold">horas</span>
        </span>
        <span className="flex flex-col items-center">
          <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-500 drop-shadow-lg pt-6">
            {minutes}
          </span>
          <span className="text-pink-400 md:text-lg font-semibold">
            minutos
          </span>
        </span>
        <span className="flex flex-col items-center">
          <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-500 drop-shadow-lg pt-6">
            {seconds}
          </span>
          <span className="text-pink-400 md:text-lg font-semibold">
            segundos
          </span>
        </span>
      </div>
    </div>
  );
};

export default Countdown;
