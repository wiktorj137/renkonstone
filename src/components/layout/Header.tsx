import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, services } from '@/constants/data';
import { useMobileMenu } from '@/hooks';
import { Button } from '@/components/ui';
import logo from '/renkon-logo.jpg';

export const Header: React.FC = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);
  const location = useLocation();

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

  const handleNavClick = () => {
    closeMenu();
    setShowServicesDropdown(false);
  };

  const handleServiceClick = (serviceId: number) => {
    handleNavClick();
    // If we are already on services page, we might want to scroll to specific service
    // But for now, just navigating to services page is enough as per new structure
    // Ideally, we could pass state to location to scroll to specific service
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
        aria-label="Główna nawigacja"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gradient-to-r from-renkon-dark/98 via-renkon-dark-2/98 to-renkon-dark/98 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-r from-renkon-dark/95 via-renkon-dark-2/95 to-renkon-dark/95'
        } border-b border-renkon-dark-3/50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleNavClick}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src={logo}
                  alt="RENKON STONE Logo"
                  className="w-full h-full object-cover rounded-xl"
                  width={48}
                  height={48}
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap">
                  <span className="text-white">RenKon</span>{' '}
                  <span className="text-renkon-orange">STONE</span>
                </h1>
                <p className="text-sm text-renkon-beige font-medium">Jacek Jarosz</p>
              </div>
            </Link>

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
                    <Link
                      to={link.path}
                      className={`nav-link text-white hover:text-renkon-orange flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-renkon-dark-3/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-renkon-orange focus-visible:ring-offset-2 focus-visible:ring-offset-renkon-dark ${location.pathname === link.path ? 'text-renkon-orange' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={showServicesDropdown}
                      aria-controls="services-dropdown"
                    >
                      {link.label}
                      <i className="fas fa-chevron-down ml-2 text-sm transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
                    </Link>
                    {showServicesDropdown && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border border-renkon-dark-4 rounded-xl shadow-2xl"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        id="services-dropdown"
                      >
                        <div className="p-2">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to={`/uslugi/${service.slug}`}
                              onClick={handleNavClick}
                              className="flex items-center space-x-3 px-4 py-3 text-sm text-white hover:text-renkon-orange hover:bg-renkon-dark-4/50 rounded-lg transition-all duration-200 w-full"
                            >
                              <i className={`fas ${service.icon} text-renkon-orange w-4`} aria-hidden="true" />
                              <span>{service.titlePlain || service.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.id}
                    to={link.path}
                    onClick={handleNavClick}
                    className={`nav-link text-white hover:text-renkon-orange px-4 py-2 rounded-lg transition-all duration-300 hover:bg-renkon-dark-3/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-renkon-orange focus-visible:ring-offset-2 focus-visible:ring-offset-renkon-dark ${location.pathname === link.path ? 'text-renkon-orange' : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link to="/kontakt">
                <Button
                  variant="primary"
                  size="sm"
                  icon="fa-phone"
                  className="ml-4"
                >
                  Kontakt
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-renkon-orange p-2 rounded-lg hover:bg-renkon-dark-3/50 transition-all duration-300"
              aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border-t border-renkon-dark-4" id="mobile-menu" role="region" aria-label="Menu mobilne">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`flex items-center space-x-3 py-3 px-4 text-white hover:text-renkon-orange hover:bg-renkon-dark-4/50 rounded-lg transition-all duration-300 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-renkon-orange focus-visible:ring-offset-2 focus-visible:ring-offset-renkon-dark ${location.pathname === link.path ? 'text-renkon-orange' : ''}`}
                >
                  <i className={`fas fa-${link.id === 'home' ? 'home' : link.id === 'services' ? 'cogs' : link.id === 'about' ? 'building' : link.id === 'references' ? 'quote-right' : link.id === 'projects' ? 'images' : 'envelope'} text-renkon-orange w-5`} aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              ))}
              <div className="border-t border-renkon-dark-4 my-2" />
              <Link to="/kontakt" onClick={handleNavClick} className="block w-full">
                <Button
                  variant="primary"
                  size="md"
                  icon="fa-phone"
                  className="w-full"
                >
                  Kontakt
                </Button>
              </Link>
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
