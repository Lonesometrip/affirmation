let currentCar = '';
let currentViewType = 'exterior';
let currentViewIndex = 0;

function openGallery(carId) {
    currentCar = carId;
    currentViewType = 'exterior';
    currentViewIndex = 0;
    updateGalleryView();
    document.getElementById('gallery-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('gallery-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateGalleryView() {
    const carView = document.getElementById('car-view');
    carView.src = carData[currentCar][currentViewType][currentViewIndex];
}

function nextImage() {
    const totalImages = carData[currentCar][currentViewType].length;
    currentViewIndex = (currentViewIndex + 1) % totalImages;
    updateGalleryView();
}

function previousImage() {
    const totalImages = carData[currentCar][currentViewType].length;
    currentViewIndex = (currentViewIndex - 1 + totalImages) % totalImages;
    updateGalleryView();
}

function toggleViewType() {
    currentViewType = currentViewType === 'exterior' ? 'interior' : 'exterior';
    currentViewIndex = 0;
    updateGalleryView();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('close-gallery').addEventListener('click', closeGallery);
    document.getElementById('rotate-left').addEventListener('click', previousImage);
    document.getElementById('rotate-right').addEventListener('click', nextImage);
    document.getElementById('toggle-interior').addEventListener('click', toggleViewType);

    // Initialize button titles
    document.getElementById('rotate-left').title = 'Vorheriges Bild';
    document.getElementById('rotate-right').title = 'Nächstes Bild';
    document.getElementById('toggle-interior').title = 'Innenansicht anzeigen';
    document.getElementById('close-gallery').title = 'Galerie schließen';

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('gallery-modal').style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                previousImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'Escape') {
                closeGallery();
            } else if (e.key === 'i') {
                toggleViewType();
            }
        }
    });
}); 