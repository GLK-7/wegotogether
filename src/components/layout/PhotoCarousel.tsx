import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  folderId: string;
  height: string
}

const API_KEY = import.meta.env.VITE_API_KEY;

const PhotoCarousel = ({folderId, height}: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,thumbnailLink)`
        );
        const data = await response.json();

        // Use thumbnailLink se estiver disponível, caso contrário, use o link padrão
        const imageUrls = data.files.map(
          (file: any) => file.thumbnailLink || `https://drive.google.com/thumbnail?id=${file.id}&sz=s1000`
        );
        setImages(imageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens do Google Drive:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="rounded p-4 pb-10">
      <Slider {...settings}>
        {images.map((photo, index) => (
          <div key={index} className={`flex justify-center items-center h-[${height}] p-2`}>
            <img src={photo} alt={`Foto ${index}`} className={`rounded-md w-full h-[400px] object-cover`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
