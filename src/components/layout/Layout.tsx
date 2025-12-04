import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from '@/components/layout';
import { useScrollPosition } from '@/hooks';

export const Layout: React.FC = () => {
  const { y } = useScrollPosition();
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    <div className="min-h-screen relative overflow-x-hidden flex flex-col">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress fixed top-0 left-0 h-1 bg-renkon-orange z-50 transition-all duration-150" />
      
      <Header />
      
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      {y > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-renkon-orange hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 animate-fade-in flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up" />
        </button>
      )}
    </div>
  );
};
