// Display available tours
function displayTours() {
    const tours = [
        { title: 'City Tour', description: 'Explore the main sights of the city.', price: '$50' },
        { title: 'Food Tour', description: 'Taste the local cuisine with a guide.', price: '$70' },
        { title: 'Hiking Adventure', description: 'A day of hiking in beautiful landscapes.', price: '$100' }
    ];

    const toursSection = document.getElementById('tours-section');

    tours.forEach(tour => {
        const tourItem = document.createElement('div');
        tourItem.className = 'tour-item';
        tourItem.innerHTML = `<h3>${tour.title}</h3><p>${tour.description}</p><p><strong>Price:</strong> ${tour.price}</p>`;
        toursSection.appendChild(tourItem);
    });
}

// Load tours on page load
window.onload = displayTours;
