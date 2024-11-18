import React, { useEffect, useState } from 'react';
import PhotoCarousel from "./PhotoCarousel"
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
    }   
   
  ];

  const [timeLineH, setTimeLineH] = useState(Math.round(100-(((travelsData.length/travelsData.length)*(1/travelsData.length))*100)));

  useEffect(()=>{
    setTimeLineH(Math.round(100-(((travelsData.length/travelsData.length)*(1/travelsData.length))*100)))
  },[Travels])

  return (
    <div className="relative px-12 flex items-center p-6 justify-center">
        <div className="relative w-full bg-[#1e1e1e] py-0 px-4 min-h-96 m-0">
            <div className={`h-[${timeLineH}%] absolute left-[-10px] border-l border-2 border-purple-500 mt-6`}></div>
            {travelsData.map((event, index) => (
                <div key={index} className='flex flex-col w-full'>
                  <div className='absolute rounded-full bg-purple-500 h-6 w-6 ml-[-36.6px] border-2 border-[#1e1e1e]'></div>
                    <div className='flex gap-4'>
                      <div className='flex flex-row'>
                        <MapPin size={28} weight="fill" color='#a855f7'/>
                        <span 
                          className='ml-2 sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-semibold drop-shadow-lg h-21 py-1.5'
                          >{event.title}
                        </span>
                      </div>
                      <div className='flex flex-row'>
                        <CalendarDots size={28} weight="fill" color='#ec4899'/>
                        <span 
                          className='ml-2 sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-semibold drop-shadow-lg h-21 py-1.5'
                          >{event.date}
                        </span>
                      </div>
                    </div>
                    <PhotoCarousel folderId={event.folderId} height="400px"/>                    
                </div>
            ))}
            </div>
    </div>
  );
};

export default Travels;
