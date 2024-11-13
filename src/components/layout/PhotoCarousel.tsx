import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section from './Section';

const PhotoCarousel: React.FC<{ photos: string[] }> = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Exibir 3 fotos
    slidesToScroll: 1, // Rolar 1 foto de cada vez
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" rounded p-4 pb-10">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-[500px] p-2"
          >
            {' '}
            {/* Defina uma altura fixa */}
            <img
              src={photo}
              alt={`Foto ${index}`}
              className="rounded-md w-full h-full object-cover" // Ajuste a largura e altura das imagens
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
