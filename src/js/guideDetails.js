// Retrieve guide ID from URL parameters
function getGuideIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

// Load guide details based on the guide ID
function loadGuideDetails() {
    const guideId = getGuideIdFromURL();
    const guide = guides.find(g => g.id === guideId);

    if (guide) {
        // Display guide details
        document.getElementById('guide-name').textContent = guide.name;
        document.getElementById('guide-location').textContent = guide.location;
        document.getElementById('guide-bio').textContent = guide.bio;
        document.getElementById('guide-interests').textContent = guide.interests;

        // Display reviews
        displayReviews(guide.reviews);
    } else {
        alert("Guide not found.");
        window.location.href = "home.html";
    }
}

// Display reviews for the guide
function displayReviews(reviews) {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = ""; // Clear existing reviews

    if (reviews.length > 0) {
        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <p><strong>Rating:</strong> ${review.rating} / 5</p>
                <p><strong>Comment:</strong> ${review.comment}</p>
            `;
            reviewsList.appendChild(reviewItem);
        });
    } else {
        reviewsList.innerHTML = "<p>No reviews yet. Be the first to review!</p>";
    }
}

// Add a new review
function addReview(event) {
    event.preventDefault();

    const guideId = getGuideIdFromURL();
    const guide = guides.find(g => g.id === guideId);
    const rating = parseInt(document.getElementById('rating').value, 10);
    const comment = document.getElementById('comment').value;

    if (guide && rating && comment) {
        const newReview = { rating, comment };
        guide.reviews.push(newReview);

        // Update the display
        displayReviews(guide.reviews);

        // Clear the form
        document.getElementById('review-form').reset();
        alert("Thank you for your review!");
    } else {
        alert("Please complete the rating and comment.");
    }
}

// Load guide details on page load
window.onload = loadGuideDetails;
