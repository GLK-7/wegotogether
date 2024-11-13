import { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyBMwNQLvwRxiCRDd_sWVAiDeVVzzgJz2uQ';
const FOLDER_ID = '1ouAcJJRMROWCPr1xTyPz2nUzcB4HerFT'; // Substitua pelo ID da pasta do Google Drive

const GoogleDriveImageGallery: React.FC = () => {
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
    <div>
      <h1>Galeria de Imagens do Google Drive</h1>
      <div className="image-gallery">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default GoogleDriveImageGallery;
