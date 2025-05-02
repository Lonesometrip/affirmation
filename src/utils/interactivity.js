// Interactivity utility functions

// Toggle mobile menu
export const toggleMobileMenu = (menuButton, mobileMenu) => {
  if (!menuButton || !mobileMenu) return;
  
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    
    if (isOpen) {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      // Change icon to hamburger
      const icon = menuButton.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    } else {
      mobileMenu.classList.add('open');
      menuButton.setAttribute('aria-expanded', 'true');
      // Change icon to X
      const icon = menuButton.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    }
  });
};

// Toggle mobile dropdown
export const toggleMobileDropdown = (dropdownToggles) => {
  if (!dropdownToggles || !dropdownToggles.length) return;
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const dropdown = toggle.nextElementSibling;
      if (!dropdown) return;
      
      const isOpen = dropdown.classList.contains('open');
      
      if (isOpen) {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        // Rotate icon back
        const icon = toggle.querySelector('i');
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
      } else {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        // Rotate icon
        const icon = toggle.querySelector('i');
        if (icon) {
          icon.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
};

// Sticky header
export const initStickyHeader = (header) => {
  if (!header) return;
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky-active');
    } else {
      header.classList.remove('sticky-active');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Initial check
  handleScroll();
};

// Initialize tabs
export const initTabs = (tabContainer) => {
  if (!tabContainer) return;
  
  const tabs = tabContainer.querySelectorAll('[role="tab"]');
  const tabPanels = tabContainer.querySelectorAll('[role="tabpanel"]');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.classList.remove('active');
      });
      
      // Hide all tab panels
      tabPanels.forEach(panel => {
        panel.classList.add('hidden');
      });
      
      // Activate clicked tab
      tab.setAttribute('aria-selected', 'true');
      tab.classList.add('active');
      
      // Show corresponding panel
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.classList.remove('hidden');
      }
    });
  });
};

// Initialize accordions
export const initAccordions = (accordionContainer) => {
  if (!accordionContainer) return;
  
  const accordionButtons = accordionContainer.querySelectorAll('[data-accordion-toggle]');
  
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const accordionId = button.getAttribute('data-accordion-toggle');
      const content = document.getElementById(accordionId);
      if (!content) return;
      
      const isOpen = content.classList.contains('open');
      
      if (isOpen) {
        content.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        // Rotate icon back
        const icon = button.querySelector('i');
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
      } else {
        content.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        // Rotate icon
        const icon = button.querySelector('i');
        if (icon) {
          icon.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
};
