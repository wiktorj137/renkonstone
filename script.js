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
    const uslugiButton = document.querySelector('nav button:contains("Usługi")');
    
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
        // Reset uslugi button
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
    
    // Special handling for services section - check if we're in the services area
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        const servicesTop = servicesSection.offsetTop;
        const servicesHeight = servicesSection.offsetHeight;
        
        if (scrollPos >= servicesTop && scrollPos < servicesTop + servicesHeight) {
            // Highlight the "Usługi" dropdown button
            const uslugiButton = document.querySelector('nav button:contains("Usługi")');
            if (uslugiButton) {
                uslugiButton.classList.add('text-renkon-orange');
                uslugiButton.classList.remove('text-white');
            }
        }
    }
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