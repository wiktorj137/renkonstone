/**
 * RENKON STONE - Interactive Features
 * Enhanced JavaScript functionality for the website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

/**
 * Initialize all website functionality
 */
function initializeWebsite() {
    initMobileMenu();
    initSmoothScrolling();
    initFormValidation();
    initScrollAnimations();
    initLazyLoading();
    initScrollIndicator();
    initTooltips();
    initImagePreloader();
    initMobileCarousel();
    initMobileTestimonials();
}

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = document.querySelector('#mobile-menu-btn i');
    
    mobileMenu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    
    // Prevent body scroll when menu is open
    document.body.classList.toggle('overflow-hidden');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = document.querySelector('#mobile-menu-btn i');
    
    mobileMenu.classList.add('hidden');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
    document.body.classList.remove('overflow-hidden');
}

/**
 * Smooth Scrolling Navigation
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                closeMobileMenu();
                updateActiveNavLink(targetId);
            }
        });
    });
}

/**
 * Update active navigation link
 */
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const uslugiButton = document.querySelector('nav .group button');
    
    // Reset all nav links
    navLinks.forEach(link => {
        link.classList.remove('text-renkon-orange');
        link.classList.add('text-white');
        
        if (link.getAttribute('href') === targetId) {
            link.classList.add('text-renkon-orange');
            link.classList.remove('text-white');
        }
    });
    
    // Handle services section specifically
    if (targetId === '#services') {
        // Highlight uslugi button
        if (uslugiButton) {
            uslugiButton.classList.remove('text-white');
            uslugiButton.classList.add('text-renkon-orange');
        }
    } else {
        // Reset uslugi button to default
        if (uslugiButton) {
            uslugiButton.classList.remove('text-renkon-orange');
            uslugiButton.classList.add('text-white');
        }
    }
}

/**
 * Form Validation and Handling
 */
function initFormValidation() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formValid = validateForm(e.target);
    
    if (formValid) {
        showFormLoading();
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            hideFormLoading();
            showSuccessMessage();
            e.target.reset();
        }, 2000);
    }
}

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous errors
    clearFieldError({ target: field });
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'To pole jest wymagane';
        isValid = false;
    }
    
    // Email validation
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Podaj prawidłowy adres email';
            isValid = false;
        }
    }
    
    // Phone validation
    if (fieldType === 'tel' && value) {
        const phoneRegex = /^[\+]?[\s\-\(\)0-9]{9,}$/;
        if (!phoneRegex.test(value)) {
            errorMessage = 'Podaj prawidłowy numer telefonu';
            isValid = false;
        }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('border-red-500');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('border-red-500');
    
    const errorMessage = field.parentNode.querySelector('.field-error');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showFormLoading() {
    const submitBtn = document.querySelector('form button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Wysyłanie...';
    }
}

function hideFormLoading() {
    const submitBtn = document.querySelector('form button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Wyślij Zapytanie';
    }
}

function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-20 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    successMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Dziękujemy za zapytanie! Skontaktujemy się z Państwem w ciągu 24 godzin.';
    
    document.body.appendChild(successMessage);
    
    // Animate in
    setTimeout(() => {
        successMessage.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        successMessage.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 300);
    }, 5000);
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation classes based on element type
                if (element.classList.contains('service-card-hover')) {
                    element.style.animationDelay = `${Array.from(element.parentNode.children).indexOf(element) * 100}ms`;
                    element.classList.add('animate-slide-in-bottom');
                }
                
                if (element.classList.contains('animate-on-scroll')) {
                    element.classList.add('animate-fade-in');
                }
                
                // Stop observing after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe service cards
    document.querySelectorAll('.service-card-hover').forEach(card => {
        observer.observe(card);
    });
    
    // Observe other elements marked for animation
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Lazy loading for images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Scroll progress indicator
 */
function initScrollIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-renkon-orange z-50 transition-all duration-150';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    });
}

/**
 * Tooltips for interactive elements
 */
function initTooltips() {
    const elementsWithTooltips = document.querySelectorAll('[data-tooltip]');
    
    elementsWithTooltips.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const element = e.target;
    const tooltipText = element.dataset.tooltip;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'absolute bg-renkon-dark-2 text-white px-3 py-2 rounded-lg text-sm z-50 pointer-events-none';
    tooltip.textContent = tooltipText;
    tooltip.id = 'tooltip';
    
    document.body.appendChild(tooltip);
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        document.body.removeChild(tooltip);
    }
}

/**
 * Preload critical images
 */
