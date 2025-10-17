import React from 'react';
import { Project } from '@/types';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="space-y-8">
      {/* Hero Image Section */}
      <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-renkon-dark-4 to-renkon-dark-5 rounded-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-renkon-dark/90 via-renkon-dark/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-image text-8xl text-renkon-beige/20 mb-4" />
            <p className="text-renkon-beige/40 text-sm">Zdjęcie projektu</p>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6 bg-renkon-orange text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-lg">
          <i className="fas fa-tag mr-2" />
          {project.category}
        </div>
      </div>

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
              <p className="text-xs text-renkon-beige/60 mb-1">Czas realizacji</p>
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

      {/* Gallery placeholder */}
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
    </div>
  );
};
