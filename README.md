# RENKON STONE - Professional Marble & Terrazzo Renovation Website

A modern, responsive one-page website for RENKON STONE Jacek Jarosz, a Polish company specializing in marble and terrazzo (lastryko) grinding, renovation, and maintenance services.

## 🏢 Company Overview

**RENKON STONE Jacek Jarosz** - Specialists in grinding, renovation, and maintenance of marble and terrazzo with over 15 years of experience in Poland, England, and Ireland.

### Services Offered:
- **Szlifowanie Marmuru** (Marble Grinding)
- **Szlifowanie Lastryko** (Terrazzo Grinding)  
- **Kompleksowa Renowacja Lastryko** (Complete Terrazzo Renovation)
- **Krystalizacja i Impregnacja** (Crystallization and Impregnation)
- **Naprawa Ubytków i Pęknięć** (Repair of Damages and Cracks)
- **Groszkowanie Pasków Antypoślizgowych** (Anti-slip Strip Installation)

## 🎨 Design Features

### Color Palette
- **Primary Orange**: `#dd8500` (Brand color)
- **Light Beige**: `#dbe0b8` (Accent color)
- **Dark Theme**: Various shades of dark gray (`#111111`, `#2d2d2d`, `#3f3f3f`, `#232323`, `#383838`)
- **White**: `#ffffff` (Text and highlights)

### Design Principles
- **Dark Theme**: Elegant, professional appearance
- **Warm Accents**: Orange highlights for call-to-action elements
- **Minimalist Animations**: Subtle hover effects and transitions
- **Business-Oriented**: Clean, trustworthy design approach
- **Mobile-First**: Responsive design for all devices

## 🛠 Technical Stack

### Core Technologies
- **HTML5**: Semantic markup with SEO optimization
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Vanilla JavaScript**: Lightweight interactivity
- **Font Awesome**: Professional icon library
- **Google Fonts**: Inter font family for modern typography

### Key Features
- ✅ **SEO Optimized**: Meta tags, Open Graph, semantic HTML
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Sticky Navigation**: Fixed header with smooth scrolling
- ✅ **Dropdown Menu**: Services dropdown with hover effects
- ✅ **Mobile Menu**: Hamburger menu for mobile devices
- ✅ **Contact Form**: Professional inquiry form
- ✅ **Portfolio Gallery**: Before/after showcase sections
- ✅ **Lazy Loading**: Image optimization for performance
- ✅ **Accessibility**: WCAG-compliant design patterns

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Mobile: 320px - 767px
Tablet: 768px - 1023px  
Desktop: 1024px+
Large Desktop: 1280px+
```

## 🗂 File Structure

```
new-renkon/
├── index.html          # Main website file
├── styles.css          # Custom CSS (complements Tailwind)
├── README.md          # Project documentation
└── assets/            # Future images/media folder
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Local Development
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development with live reload, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### WordPress Conversion Ready
The website is built with WordPress conversion in mind:
- **Modular Components**: Easy to convert to PHP templates
- **Utility-First CSS**: Simplified styling for theme development
- **Semantic HTML**: Clean structure for WordPress functions
- **No Heavy JavaScript**: Avoids complex dependencies

## 📋 Page Sections

### 1. Navigation
- Sticky header with logo and company name
- Desktop navigation with services dropdown
- Mobile hamburger menu
- Smooth scroll navigation

### 2. Hero Section
- Compelling headline with brand messaging
- Call-to-action buttons
- Hero image placeholder
- Gradient background with floating elements

### 3. Services Section
- Six service cards with hover effects
- Icon-based visual representation
- Professional descriptions
- Responsive grid layout

### 4. About Section
- Company story and expertise
- Founder information (Jacek Jarosz)
- Experience statistics
- Trust-building elements

### 5. Portfolio Gallery
- Before/after showcase
- Project examples
- Hover effects and overlays
- Grid layout with responsive design

### 6. Contact Section
- Professional inquiry form
- Contact information display
- Business hours
- Service area coverage

### 7. Footer
- Company information
- Quick navigation links
- Service summary
- Copyright information

## 🎯 SEO Optimization

### Meta Tags
- Descriptive title and meta description
- Keywords targeting marble and terrazzo services
- Open Graph tags for social media sharing
- Proper language declaration (Polish)

### Content Strategy
- Polish language content for local market
- Service-focused keywords
- Location-based SEO (Poland, England, Ireland)
- Professional industry terminology

### Technical SEO
- Semantic HTML structure
- Proper heading hierarchy (H1-H5)
- Alt text for images (when added)
- Clean URL structure
- Fast loading times

## 🔧 Customization Guide

### Color Customization
Update colors in both files:

**Tailwind Config (index.html):**
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'renkon-orange': '#dd8500',
                'renkon-beige': '#dbe0b8',
                // ... other colors
            }
        }
    }
}
```

**CSS Variables (styles.css):**
```css
:root {
    --renkon-orange: #dd8500;
    --renkon-beige: #dbe0b8;
    /* ... other variables */
}
```

### Content Updates
- Edit text directly in `index.html`
- Update contact information in the contact section
- Modify service descriptions as needed
- Add real images to replace placeholders

### Adding Images
1. Create an `assets/images/` folder
2. Add your images (hero, gallery, etc.)
3. Update image paths in HTML
4. Optimize images for web (WebP format recommended)

## 📞 Contact Information Template

Update the contact section with actual details:
- **Phone**: Replace `+48 XXX XXX XXX`
- **Email**: Replace `kontakt@renkonstone.pl`
- **Address**: Add specific location
- **Service Areas**: Update coverage zones

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

## 📈 Performance Features

- **Optimized CSS**: Minimal custom CSS with Tailwind
- **CDN Resources**: Fast loading of external libraries
- **Compressed Assets**: Minified CSS and JS
- **Lazy Loading**: Image optimization ready
- **Smooth Animations**: Hardware-accelerated transitions

## 🔄 Future Enhancements

### Phase 2 Features
- [ ] Real image gallery integration
- [ ] Customer testimonials section
- [ ] Blog/news section
- [ ] Multi-language support (English)
- [ ] Advanced contact form with validation
- [ ] Google Maps integration
- [ ] Portfolio filter system

### WordPress Conversion
- [ ] Convert to PHP template files
- [ ] Add WordPress admin integration
- [ ] Create custom post types for services
- [ ] Implement contact form handler
- [ ] Add content management features

## 📝 License

This project is created for RENKON STONE Jacek Jarosz. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for RENKON STONE - Professional Marble & Terrazzo Renovation Services** 