// Function to load the navbar
function loadNavbar() {
    const isAuthPage = window.location.pathname.includes('login.html') || window.location.pathname.includes('signup.html');
    
    if (!isAuthPage) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('afterbegin', data);
                highlightActiveLink();
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
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

// Load the navbar on page load
window.addEventListener('DOMContentLoaded', loadNavbar);
