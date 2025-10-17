import React from 'react';
import { navLinks } from '@/constants/data';
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
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-renkon-dark-4 hover:bg-renkon-orange rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-renkon-dark-4 hover:bg-renkon-orange rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-renkon-dark-4 hover:bg-renkon-orange rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
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
              <li>Szlifowanie Marmuru</li>
              <li>Szlifowanie Lastryko</li>
              <li>Kompleksowa Renowacja</li>
              <li>Krystalizacja</li>
              <li>Naprawa Ubytków</li>
              <li>Paski Antypoślizgowe</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-renkon-beige/80">
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone text-renkon-orange mt-1" />
                <div>
                  <p>+48 123 456 789</p>
                  <p>+48 987 654 321</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-envelope text-renkon-orange mt-1" />
                <p>kontakt@renkonstone.pl</p>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-renkon-orange mt-1" />
                <p>Polska, Anglia, Irlandia</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-renkon-dark-4 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-renkon-beige/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} RENKON STONE. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 text-sm text-renkon-beige/60">
            <button className="hover:text-renkon-orange transition-colors">
              Polityka Prywatności
            </button>
            <button className="hover:text-renkon-orange transition-colors">
              Regulamin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