function initImagePreloader() {
    const criticalImages = [
        // Add paths to critical images here when available
        // Example: '/assets/images/hero-image.jpg'
    ];
    
    criticalImages.forEach(imagePath => {
        const img = new Image();
        img.src = imagePath;
    });
}

/**
 * Utility function to debounce scroll events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Handle window resize events
 */
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
}, 250));

/**
 * Update navigation on scroll
 */
window.addEventListener('scroll', debounce(() => {
    updateNavigationOnScroll();
}, 100));

function updateNavigationOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            updateActiveNavLink(`#${sectionId}`);
        }
    });
}

/**
 * Service Worker Registration (for future PWA capabilities)
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.registerServiceWorker('/sw.js')
        // .then(registration => console.log('SW registered'))
        // .catch(error => console.log('SW registration failed'));
    });
}

/**
 * Analytics tracking (Google Analytics ready)
 */
function trackEvent(eventName, eventData = {}) {
    // Ready for Google Analytics integration
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    console.log('Event tracked:', eventName, eventData);
}

// Track form submissions
document.addEventListener('submit', (e) => {
    if (e.target.tagName === 'FORM') {
        trackEvent('form_submit', {
            form_id: e.target.id || 'contact_form'
        });
    }
});

// Track navigation clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        trackEvent('navigation_click', {
            link_text: e.target.textContent,
            target_section: e.target.getAttribute('href')
        });
    }
});

/**
 * PDF Modal functionality
 */
function openPdfModal(pdfFileName) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'pdf-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'bg-renkon-dark-3 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden';
    
    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex items-center justify-between p-6 border-b border-renkon-dark-4';
    modalHeader.innerHTML = `
        <h3 class="text-xl font-semibold text-white">Dokument referencyjny</h3>
        <button onclick="closePdfModal()" class="text-renkon-beige hover:text-white transition-colors">
            <i class="fas fa-times text-2xl"></i>
        </button>
    `;
    
    // Create modal body with PDF viewer
    const modalBody = document.createElement('div');
    modalBody.className = 'p-6';
    modalBody.innerHTML = `
        <div class="bg-renkon-dark-4 rounded-lg p-4 mb-4">
            <p class="text-renkon-beige text-sm">
                <i class="fas fa-info-circle text-renkon-orange mr-2"></i>
                Dokument PDF: <strong>${pdfFileName}</strong>
            </p>
        </div>
        <div class="bg-white rounded-lg h-96 flex items-center justify-center">
            <div class="text-center">
                <i class="fas fa-file-pdf text-6xl text-gray-400 mb-4"></i>
                <p class="text-gray-600 mb-4">Podgląd dokumentu PDF</p>
                <p class="text-sm text-gray-500 mb-4">Aby zobaczyć pełny dokument, kliknij poniższy przycisk</p>
                <a href="assets/documents/${pdfFileName}" target="_blank" class="bg-renkon-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block">
                    <i class="fas fa-external-link-alt mr-2"></i>
                    Otwórz dokument PDF
                </a>
            </div>
        </div>
    `;
    
    // Assemble modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    
    // Add to page
    document.body.appendChild(modal);
    
    // Prevent body scroll
    document.body.classList.add('overflow-hidden');
    
    // Track PDF view
    trackEvent('pdf_view', {
        document: pdfFileName
    });
}

function closePdfModal() {
    const modal = document.getElementById('pdf-modal');
    if (modal) {
        document.body.removeChild(modal);
        document.body.classList.remove('overflow-hidden');
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.id === 'pdf-modal') {
        closePdfModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePdfModal();
    }
});

/**
 * Toggle testimonial text (show more/less)
 */
function toggleTestimonial(button) {
    const card = button.closest('.testimonial-card');
    const shortText = card.querySelector('.short-text');
    const fullText = card.querySelector('.full-text');
    const showMoreText = button.querySelector('.show-more-text');
    const showLessText = button.querySelector('.show-less-text');
    const icon = button.querySelector('i');
    
    if (fullText.classList.contains('hidden')) {
        // Show full text
        shortText.classList.add('hidden');
        fullText.classList.remove('hidden');
        showMoreText.classList.add('hidden');
        showLessText.classList.remove('hidden');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        // Show short text
        shortText.classList.remove('hidden');
        fullText.classList.add('hidden');
        showMoreText.classList.remove('hidden');
        showLessText.classList.add('hidden');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

/**
 * Mobile Carousel Functionality
 */
function initMobileCarousel() {
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        initServicesCarousel();
        initTestimonialsCarousel();
    }, 200);
}

/**
 * Initialize services carousel
 */
