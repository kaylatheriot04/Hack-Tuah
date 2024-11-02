// Sample data for guides
const guides = [
    {
        id: 1,
        name: "Alice Johnson",
        bio: "Art enthusiast and local historian in Paris.",
        interests: "Art, History, Architecture",
        location: "Paris, France",
        reviews: [
            { rating: 5, comment: "Amazing guide! Highly recommended." },
            { rating: 4, comment: "Very knowledgeable and friendly." }
        ]
    },
    {
        id: 2,
        name: "Carlos Martinez",
        bio: "Foodie and culture expert in Barcelona.",
        interests: "Food, Culture, Walking Tours",
        location: "Barcelona, Spain",
        reviews: [
            { rating: 5, comment: "Fantastic experience with Carlos!" }
        ]
    },
    {
        id: 3,
        name: "Mina Chen",
        bio: "Nature lover and adventure guide in Kyoto.",
        interests: "Nature, Hiking, Photography",
        location: "Kyoto, Japan",
        reviews: []
    }
];

// Function to display guides on the home page
function displayGuides() {
    const guidesList = document.getElementById('guides-list');

    guides.forEach(guide => {
        const guideCard = document.createElement('div');
        guideCard.classList.add('guide-card');

        // Make each guide profile clickable, linking to guideDetails.html with the guide's ID
        guideCard.innerHTML = `
            <a href="guideDetails.html?id=${guide.id}" class="guide-link">
                <h3>${guide.name}</h3>
                <p><strong>Bio:</strong> ${guide.bio}</p>
                <p><strong>Interests:</strong> ${guide.interests}</p>
                <p><strong>Location:</strong> ${guide.location}</p>
            </a>
        `;

        guidesList.appendChild(guideCard);
    });
}

// Load guides on page load
window.onload = displayGuides;