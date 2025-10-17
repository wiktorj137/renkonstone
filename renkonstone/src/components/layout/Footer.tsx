import React from 'react';
import { navLinks, services } from '@/constants/data';
import { scrollToSection } from '@/utils';

export const Footer: React.FC = () => {
  const handleNavClick = (id: string) => {
    scrollToSection(`#${id}`);
  };

  return (
    <footer className="bg-gradient-to-br from-renkon-dark via-renkon-dark-2 to-renkon-dark-3 border-t border-renkon-dark-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/renkon-logo.jpg"
                  alt="RENKON STONE Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">RENKON STONE</h3>
                <p className="text-sm text-renkon-beige">Jacek Jarosz</p>
              </div>
            </div>
            <p className="text-renkon-beige/80 text-sm leading-relaxed">
              Profesjonalne szlifowanie i renowacja marmuru oraz lastryko.
              Ponad 15 lat doświadczenia międzynarodowego.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Szybkie Linki</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-renkon-beige/80 hover:text-renkon-orange transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nasze Usługi</h4>
            <ul className="space-y-2 text-sm text-renkon-beige/80">
              {services.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-renkon-beige/80">
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone text-renkon-orange mt-1" />
                <a 
                  href="tel:+48503298623"
                  className="hover:text-renkon-orange transition-colors"
                >
                  +48 503 298 623
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-envelope text-renkon-orange mt-1" />
                <a
                  href="mailto:kontakt@renkonstone.pl"
                  className="hover:text-renkon-orange transition-colors"
                >
                  kontakt@renkonstone.pl
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fab fa-facebook text-renkon-orange mt-1" />
                <a
                  href="https://www.facebook.com/people/RenKon-Stone/61577829164588/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-renkon-orange transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fab fa-youtube text-renkon-orange mt-1" />
                <a
                  href="https://www.youtube.com/channel/UCZIDLqS_lvQrDb15rDPKqow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-renkon-orange transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-renkon-dark-4 mt-12 pt-8">
          <p className="text-renkon-beige/60 text-sm text-center">
            © {new Date().getFullYear()} RENKON STONE. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
