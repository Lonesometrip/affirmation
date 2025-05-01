// Premium Chauffeur main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initialize application
const initializeApp = () => {
    setupNavigation();
    setupScrollEffects();
    setupContactForm();
    setupDestinationModals();
};

// Navigation functionality
const setupNavigation = () => {
    // Mobile menu toggle - using direct event handler with improved reliability
    function setupMobileMenu() {
        console.log('Setting up mobile menu...');

        // Try to find the mobile menu button by ID first
        let mobileMenuBtn = document.getElementById('mobile-menu-toggle');

        // If not found by ID, try to find by class as fallback
        if (!mobileMenuBtn) {
            console.log('Mobile menu button not found by ID, trying class selector');
            mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        }

        const mainNav = document.querySelector('.main-nav');

        // Check if we're on mobile view
        const isMobileView = () => window.innerWidth <= 992;

        if (!mobileMenuBtn || !mainNav) {
            console.error('Mobile menu elements not found:', {
                mobileMenuBtn: !!mobileMenuBtn,
                mainNav: !!mainNav
            });
            console.log('Will try again in 1000ms');
            setTimeout(setupMobileMenu, 1000);
            return;
        }

        console.log('Mobile menu elements found:', {
            mobileMenuBtn: mobileMenuBtn,
            mainNav: mainNav
        });

        // Initial setup for desktop view
        if (!isMobileView()) {
            mainNav.style.transform = 'none';
        }

        // Toggle mobile menu with direct click handler
        mobileMenuBtn.onclick = function(e) {
            e.preventDefault();
            console.log('Mobile menu button clicked');
            this.classList.toggle('active');
            mainNav.classList.toggle('active');

            // Log the current state
            console.log('Menu state after click:', {
                buttonActive: this.classList.contains('active'),
                navActive: mainNav.classList.contains('active')
            });
        };

        // Also add the ID to ensure future references work
        if (!mobileMenuBtn.id) {
            mobileMenuBtn.id = 'mobile-menu-toggle';
            console.log('Added ID to mobile menu button');
        }

        // Handle resize events
        window.addEventListener('resize', () => {
            if (!isMobileView()) {
                // Reset styles for desktop view
                mainNav.style.transform = 'none';

                // Remove active classes
                mobileMenuBtn.classList.remove('active');
                mainNav.classList.remove('active');
            } else {
                // Reset for mobile view
                if (!mainNav.classList.contains('active')) {
                    mainNav.style.transform = '';
                }
            }
        });

        console.log('Mobile menu setup complete');
    }

    // Call the setup function - with a slight delay to ensure DOM is ready
    setTimeout(setupMobileMenu, 100);

    // Active link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Check if the link matches the current path or hash
        if ((currentHash && linkPath.includes(currentHash)) ||
            (!currentHash && currentPath === '/' && linkPath === '/#home') ||
            (linkPath !== '/#home' && currentPath.includes(linkPath.replace('/#', '/')))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

        // Add click event for smooth scrolling
        if (linkPath.startsWith('/#')) {
            link.addEventListener('click', (e) => {
                const targetId = linkPath.replace('/#', '');
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });

                    // Update URL hash without scrolling
                    history.pushState(null, null, linkPath);

                    // Close mobile menu if open
                    if (mobileMenuBtn && mainNav) {
                        mobileMenuBtn.classList.remove('active');
                        mainNav.classList.remove('active');
                    }

                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }
    });
};

// Hero slider functionality
const setupSlider = () => {
    // No JavaScript needed for the slideshow
    // It's now handled by CSS animations
};

// Scroll animation effects
const setupScrollEffects = () => {
    const animateElements = document.querySelectorAll('.animate');

    const checkInView = () => {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('in-view');
            }
        });
    };

    window.addEventListener('scroll', checkInView);
    checkInView();
};

