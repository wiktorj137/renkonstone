import React, { useState, useEffect } from 'react';
import { getAssetPath } from '@/utils/helpers';

interface ProcessImage {
  src: string;
  alt: string;
  title: string;
}

interface ProcessGalleryProps {
  images: ProcessImage[];
}

export const ProcessGallery: React.FC<ProcessGalleryProps> = ({
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images.length]);

  return (
    <>
      <div className="my-12 lg:my-16">
        {/* Gallery Grid */}
        <div className={`grid gap-4 md:gap-6 ${
          images.length === 1 
            ? 'grid-cols-1 max-w-2xl mx-auto' 
            : images.length === 2 
            ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-renkon-dark-3 border border-renkon-dark-4 hover:border-renkon-orange/50 transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={getAssetPath(image.src)}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-renkon-dark/90 via-renkon-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg mb-2">
                      {image.title}
                    </p>
                    <div className="flex items-center text-renkon-orange text-sm font-medium">
                      <i className="fas fa-search-plus mr-2" />
                      <span>Kliknij aby powiększyć</span>
                    </div>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-renkon-dark/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand text-white" />
                </div>
              </div>

              {/* Title Bar */}
              <div className="p-4 bg-renkon-dark-2/50 backdrop-blur-sm">
                <p className="text-white font-medium text-center">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-renkon-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-renkon-orange transition-colors duration-300 z-10"
            onClick={closeLightbox}
            aria-label="Zamknij"
          >
            <i className="fas fa-times text-xl" />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-renkon-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-renkon-orange transition-colors duration-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                aria-label="Poprzednie zdjęcie"
              >
                <i className="fas fa-chevron-left text-xl" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-renkon-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-renkon-orange transition-colors duration-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                aria-label="Następne zdjęcie"
              >
                <i className="fas fa-chevron-right text-xl" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-renkon-dark/80 backdrop-blur-sm rounded-full text-white text-sm font-medium z-10">
              {selectedImage + 1} / {images.length}
            </div>
          )}

          {/* Image */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src={getAssetPath(images[selectedImage].src)}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            
            {/* Image Title - Below Image */}
            <div className="mt-4 p-4 bg-renkon-dark/80 backdrop-blur-sm rounded-lg">
              <p className="text-white text-lg font-semibold text-center">
                {images[selectedImage].title}
              </p>
            </div>
          </div>

          {/* Keyboard Navigation Hint */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-renkon-dark/80 backdrop-blur-sm rounded-full text-renkon-beige text-xs z-10">
              <i className="fas fa-keyboard mr-2" />
              Użyj strzałek do nawigacji
            </div>
          )}
        </div>
      )}
    </>
  );
};
