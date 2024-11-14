import React from 'react';
import TimelineTravel from './TimelineTravel';

const Travels: React.FC = () => {
  const travelsData = [
    {
      title: 'Primeira Viagem',
      folderId: '1ouAcJJRMROWCPr1xTyPz2nUzcB4HerFT',
      date: '20/01/2024',
    },
    {
      title: 'Segunda Viagem',
      folderId: '1ouAcJJRMROWCPr1xTyPz2nUzcB4HerFT',
      date: '15/03/2024',
    },
    {
      title: 'Terceira Viagem',
      folderId: '1ouAcJJRMROWCPr1xTyPz2nUzcB4HerFT',
      date: '05/06/2024',
    },
  ];

  return (
    <div className="relative px-12 flex items-center p-6 justify-center">
        <div className="relative w-full bg-[#1e1e1e] py-6 px-4 min-h-96">
            <div className="absolute left-[-10px] border-l border-2 border-purple-500 h-[64%]"></div>
            {travelsData.map((event, index) => (
                <div key={index} className='flex flex-col w-full'>
                    <div className='flex'>
                        <div className='rounded-full bg-purple-500 h-4 w-4 ml-[-33.5px]'></div>
                        <span className='ml-2 sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-semibold drop-shadow-lg h-12 py-1'>{event.date} - {event.title}</span>
                    </div>
                    <TimelineTravel folderId={event.folderId}/>                     
                </div>
            ))}
            </div>
    </div>
  );
};

export default Travels;