// Destination Modal Functionality
const setupDestinationModals = () => {
    // Remove console logs in production
    // console.log('Setting up destination modals...');

    // Destination data (this would typically come from a database or API)
    const destinationsData = {
        'munich': {
            title: 'Munich & Bavarian Countryside',
            location: 'Germany, Bavaria',
            duration: '1-3 Days',
            price: 'From €599',
            description: 'Experience the charm of Bavaria\'s capital city, Munich, and the picturesque surrounding countryside. This tour combines urban exploration with rural beauty, taking you through historic sites, world-class museums, and breathtaking natural landscapes.',
            features: [
                'Visit the iconic Marienplatz and watch the famous Glockenspiel',
                'Tour the magnificent Nymphenburg Palace and gardens',
                'Experience the world-famous Hofbräuhaus beer hall',
                'Explore the picturesque Bavarian countryside',
                'Optional day trip to Neuschwanstein Castle',
                'Luxury transportation with professional multilingual chauffeur'
            ],
            mainImage: 'public/images/destinations/dest-munich-skyline.jpg',
            gallery: [
                'public/images/destinations/dest-marienplatz.jpg',
                'public/images/destinations/dest-english-garden.jpg',
                'public/images/destinations/dest-nymphenburg.jpg'
            ]
        },
        'switzerland': {
            title: 'Switzerland Tour',
            location: 'Switzerland',
            duration: '3-7 Days',
            price: 'From €1,299',
            description: 'Discover the breathtaking beauty of Switzerland with our comprehensive tour package. From the majestic Swiss Alps to charming villages and pristine lakes, this tour offers the perfect blend of natural beauty, adventure, and cultural experiences.',
            features: [
                'Explore Zurich, Lucerne, Interlaken, and Geneva',
                'Visit the iconic Matterhorn in Zermatt',
                'Experience the scenic Glacier Express train journey',
                'Cruise on Lake Lucerne surrounded by mountains',
                'Optional skiing or snowboarding in winter months',
                'Luxury accommodation and transportation included'
            ],
            mainImage: 'public/images/destinations/dest-swiss-alps-mountains.jpg',
            gallery: [
                'public/images/destinations/dest-lake-lucerne.jpg',
                'public/images/destinations/dest-swiss-village.jpg',
                'public/images/destinations/dest-matterhorn.jpg'
            ]
        },
        'austria': {
            title: 'Austria Experience',
            location: 'Austria',
            duration: '3-5 Days',
            price: 'From €899',
            description: 'Immerse yourself in the rich cultural heritage and stunning landscapes of Austria. From the imperial splendor of Vienna to the musical charm of Salzburg and the breathtaking scenery of the Austrian Alps, this tour offers a complete Austrian experience.',
            features: [
                'Discover Vienna\'s imperial palaces and musical heritage',
                'Visit Mozart\'s birthplace in Salzburg',
                'Explore the picturesque town of Hallstatt',
                'Experience the scenic Salzkammergut lake district',
                'Optional Sound of Music tour in Salzburg',
                'Comfortable accommodation and luxury transportation'
            ],
            mainImage: 'public/images/destinations/dest-vienna-palace.jpg',
            gallery: [
                'public/images/destinations/dest-hallstatt.jpg',
                'public/images/destinations/dest-austrian-alps.jpg',
                'public/images/destinations/dest-belvedere-palace.jpg'
            ]
        },
        'black-forest': {
            title: 'Baden-Baden & Black Forest',
            location: 'Germany, Black Forest Region',
            duration: '2-4 Days',
            price: 'From €799',
            description: 'Discover the mystical allure of the Black Forest and the elegant spa town of Baden-Baden. This tour combines relaxation, natural beauty, and cultural experiences in one of Germany\'s most picturesque regions.',
            features: [
                'Explore the sophisticated spa town of Baden-Baden',
                'Experience traditional Black Forest cake making',
                'Visit the Triberg Waterfalls, among Germany\'s highest',
                'Tour a traditional cuckoo clock workshop',
                'Explore the scenic Black Forest High Road',
                'Optional spa treatments in Baden-Baden\'s thermal baths'
            ],
            mainImage: 'public/images/destinations/dest-baden-baden-town.jpg',
            gallery: [
                'public/images/destinations/dest-black-forest.jpg',
                'public/images/destinations/dest-triberg-falls.jpg',
                'public/images/destinations/dest-black-forest-village.jpg'
            ]
        },
        'prague': {
            title: 'Prague, Czech Republic',
            location: 'Czech Republic',
            duration: '1-3 Days',
            price: 'From €599',
            description: 'Explore the magical city of Prague with our extended tour package. Known as the "City of a Hundred Spires," Prague offers a perfect blend of historic charm, architectural beauty, and vibrant culture.',
            features: [
                'Visit the iconic Prague Castle and St. Vitus Cathedral',
                'Walk across the historic Charles Bridge',
                'Explore the charming Old Town Square and Astronomical Clock',
                'Discover the historic Jewish Quarter',
                'Enjoy Czech cuisine and famous beer at local restaurants',
                'Optional evening river cruise on the Vltava'
            ],
            mainImage: 'public/images/destinations/dest-prague-oldtown.jpg',
            gallery: [
                'public/images/destinations/dest-prague-castle.jpg',
                'public/images/destinations/dest-charles-bridge.jpg',
                'public/images/destinations/dest-astronomical-clock.jpg'
            ]
        },
        'heart-of-europe': {
            title: 'Heart of Europe Tour',
            location: 'Germany, Switzerland, Austria',
            duration: '7-10 Days',
            price: 'From €2,499',
            description: 'Experience the best of three magnificent countries with our comprehensive Heart of Europe Tour. This carefully crafted itinerary takes you through the most stunning landscapes and historic cities of Germany, Switzerland, and Austria.',
            features: [
                'Visit key cities including Munich, Zurich, Vienna, and Salzburg',
                'Experience the majestic Swiss Alps and Austrian highlands',
                'Discover charming villages and medieval towns',
                'Cruise on picturesque lakes in Switzerland and Austria',
                'Enjoy diverse cuisines and cultural experiences',
                'Luxury accommodation and transportation throughout the journey'
            ],
            mainImage: 'public/images/destinations/dest-belvedere-palace.jpg',
            gallery: [
                'public/images/destinations/dest-munich-skyline.jpg',
                'public/images/destinations/dest-swiss-alps-mountains.jpg',
                'public/images/destinations/dest-vienna-palace.jpg'
            ]
        }
    };

    // Wait for DOM to be fully loaded
    setTimeout(() => {
        const modal = document.querySelector('.destination-modal');
        const closeModalBtn = document.querySelector('.close-modal');
        const destinationCards = document.querySelectorAll('.destination-card');
        const detailButtons = document.querySelectorAll('.view-details');

        if (!modal) {
            // console.error('Modal element not found!');
            return;
        }

        // Function to open modal with destination data
        const openModal = (destinationId) => {
            const destination = destinationsData[destinationId];
            if (!destination) {
                // console.error('Destination data not found for ID:', destinationId);
                return;
            }

            try {
                // Update modal content with destination data
                document.querySelector('.destination-title').textContent = destination.title;
                document.querySelector('.location').textContent = destination.location;
                document.querySelector('.duration').textContent = destination.duration;
                document.querySelector('.price').textContent = destination.price;

                // Set description
                document.querySelector('.destination-description').innerHTML = `<p>${destination.description}</p>`;

                // Set features
                const featuresList = document.querySelector('.features-list');
                featuresList.innerHTML = '';
                destination.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });

                // Set main image
                document.querySelector('.gallery-main img').src = destination.mainImage;
                document.querySelector('.gallery-main img').alt = destination.title;

                // Set gallery thumbnails
                const thumbs = document.querySelectorAll('.gallery-thumbs .thumb img');
                thumbs.forEach((thumb, index) => {
                    if (destination.gallery[index]) {
                        thumb.src = destination.gallery[index];
                        thumb.alt = `${destination.title} - Image ${index+1}`;
                        thumb.parentElement.style.display = 'block';
                    } else {
                        thumb.parentElement.style.display = 'none';
                    }
                });

                // Show modal
                document.body.style.overflow = 'hidden';
                modal.classList.add('active');
            } catch (error) {
                // console.error('Error opening modal:', error);
            }
        };

        // Close modal function
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Add click events to destination cards
        destinationCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.view-details')) {
                    const destinationId = card.dataset.id;
                    openModal(destinationId);
                }
            });
        });

        // Add click events to detail buttons
        detailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = button.closest('.destination-card');
                const destinationId = card ? card.dataset.id : null;
                if (destinationId) {
                    openModal(destinationId);
                }
            });
        });

        // Close modal when clicking the close button
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }

        // Close modal when clicking outside the content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Set up gallery thumbnail click events
        const thumbs = document.querySelectorAll('.gallery-thumbs .thumb');
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Update active thumbnail
                document.querySelector('.gallery-thumbs .thumb.active').classList.remove('active');
                thumb.classList.add('active');

                // Update main image
                const mainImage = document.querySelector('.gallery-main img');
                const thumbImage = thumb.querySelector('img');
                mainImage.src = thumbImage.src;
                mainImage.alt = thumbImage.alt;
            });
        });

    }, 300); // Short delay to ensure DOM is ready
};

// Contact form validation and handling
const setupContactForm = () => {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData);

            // Basic validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                // Here you would typically send the form data to a server
                // For demo purposes, we're just showing success message
                contactForm.innerHTML = '<div class="success-message">Thank you for your message! We will contact you shortly.</div>';
            }
        });
    }
};