let currentCar = '';
let currentViewType = 'exterior';
let currentViewIndex = 0;
let isDragging = false;
let startX = 0;

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
    
    // Update angle indicator
    const totalViews = carData[currentCar][currentViewType].length;
    const angle = Math.round((currentViewIndex / (totalViews - 1)) * 360);
    document.getElementById('angle-value').textContent = angle + '°';
    
    // Update interior/exterior toggle button
    const toggleBtn = document.getElementById('toggle-interior');
    toggleBtn.innerHTML = currentViewType === 'exterior' ? 
        '<i class="fas fa-couch"></i>' : 
        '<i class="fas fa-car"></i>';
    toggleBtn.title = currentViewType === 'exterior' ? 
        'Innenansicht anzeigen' : 
        'Außenansicht anzeigen';
}

function rotateLeft() {
    const totalViews = carData[currentCar][currentViewType].length;
    currentViewIndex = (currentViewIndex - 1 + totalViews) % totalViews;
    updateGalleryView();
}

function rotateRight() {
    const totalViews = carData[currentCar][currentViewType].length;
    currentViewIndex = (currentViewIndex + 1) % totalViews;
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
    document.getElementById('rotate-left').addEventListener('click', rotateLeft);
    document.getElementById('rotate-right').addEventListener('click', rotateRight);
    document.getElementById('toggle-interior').addEventListener('click', toggleViewType);

    // Initialize button titles
    document.getElementById('rotate-left').title = 'Nach links drehen';
    document.getElementById('rotate-right').title = 'Nach rechts drehen';
    document.getElementById('close-gallery').title = 'Galerie schließen';
    
    // Mouse drag to rotate
    const carViewer = document.getElementById('car-viewer');
    
    carViewer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
    });
    
    carViewer.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const diff = e.clientX - startX;
            if (diff > 50) {
                rotateRight();
                startX = e.clientX;
            } else if (diff < -50) {
                rotateLeft();
                startX = e.clientX;
            }
        }
    });
    
    carViewer.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    carViewer.addEventListener('mouseleave', () => {
        isDragging = false;
    });
    
    // Touch events for mobile
    carViewer.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
    });
    
    carViewer.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const diff = e.touches[0].clientX - startX;
            if (diff > 30) {
                rotateRight();
                startX = e.touches[0].clientX;
            } else if (diff < -30) {
                rotateLeft();
                startX = e.touches[0].clientX;
            }
        }
    });
    
    carViewer.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('gallery-modal').style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                rotateLeft();
            } else if (e.key === 'ArrowRight') {
                rotateRight();
            } else if (e.key === 'Escape') {
                closeGallery();
            } else if (e.key === 'i') {
                toggleViewType();
            }
        }
    });
}); 