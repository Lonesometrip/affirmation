const carData = {
    car1: {
        name: 'Mercedes-Benz S-Klasse',
        description: 'Die S-Klasse steht für höchsten Komfort und Luxus. Mit ihrem eleganten Design und modernster Technologie bietet sie ein unvergleichliches Fahrerlebnis.',
        specs: {
            seats: '4',
            luggage: '2 Koffer'
        },
        thumbnail: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        exterior: [
            'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ],
        interior: [
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
        thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        exterior: [
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ],
        interior: [
            'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1548697153-989a9e4b6dc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ]
    },
    car5: {
        name: 'Mercedes-Benz G63 AMG',
        description: 'Der Mercedes-Benz G63 AMG vereint Luxus mit beeindruckender Leistung. Diese Ikone bietet höchsten Komfort und modernste Technologie in einem einzigartigen Design.',
        specs: {
            seats: '5',
            luggage: '3 Koffer'
        },
        thumbnail: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        exterior: [
            'https://images.unsplash.com/photo-1610647752706-3bb12232b3e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1549827458-cb7865a4177a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ],
        interior: [
            'https://images.unsplash.com/photo-1547245329-b732ddfb192b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1543857182-68106299b6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
                    <div class="degree-360">360°</div>
                    <button class="rotate-button absolute bottom-4 right-4 bg-white text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-100 transition" 
                            onclick="openGallery('${carId}')"
                            title="360° Ansicht öffnen">
                        <i class="fas fa-cube"></i>
                    </button>
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