import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  folderId: string;
  height: string;
}

const API_KEY = import.meta.env.VITE_API_KEY;

const PhotoCarousel = ({ folderId }: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,thumbnailLink)`
        );
        const data = await response.json();
        const imageUrls = data.files.map(
          (file: { id: string }) =>
            `https://drive.google.com/thumbnail?id=${file.id}&sz=s1000`
        );
        setImages(imageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens do Google Drive:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [folderId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 gap-3">
        <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.3s]" />
        <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce [animation-delay:-0.15s]" />
        <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
      </div>
    );
  }

  return (
    <div className="py-2 pb-10">
      <Slider {...settings}>
        {images.map((photo, index) => (
          <div key={index} className="px-2">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={photo}
                alt={`Foto ${index + 1}`}
                className="w-full h-52 sm:h-64 md:h-72 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
