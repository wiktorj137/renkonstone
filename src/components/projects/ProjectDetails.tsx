import React, { useState } from 'react';
import { Project } from '@/types';
import { getAssetPath } from '@/utils/helpers';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="space-y-8">
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 p-5 rounded-xl border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-renkon-orange/20 rounded-lg flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-renkon-orange text-lg" />
            </div>
            <div>
              <p className="text-xs text-renkon-beige/60 mb-1">Lokalizacja</p>
              <p className="text-white font-semibold">{project.location}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 p-5 rounded-xl border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-renkon-orange/20 rounded-lg flex items-center justify-center">
              <i className="fas fa-ruler-combined text-renkon-orange text-lg" />
            </div>
            <div>
              <p className="text-xs text-renkon-beige/60 mb-1">Powierzchnia</p>
              <p className="text-white font-semibold">{project.area}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 p-5 rounded-xl border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-renkon-orange/20 rounded-lg flex items-center justify-center">
              <i className="fas fa-clock text-renkon-orange text-lg" />
            </div>
            <div>
              <p className="text-xs text-renkon-beige/60 mb-1">Rok wykonania</p>
              <p className="text-white font-semibold">{project.duration}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 p-5 rounded-xl border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-renkon-orange/20 rounded-lg flex items-center justify-center">
              <i className="fas fa-tools text-renkon-orange text-lg" />
            </div>
            <div>
              <p className="text-xs text-renkon-beige/60 mb-1">Typ projektu</p>
              <p className="text-white font-semibold">{project.category}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 p-6 md:p-8 rounded-2xl border border-renkon-dark-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-renkon-orange/20 rounded-xl flex items-center justify-center">
            <i className="fas fa-align-left text-renkon-orange text-xl" />
          </div>
          <h4 className="text-xl md:text-2xl font-semibold text-white">Opis projektu</h4>
        </div>
        <p className="text-base md:text-lg text-renkon-beige leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Gallery Section */}
      {project.images && project.images.length > 0 && (
        <div className="bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 p-6 md:p-8 rounded-2xl border border-renkon-dark-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-renkon-orange/20 rounded-xl flex items-center justify-center">
              <i className="fas fa-images text-renkon-orange text-xl" />
            </div>
            <h4 className="text-xl md:text-2xl font-semibold text-white">Galeria</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className="aspect-video bg-gradient-to-br from-renkon-dark-4 to-renkon-dark-5 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group relative"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={getAssetPath(image)}
                  alt={`${project.title} - zdjęcie ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback Gallery placeholder if no images */}
      {(!project.images || project.images.length === 0) && (
        <div className="bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 p-6 md:p-8 rounded-2xl border border-renkon-dark-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-renkon-orange/20 rounded-xl flex items-center justify-center">
              <i className="fas fa-images text-renkon-orange text-xl" />
            </div>
            <h4 className="text-xl md:text-2xl font-semibold text-white">Galeria</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="aspect-video bg-gradient-to-br from-renkon-dark-4 to-renkon-dark-5 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <i className="fas fa-image text-3xl text-renkon-beige/20 group-hover:text-renkon-orange/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && project.images && (
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

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-renkon-dark/80 backdrop-blur-sm rounded-full text-white text-sm font-medium z-10">
            {selectedImage + 1} / {project.images.length}
          </div>

          {/* Image */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src={getAssetPath(project.images[selectedImage])}
                alt={`${project.title} - zdjęcie ${selectedImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
