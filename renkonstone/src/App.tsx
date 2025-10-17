import { useEffect } from 'react';
import { Header, Footer } from '@/components/layout';
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  TestimonialsSection,
  ProjectsSection,
  ContactSection,
} from '@/sections';
import { useScrollPosition } from '@/hooks';

function App() {
  const { y } = useScrollPosition();

  // Update scroll progress bar
  useEffect(() => {
    const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement;
    if (scrollProgress) {
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (y / docHeight) * 100;
      scrollProgress.style.width = `${Math.min(scrollPercent, 100)}%`;
    }
  }, [y]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress fixed top-0 left-0 h-1 bg-renkon-orange z-50 transition-all duration-150" />
      
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      {y > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-renkon-orange hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 animate-fade-in"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up" />
        </button>
      )}
    </div>
  );
}

export default App;
