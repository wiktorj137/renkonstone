import React, { useState, useEffect } from 'react';
import { navLinks, services } from '@/constants/data';
import { scrollToSection } from '@/utils';
import { useMobileMenu } from '@/hooks';
import { Button } from '@/components/ui';
import logo from '/renkon-logo.jpg';

export const Header: React.FC = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const nav = document.querySelector('nav');
      
      // Check if click is outside the navigation
      if (nav && !nav.contains(target)) {
        closeMenu();
      }
    };

    // Add a small delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  const handleNavClick = (id: string, serviceId?: number) => {
    scrollToSection(`#${id}`);
    closeMenu();
    setShowServicesDropdown(false);
    
    // If a specific service is clicked, expand it
    if (serviceId !== undefined) {
      setTimeout(() => {
        // Dispatch custom event to expand the service
        window.dispatchEvent(new CustomEvent('expandService', { detail: { serviceId } }));
      }, 500);
    }
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = window.setTimeout(() => {
      setShowServicesDropdown(false);
    }, 300); // 300ms delay before hiding
    setDropdownTimeout(timeout);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gradient-to-r from-renkon-dark/98 via-renkon-dark-2/98 to-renkon-dark/98 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-r from-renkon-dark/95 via-renkon-dark-2/95 to-renkon-dark/95'
        } border-b border-renkon-dark-3/50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src={logo}
                  alt="RENKON STONE Logo"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  <span className="text-white">RenKon</span>{' '}
                  <span className="text-renkon-orange">STONE</span>
                </h1>
                <p className="text-sm text-renkon-beige font-medium">Jacek Jarosz</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.id === 'services' ? (
                  <div
                    key={link.id}
                    className="relative group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="nav-link text-white hover:text-renkon-orange flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-renkon-dark-3/50">
                      {link.label}
                      <i className="fas fa-chevron-down ml-2 text-sm transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    {showServicesDropdown && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border border-renkon-dark-4 rounded-xl shadow-2xl"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="p-2">
                          {services.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleNavClick('services', service.id)}
                              className="flex items-center space-x-3 px-4 py-3 text-sm text-white hover:text-renkon-orange hover:bg-renkon-dark-4/50 rounded-lg transition-all duration-200 w-full"
                            >
                              <i className={`fas ${service.icon} text-renkon-orange w-4`} />
                              <span>{service.titlePlain || service.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="nav-link text-white hover:text-renkon-orange px-4 py-2 rounded-lg transition-all duration-300 hover:bg-renkon-dark-3/50"
                  >
                    {link.label}
                  </button>
                )
              )}

              <Button
                onClick={() => handleNavClick('contact')}
                variant="primary"
                size="sm"
                icon="fa-phone"
                className="ml-4"
              >
                Kontakt
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-renkon-orange p-2 rounded-lg hover:bg-renkon-dark-3/50 transition-all duration-300"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border-t border-renkon-dark-4">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center space-x-3 py-3 px-4 text-white hover:text-renkon-orange hover:bg-renkon-dark-4/50 rounded-lg transition-all duration-300 w-full"
                >
                  <i className={`fas fa-${link.id === 'home' ? 'home' : link.id === 'services' ? 'cogs' : link.id === 'about' ? 'building' : link.id === 'references' ? 'quote-right' : link.id === 'projects' ? 'images' : 'envelope'} text-renkon-orange w-5`} />
                  <span>{link.label}</span>
                </button>
              ))}
              <div className="border-t border-renkon-dark-4 my-2" />
              <Button
                onClick={() => handleNavClick('contact')}
                variant="primary"
                size="md"
                icon="fa-phone"
                className="w-full"
              >
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-renkon-orange z-50 transition-all duration-150"
        style={{
          width: `${Math.min((window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100, 100)}%`
        }}
      />
    </>
  );
};
