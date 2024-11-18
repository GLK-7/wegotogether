import React, { useState, useEffect } from 'react';
import TimeNumber from './TimeNumber';

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

  const totalDays = Math.floor(time / (1000 * 60 * 60 * 24)); // Total de dias
  const months = Math.floor(totalDays / 30.44); // Total de meses
  const days = Math.floor(totalDays % 30.44); // Dias restantes
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col items-center rounded-lg">
      <div className="text-lg flex space-x-4 md:space-x-8 p-6 m-1 rounded">
        <TimeNumber number={months} title="meses" />
        <TimeNumber number={days} title="dias" />
        <TimeNumber number={hours} title="horas" />
        <TimeNumber number={minutes} title="minutos" />
        {/*<TimeNumber number={seconds} title="segundos" />*/}
      </div>
    </div>
  );
};

export default Countdown;
