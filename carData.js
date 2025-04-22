const carData = {
    car1: {
        name: 'Mercedes-Benz S-Klasse',
        description: 'Die S-Klasse steht für höchsten Komfort und Luxus. Mit ihrem eleganten Design und modernster Technologie bietet sie ein unvergleichliches Fahrerlebnis.',
        specs: {
            seats: '4',
            luggage: '2 Koffer'
        },
        thumbnail: 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg',
        exterior: [
            'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg',
            'https://cdn.pixabay.com/photo/2016/12/03/18/57/amg-1880381_1280.jpg',
            'https://cdn.pixabay.com/photo/2016/12/03/18/57/mercedes-1880380_1280.jpg',
            'https://cdn.pixabay.com/photo/2015/07/19/20/00/mercedes-benz-852156_1280.jpg'
        ],
        interior: [
            'https://cdn.pixabay.com/photo/2016/12/03/18/57/mercedes-benz-1880379_1280.jpg',
            'https://cdn.pixabay.com/photo/2017/08/12/12/01/mercedes-benz-2634297_1280.jpg'
        ]
    },
    car2: {
        name: 'BMW 7er Limousine',
        description: 'Die BMW 7er Limousine vereint sportliche Eleganz mit höchstem Komfort. Mit ihrer innovativen Technologie und luxuriösen Ausstattung setzt sie neue Maßstäbe.',
        specs: {
            seats: '4',
            luggage: '2 Koffer'
        },
        thumbnail: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        exterior: [
            'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ],
        interior: [
            'https://images.unsplash.com/photo-1592186325138-d9518b3e6a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ]
    },
    car3: {
        name: 'Audi A8',
        description: 'Der Audi A8 ist die Spitzenlimousine der Marke. Mit seiner fortschrittlichen Technologie und luxuriösen Ausstattung bietet er ein einzigartiges Fahrerlebnis.',
        specs: {
            seats: '4',
            luggage: '2 Koffer'
        },
        thumbnail: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        exterior: [
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ],
        interior: [
            'https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ]
    },
    car4: {
        name: 'Mercedes-Benz V-Klasse',
        description: 'Die V-Klasse bietet luxuriösen Komfort für bis zu 7 Personen. Mit ihrem geräumigen Innenraum und modernster Ausstattung ist sie ideal für Gruppenfahrten.',
        specs: {
            seats: '7',
            luggage: '4 Koffer'
        },
        thumbnail: 'https://images.unsplash.com/photo-1551737823-bfb7c4d05235',
        exterior: [
            'https://images.unsplash.com/photo-1551737823-bfb7c4d05235',
            'https://images.unsplash.com/photo-1551737824-e0d76b1e0bfc',
            'https://images.unsplash.com/photo-1551737825-6f40d5e3e96c',
            'https://images.unsplash.com/photo-1551737826-4e16a5d0c494'
        ],
        interior: [
            'https://images.unsplash.com/photo-1551737827-77c7d4e11f84',
            'https://images.unsplash.com/photo-1551737828-7e52588090d2'
        ]
    },
    car5: {
        name: 'Mercedes-Benz G63 AMG',
        description: 'Der Mercedes-Benz G63 AMG vereint Luxus mit beeindruckender Leistung. Diese Ikone bietet höchsten Komfort und modernste Technologie in einem einzigartigen Design.',
        specs: {
            seats: '5',
            luggage: '3 Koffer'
        },
        thumbnail: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366',
        exterior: [
            'https://images.unsplash.com/photo-1520031441872-265e4ff70366',
            'https://images.unsplash.com/photo-1520031441872-265e4ff70367',
            'https://images.unsplash.com/photo-1520031441872-265e4ff70368',
            'https://images.unsplash.com/photo-1520031441872-265e4ff70369'
        ],
        interior: [
            'https://images.unsplash.com/photo-1520031441872-265e4ff70370',
            'https://images.unsplash.com/photo-1520031441872-265e4ff70371'
        ]
    },
    car6: {
        name: 'Maserati Quattroporte',
        description: 'Die Maserati Quattroporte vereint italienisches Design mit sportlicher Performance. Mit ihrem charakteristischen Sound und luxuriöser Ausstattung ist sie ein echter Hingucker.',
        specs: {
            seats: '4',
            luggage: '2 Koffer'
        },
        thumbnail: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        exterior: [
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1571704307604-dd9b52979e92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ],
        interior: [
            'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ]
    }
};

// Function to create vehicle card HTML
function createVehicleCard(carId, carInfo) {
    return `
        <div class="gallery-card rounded-lg overflow-hidden shadow-lg bg-white">
            <div class="card-inner">
                <div class="relative">
                    <img src="${carInfo.thumbnail}" alt="${carInfo.name}" class="w-full h-64 object-cover">
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">${carInfo.name}</h3>
                    <p class="text-gray-600 mb-4">${carInfo.description}</p>
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center">
                                <i class="fas fa-user-friends mr-2"></i>
                                <span>${carInfo.specs.seats}</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-suitcase mr-2"></i>
                                <span>${carInfo.specs.luggage}</span>
                            </div>
                        </div>
                    </div>
                    <button class="w-full bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                            onclick="openGallery('${carId}')"
                            title="Details ansehen">
                        Details ansehen
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize vehicle grid
document.addEventListener('DOMContentLoaded', () => {
    const vehicleGrid = document.getElementById('vehicle-grid');
    let cardsHTML = '';
    
    for (const [carId, carInfo] of Object.entries(carData)) {
        cardsHTML += createVehicleCard(carId, carInfo);
    }
    
    vehicleGrid.innerHTML = cardsHTML;
}); 