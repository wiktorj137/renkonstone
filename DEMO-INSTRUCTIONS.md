# RENKON STONE Website - Quick Demo Instructions

## 🚀 Quick Start

### Option 1: Open Directly in Browser
1. Navigate to the `new-renkon` folder
2. Double-click `index.html` to open in your default browser
3. The website will load with full functionality

### Option 2: Use Local Server (Recommended)
For the best experience and to avoid any potential CORS issues:

```bash
# Navigate to the project folder
cd new-renkon

# Option A: Using Python (if installed)
python -m http.server 8000
# Then open: http://localhost:8000

# Option B: Using Node.js (if installed)
npx serve .
# Follow the instructions shown in terminal

# Option C: Using PHP (if installed)
php -S localhost:8000
# Then open: http://localhost:8000
```

## 🧪 Testing Features

### Navigation Testing
- **Desktop**: Test the dropdown menu under "Usługi"
- **Mobile**: Click the hamburger menu icon (☰) in top right
- **Smooth Scroll**: Click navigation links to see smooth scrolling
- **Active States**: Notice link highlighting on hover

### Form Testing
- **Validation**: Try submitting empty required fields
- **Email Validation**: Enter invalid email formats
- **Phone Validation**: Test with different phone formats
- **Success Message**: Fill form correctly and submit

### Responsive Design Testing
- **Desktop**: Resize browser window to see responsive breakpoints
- **Mobile**: Use browser developer tools (F12) → Device toolbar
- **Tablet**: Test medium screen sizes

### Animation Testing
- **Scroll Animations**: Scroll down to see service cards animate
- **Hover Effects**: Hover over service cards and buttons
- **Mobile Menu**: Test mobile menu open/close animations

## 📱 Device Testing

### Test on Different Screen Sizes:
- **Mobile**: 375px width (iPhone SE)
- **Tablet**: 768px width (iPad)
- **Desktop**: 1280px+ width
- **Large Desktop**: 1920px+ width

### Browser Testing:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🎨 Customization Quick Guide

### Change Colors:
1. **Update Tailwind Config** in `index.html`:
   ```javascript
   'renkon-orange': '#dd8500', // Change this value
   ```

2. **Update CSS Variables** in `styles.css`:
   ```css
   --renkon-orange: #dd8500; /* Change this value */
   ```

### Add Real Content:
1. **Replace Contact Info**: Search for "XXX XXX XXX" and update
2. **Add Real Images**: Place images in `assets/images/` folder
3. **Update Company Details**: Modify text in HTML file

### Add Real Images:
1. Create subfolders in `assets/images/`:
   - `hero/` - for hero section images
   - `gallery/` - for before/after photos
   - `services/` - for service-specific images

2. Update image paths in HTML:
   ```html
   <!-- Replace placeholders like this: -->
   <img src="assets/images/hero/main-hero.jpg" alt="Description">
   ```

## 🔧 Technical Features Included

### Performance Features:
- ✅ Lazy loading ready
- ✅ Image optimization ready
- ✅ Smooth animations
- ✅ Fast loading with CDN resources

### SEO Features:
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy

### Accessibility Features:
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Alt text ready
- ✅ Screen reader friendly

### Interactive Features:
- ✅ Contact form validation
- ✅ Mobile-friendly navigation
- ✅ Smooth scrolling
- ✅ Hover effects
- ✅ Progress indicator

## 📞 Next Steps for Production

1. **Add Real Content**:
   - Replace placeholder text
   - Add actual contact information
   - Upload professional images

2. **Domain & Hosting**:
   - Purchase domain (e.g., renkonstone.pl)
   - Set up web hosting
   - Configure SSL certificate

3. **WordPress Conversion** (Optional):
   - Convert to WordPress theme
   - Add content management
   - Set up contact form handler

4. **Analytics & SEO**:
   - Add Google Analytics
   - Submit to Google Search Console
   - Optimize for local SEO

## 🎯 Key Sections to Review

1. **Hero Section** - Main headline and call-to-action
2. **Services** - Six service cards with descriptions
3. **About** - Company information and experience
4. **Gallery** - Before/after showcase
5. **Contact** - Form and contact information
6. **Footer** - Company details and links

## 🛠 Development Notes

- Built with **Tailwind CSS** for easy customization
- **Vanilla JavaScript** for WordPress compatibility
- **Mobile-first responsive** design
- **SEO-optimized** structure
- **Clean, semantic HTML** for accessibility

---

**Ready to launch! 🚀** The website is production-ready and can be deployed immediately with your real content and images. 