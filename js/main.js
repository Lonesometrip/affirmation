// Main JavaScript file for Driversline website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileMenu();
  initDropdowns();
  initPageNavigation();
  initAnimations();
  initSmoothScroll();
  initContactForm();
});

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!mobileMenuButton || !mobileMenu) return;
  
  mobileMenuButton.addEventListener('click', function() {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      // Change icon to X
      this.innerHTML = '<i class="fas fa-times text-gray-700 text-2xl"></i>';
    } else {
      mobileMenu.classList.add('hidden');
      // Change icon back to bars
      this.innerHTML = '<i class="fas fa-bars text-gray-700 text-2xl"></i>';
    }
  });
}

// Mobile dropdown functionality
function initDropdowns() {
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const dropdown = this.closest('li').querySelector('.mobile-dropdown');
      
      if (dropdown.classList.contains('hidden')) {
        // Close all other dropdowns first
        document.querySelectorAll('.mobile-dropdown').forEach(d => {
          if (d !== dropdown) {
            d.classList.add('hidden');
          }
        });
        
        // Open this dropdown
        dropdown.classList.remove('hidden');
        // Rotate icon down
        this.querySelector('i').classList.remove('fa-chevron-down');
        this.querySelector('i').classList.add('fa-chevron-up');
      } else {
        // Close this dropdown
        dropdown.classList.add('hidden');
        // Rotate icon back
        this.querySelector('i').classList.remove('fa-chevron-up');
        this.querySelector('i').classList.add('fa-chevron-down');
      }
    });
  });
}

// Page navigation
function initPageNavigation() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      // Hide all pages
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      
      // Show target page
      const targetPage = document.querySelector(targetId);
      if (targetPage) {
        targetPage.classList.add('active');
        
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Update URL hash
        history.pushState(null, null, targetId);
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          const mobileMenuButton = document.getElementById('mobile-menu-button');
          if (mobileMenuButton) {
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-gray-700 text-2xl"></i>';
          }
        }
        
        // Add animation to the page
        animatePageContent(targetPage);
      }
    });
  });
  
  // Handle initial page load based on URL hash
  window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash && hash !== '#') {
      // Hide all pages
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      
      // Show target page
      const targetPage = document.querySelector(hash);
      if (targetPage) {
        targetPage.classList.add('active');
        
        // Add animation to the page
        animatePageContent(targetPage);
      }
    } else {
      // Default to home page
      const homePage = document.getElementById('home');
      if (homePage) {
        homePage.classList.add('active');
        
        // Add animation to the page
        animatePageContent(homePage);
      }
    }
  });
  
  // Handle browser back/forward buttons
  window.addEventListener('popstate', function() {
    const hash = window.location.hash;
    if (hash && hash !== '#') {
      // Hide all pages
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      
      // Show target page
      const targetPage = document.querySelector(hash);
      if (targetPage) {
        targetPage.classList.add('active');
        
        // Add animation to the page
        animatePageContent(targetPage);
      }
    } else {
      // Default to home page
      const homePage = document.getElementById('home');
      if (homePage) {
        homePage.classList.add('active');
        
        // Add animation to the page
        animatePageContent(homePage);
      }
    }
  });
}

// Animations
function initAnimations() {
  // Add animation to the initial page
  const activePage = document.querySelector('.page.active');
  if (activePage) {
    animatePageContent(activePage);
  }
  
  // Add scroll animations
  window.addEventListener('scroll', function() {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    scrollElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animate');
      }
    });
  });
}

// Animate page content
function animatePageContent(page) {
  if (!page) return;
  
  // Add animation classes to elements
  const elements = page.querySelectorAll('h1, h2, h3, p, .service-card, .btn-primary, img');
  
  elements.forEach((element, index) => {
    // Remove any existing animation classes
    element.classList.remove('fade-in', 'slide-in');
    
    // Reset animation
    void element.offsetWidth;
    
    // Add animation with staggered delay
    setTimeout(() => {
      if (element.tagName === 'IMG') {
        element.classList.add('fade-in');
      } else if (element.classList.contains('service-card')) {
        element.classList.add('slide-in');
      } else {
        element.classList.add('fade-in');
      }
    }, index * 100);
  });
}

// Smooth scrolling
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Only apply smooth scroll for links within the same page
      if (document.querySelector(targetId) && document.querySelector(targetId).closest('.page.active')) {
        e.preventDefault();
        
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Contact form validation
function initContactForm() {
  const contactForm = document.querySelector('form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const formData = new FormData(contactForm);
    
    // Simple validation
    for (const [key, value] of formData.entries()) {
      const input = contactForm.querySelector(`[name="${key}"]`);
      const errorElement = input.parentElement.querySelector('.error-message');
      
      // Remove existing error message
      if (errorElement) {
        errorElement.remove();
      }
      
      // Check required fields
      if (input.hasAttribute('required') && !value.trim()) {
        isValid = false;
        
        // Add error message
        const error = document.createElement('p');
        error.className = 'error-message text-red-500 text-sm mt-1';
        error.textContent = 'Dieses Feld ist erforderlich';
        input.parentElement.appendChild(error);
        
        // Add error styling
        input.classList.add('border-red-500');
      } else {
        // Remove error styling
        input.classList.remove('border-red-500');
      }
      
      // Email validation
      if (key === 'email' && value.trim() && !validateEmail(value)) {
        isValid = false;
        
        // Add error message
        const error = document.createElement('p');
        error.className = 'error-message text-red-500 text-sm mt-1';
        error.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
        input.parentElement.appendChild(error);
        
        // Add error styling
        input.classList.add('border-red-500');
      }
    }
    
    if (isValid) {
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 fade-in';
      successMessage.innerHTML = `
        <strong class="font-bold">Vielen Dank!</strong>
        <span class="block sm:inline"> Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.</span>
      `;
      
      contactForm.parentElement.insertBefore(successMessage, contactForm);
      
      // Reset form
      contactForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    }
  });
  
  // Live validation on input
  contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', function() {
      const errorElement = this.parentElement.querySelector('.error-message');
      
      // Remove existing error message
      if (errorElement) {
        errorElement.remove();
      }
      
      // Remove error styling
      this.classList.remove('border-red-500');
    });
  });
}

// Email validation helper
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
