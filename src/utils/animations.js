// Animation utility functions

// Fade in element
export const fadeIn = (element, duration = 500, delay = 0) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease ${delay}ms`;
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
};

// Slide in element from bottom
export const slideInFromBottom = (element, duration = 500, delay = 0, distance = 20) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transform = `translateY(${distance}px)`;
  element.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 10);
};

// Stagger children animations
export const staggerChildren = (parent, animationFn, staggerDelay = 100, ...args) => {
  if (!parent) return;
  
  const children = Array.from(parent.children);
  
  children.forEach((child, index) => {
    const delay = index * staggerDelay;
    animationFn(child, ...args, delay);
  });
};

// Animate on scroll
export const animateOnScroll = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
};

// Initialize animations
export const initAnimations = () => {
  // Add animation classes to elements
  document.querySelectorAll('.fade-in-element').forEach(element => {
    element.classList.add('animate-on-scroll');
    element.dataset.animation = 'fade-in';
  });
  
  document.querySelectorAll('.slide-in-element').forEach(element => {
    element.classList.add('animate-on-scroll');
    element.dataset.animation = 'slide-in';
  });
  
  // Start observing
  animateOnScroll();
};

// Add smooth scrolling to anchor links
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Offset for fixed header
        behavior: 'smooth'
      });
    });
  });
};