function initServicesCarousel() {
    const carousel = document.getElementById('services-carousel');
    const dotsContainer = document.getElementById('services-dots');
    
    if (!carousel || !dotsContainer) {
        return;
    }
    
    const cards = carousel.querySelectorAll('.snap-start');
    const dots = dotsContainer.querySelectorAll('.service-dot');
    
    if (cards.length === 0 || dots.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    let isScrolling = false;
    let startX = 0;
    let startScrollLeft = 0;
    let isDragging = false;
    
    // Calculate card width including gap
    function getCardWidth() {
        const card = cards[0];
        const cardWidth = card.offsetWidth;
        const gap = parseInt(window.getComputedStyle(carousel).gap) || 16;
        return cardWidth + gap;
    }
    
    // Update active dot
    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active', 'bg-renkon-orange');
                dot.classList.remove('bg-renkon-dark-5');
            } else {
                dot.classList.remove('active', 'bg-renkon-orange');
                dot.classList.add('bg-renkon-dark-5');
            }
        });
    }
    
    // Scroll to specific card
    function scrollToCard(index) {
        if (index < 0 || index >= cards.length) return;
        
        isScrolling = true;
        const cardWidth = getCardWidth();
        const scrollPosition = index * cardWidth;
        
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        currentIndex = index;
        updateActiveDot(index);
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
    
    // Handle scroll events
    function handleScroll() {
        if (isScrolling) return;
        
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = getCardWidth();
        const newIndex = Math.round(scrollLeft / cardWidth);
        
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
            currentIndex = newIndex;
            updateActiveDot(newIndex);
        }
    }
    
    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToCard(index);
        });
    });
    
    // Add scroll event listener with throttling
    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 50);
    }, { passive: true });
    
    // Mouse drag support for desktop testing
    carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startScrollLeft = carousel.scrollLeft;
        isDragging = true;
        carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.clientX;
        const diff = startX - currentX;
        carousel.scrollLeft = startScrollLeft + diff;
    });
    
    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        startX = 0;
        startScrollLeft = 0;
        carousel.style.cursor = 'grab';
        
        setTimeout(() => {
            handleScroll();
        }, 100);
    });
    
    carousel.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            startX = 0;
            startScrollLeft = 0;
            carousel.style.cursor = 'grab';
        }
    });
    
    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scrollToCard(Math.max(0, currentIndex - 1));
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollToCard(Math.min(cards.length - 1, currentIndex + 1));
        }
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
            scrollToCard(currentIndex);
        }, 250);
    });
    
    // Initialize
    updateActiveDot(0);
    
    // Make carousel focusable for keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.style.cursor = 'grab';
}

// Test function for debugging - can be called from browser console
function testMobileCarousel() {
    const carouselContainer = document.querySelector('.lg\\:hidden .flex.overflow-x-auto');
    const navigationDotsContainer = document.querySelector('.lg\\:hidden .flex.justify-center.space-x-2');
    
    if (carouselContainer && navigationDotsContainer) {
        const navigationDots = navigationDotsContainer.querySelectorAll('div');
        const cards = carouselContainer.querySelectorAll('.snap-start');
        
        // Test clicking the second dot
        if (navigationDots.length > 1) {
            navigationDots[1].click();
        }
    }
}

/**
 * Mobile Testimonials Functionality
 */
function initMobileTestimonials() {
    // Wait for DOM to be fully ready
    setTimeout(() => {
        // Initialize expand/collapse functionality for mobile testimonials
        initMobileTestimonialExpand();
        
        // Initialize mobile testimonial carousel
        initMobileTestimonialCarousel();
    }, 200);
}

/**
 * Initialize expand/collapse functionality for mobile testimonials
 */
function initMobileTestimonialExpand() {
    const mobileReadMoreButtons = document.querySelectorAll('.read-more-btn-mobile');
    
    mobileReadMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const card = this.closest('.testimonial-card-mobile');
            const testimonialText = card.querySelector('.testimonial-text-mobile');
            
            if (card.classList.contains('expanded')) {
                // Collapse
                card.classList.remove('expanded');
                this.textContent = 'Pokaż więcej';
                testimonialText.style.webkitLineClamp = '3';
                testimonialText.style.lineClamp = '3';
            } else {
                // Expand
                card.classList.add('expanded');
                this.textContent = 'Pokaż mniej';
                testimonialText.style.webkitLineClamp = 'unset';
                testimonialText.style.lineClamp = 'unset';
            }
            
            // Track interaction
            trackEvent('testimonial_expand', {
                action: card.classList.contains('expanded') ? 'expand' : 'collapse',
                testimonial: card.querySelector('h5')?.textContent || 'Unknown'
            });
        });
    });
}

