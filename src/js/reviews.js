// Submit a review and save it to local storage
function submitReview(event) {
    event.preventDefault();

    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review-text').value;

    if (rating && reviewText) {
        const review = { rating, reviewText, timestamp: new Date().toISOString() };

        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        alert('Review submitted!');
        displayReviews();
        document.getElementById('review-form').reset();
    } else {
        alert('Please provide both a rating and a review');
    }
}

// Display reviews from local storage
function displayReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const reviewList = document.getElementById('review-list');

    reviewList.innerHTML = "<h3>Previous Reviews</h3>";
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `<p><strong>Rating:</strong> ${review.rating}</p><p>${review.reviewText}</p><small>${new Date(review.timestamp).toLocaleString()}</small>`;
        reviewList.appendChild(reviewItem);
    });
}

// Load reviews on page load
window.onload = displayReviews;
