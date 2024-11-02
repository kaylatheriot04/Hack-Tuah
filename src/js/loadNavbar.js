// Function to load the navbar
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            highlightActiveLink();
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Function to highlight the active link based on the current URL
function highlightActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentURL = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });
}

// Function to check for existing profile data and redirect accordingly
function redirectToProfile() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (userProfile) {
        // Redirect to completed profile page if data exists
        window.location.href = 'completedProfile.html';
    } else {
        // Redirect to profile creation page if no data exists
        window.location.href = 'profile.html';
    }
}

// Load the navbar on page load
window.addEventListener('DOMContentLoaded', loadNavbar);