/**
 * Initialize mobile testimonial carousel
 */
function initMobileTestimonialCarousel() {
    const carousel = document.getElementById('testimonial-carousel');
    const dotsContainer = document.getElementById('testimonial-dots');
    
    if (!carousel || !dotsContainer) {
        return;
    }
    
    const cards = carousel.querySelectorAll('.testimonial-card-mobile');
    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    
    if (cards.length === 0 || dots.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    let isScrolling = false;
    
    // Calculate card width including gap
    function getCardWidth() {
        const card = cards[0];
        const cardStyle = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth;
        const gap = parseInt(window.getComputedStyle(carousel).gap) || 16;
        return cardWidth + gap;
    }
    
    // Update active dot
    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active', 'bg-renkon-orange');
                dot.classList.remove('bg-renkon-dark-5');
            } else {
                dot.classList.remove('active', 'bg-renkon-orange');
                dot.classList.add('bg-renkon-dark-5');
            }
        });
    }
    
    // Scroll to specific card
    function scrollToCard(index) {
        if (index < 0 || index >= cards.length) return;
        
        isScrolling = true;
        const cardWidth = getCardWidth();
        const scrollPosition = index * cardWidth;
        
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        currentIndex = index;
        updateActiveDot(index);
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
    
    // Handle scroll events
    function handleScroll() {
        if (isScrolling) return;
        
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = getCardWidth();
        const newIndex = Math.round(scrollLeft / cardWidth);
        
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
            currentIndex = newIndex;
            updateActiveDot(newIndex);
        }
    }
    
    // Add scroll event listener with throttling
    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 50);
    });
    
    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToCard(index);
        });
    });
    
    // Touch gesture support with improved handling
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startScrollLeft = carousel.scrollLeft;
        isDragging = true;
        
        // Prevent default to avoid conflicts
        e.preventDefault();
    }, { passive: false });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        carousel.scrollLeft = startScrollLeft + diff;
        
        // Prevent default to avoid conflicts
        e.preventDefault();
    }, { passive: false });
    
    carousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        startX = 0;
        startScrollLeft = 0;
        
        // Snap to nearest card
        setTimeout(() => {
            handleScroll();
        }, 100);
    });
    
    // Mouse drag support for desktop testing
    carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startScrollLeft = carousel.scrollLeft;
        isDragging = true;
        carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.clientX;
        const diff = startX - currentX;
        carousel.scrollLeft = startScrollLeft + diff;
    });
    
    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        startX = 0;
        startScrollLeft = 0;
        carousel.style.cursor = 'grab';
        
        setTimeout(() => {
            handleScroll();
        }, 100);
    });
    
    carousel.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            startX = 0;
            startScrollLeft = 0;
            carousel.style.cursor = 'grab';
        }
    });
    
    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scrollToCard(Math.max(0, currentIndex - 1));
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollToCard(Math.min(cards.length - 1, currentIndex + 1));
        }
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
            scrollToCard(currentIndex);
        }, 250);
    });
    
    // Initialize
    updateActiveDot(0);
    
    // Make carousel focusable for keyboard navigation
    carousel.setAttribute('tabindex', '0');
}

// Test function for mobile testimonials - can be called from browser console
function testMobileTestimonials() {
    const carousel = document.getElementById('testimonial-carousel');
    const dotsContainer = document.getElementById('testimonial-dots');
    
    if (carousel && dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.testimonial-dot');
        const cards = carousel.querySelectorAll('.testimonial-card-mobile');
        
        // Test clicking the second dot
        if (dots.length > 1) {
            dots[1].click();
        }
        
        // Test expand/collapse functionality
        const readMoreButtons = document.querySelectorAll('.read-more-btn-mobile');
        
        if (readMoreButtons.length > 0) {
            readMoreButtons[0].click();
        }
        
        // Test keyboard navigation
        carousel.focus();
    }
}

// Test function for services carousel - can be called from browser console
function testServicesCarousel() {
    const carousel = document.getElementById('services-carousel');
    const dotsContainer = document.getElementById('services-dots');
    
    if (carousel && dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.service-dot');
        const cards = carousel.querySelectorAll('.snap-start');
        
        // Test clicking the second dot
        if (dots.length > 1) {
            dots[1].click();
        }
        
        // Test touch simulation
        const touchEvent = new TouchEvent('touchstart', {
            touches: [{ clientX: 100, clientY: 100 }]
        });
        carousel.dispatchEvent(touchEvent);
        
        // Test keyboard navigation
        carousel.focus();
    }
} 