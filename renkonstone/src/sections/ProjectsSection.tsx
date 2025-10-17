import React, { useState } from 'react';
import { projects } from '@/constants/data';
import { Section, SectionHeader, Card, Modal } from '@/components/ui';
import { ProjectDetails } from '@/components/projects';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card
      hover
      className="cursor-pointer group overflow-hidden p-0"
      onClick={onClick}
    >
      {/* Image Placeholder */}
      <div className="h-56 bg-gradient-to-br from-renkon-dark-4 to-renkon-dark-5 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-renkon-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <i className="fas fa-image text-5xl text-renkon-beige/30 relative z-10" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-renkon-orange text-white px-3 py-1 rounded-lg text-xs font-semibold">
          {project.category}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <i className="fas fa-search-plus text-3xl mb-2" />
            <p className="text-sm">Zobacz szczegóły</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-renkon-orange transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-renkon-beige/80 mb-4">{project.description}</p>
        
        <div className="grid grid-cols-2 gap-3 text-xs text-renkon-beige/70">
          <div className="flex items-center space-x-2">
            <i className="fas fa-map-marker-alt text-renkon-orange" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-ruler-combined text-renkon-orange" />
            <span>{project.area}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-clock text-renkon-orange" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-tag text-renkon-orange" />
            <span>{project.category}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Section id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon="fa-images"
            title={
              <>
                Nasze <span className="text-renkon-orange font-medium">Realizacje</span>
              </>
            }
            subtitle="Zobacz jak pracujemy i jakie efekty osiągamy w naszych projektach"
          />

          {/* YouTube Video Section */}
          <div className="mb-12 lg:mb-16">
            <Card className="overflow-hidden bg-gradient-to-br from-renkon-dark-3 to-renkon-dark-2 border-renkon-orange/20">
              <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 p-6 lg:p-8">
                
                {/* Left side - Video */}
                <div className="lg:col-span-3">
                  <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/lLb18S0l8to"
                      title="RENKON STONE - Efekt Przed i Po"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Right side - Description */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-renkon-orange/20 rounded-xl mb-4">
                    <i className="fab fa-youtube text-renkon-orange text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Efekt Przed i Po
                  </h3>
                  <p className="text-renkon-beige leading-relaxed mb-6">
                    Film prezentuje spektakularne efekty naszej pracy - zobacz różnicę przed i po renowacji marmuru i lastryka. 
                    Przekonaj się, jak profesjonalne szlifowanie przywraca naturalny blask.
                  </p>
                  
                  {/* Video Stats/Features */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-renkon-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-renkon-orange text-xs" />
                      </div>
                      <p className="text-sm text-renkon-beige/90">Porównanie stanu przed i po renowacji</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-renkon-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-renkon-orange text-xs" />
                      </div>
                      <p className="text-sm text-renkon-beige/90">Profesjonalne techniki szlifowania</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-renkon-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-renkon-orange text-xs" />
                      </div>
                      <p className="text-sm text-renkon-beige/90">Przywrócenie naturalnego blasku kamienia</p>
                    </div>
                  </div>
                </div>

              </div>
            </Card>
          </div>

          {/* Projects Grid Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Portfolio Projektów
            </h3>
            <p className="text-renkon-beige/80">
              Od prywatnych rezydencji po prestiżowe obiekty publiczne
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="xl"
      >
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </>
  );
};
