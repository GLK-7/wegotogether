import React, { useState, useEffect } from 'react';
import TimeNumber from './TimeNumber';

const Countdown: React.FC<{ startDate: Date }> = ({ startDate }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      setTime(now - startDate.getTime());
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  const totalDays = Math.floor(time / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30.44);
  const days = Math.floor(totalDays % 30.44);
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="flex flex-col items-center gap-6 py-2">
      {/* Counter row */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-7">
        <TimeNumber number={months} title="meses" />
        <TimeNumber number={days} title="dias" />
        <TimeNumber number={hours} title="horas" />
        <TimeNumber number={minutes} title="minutos" />
      </div>

      {/* Tagline */}
      <p className="text-gray-500 text-xs sm:text-sm text-center font-light tracking-wide">
        e cada segundo vale a pena ♡
      </p>
    </div>
  );
};

export default Countdown;
