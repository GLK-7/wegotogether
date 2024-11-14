import {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { config } from '../../../config.ts';

const API_KEY = config.API_KEY || import.meta.env.VITE_API_KEY
const FOLDER_ID = config.FOLDER_ID || import.meta.env.VITE_FOLDER_ID

const PhotoCarousel: React.FC = () => {
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
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name)`
        );
        const data = await response.json();

        // Transformar o id em link direto de exibição
        const imageUrls = data.files.map(
          (file: any) => `https://drive.google.com/uc?id=${file.id}`
        );
        setImages(imageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens do Google Drive:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className=" rounded p-4 pb-10">
      <Slider {...settings}>
        {images.map((photo, index) => (
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
