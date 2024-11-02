// Function to load profile data into the form for editing
function loadProfileForm() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (userProfile) {
        document.getElementById('full-name').value = userProfile.fullName;
        document.getElementById('bio').value = userProfile.bio;
        document.getElementById('interests').value = userProfile.interests;
        document.getElementById('location').value = userProfile.location;
    }
}

// Function to save or update profile information
function saveProfile(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const bio = document.getElementById('bio').value;
    const interests = document.getElementById('interests').value;
    const location = document.getElementById('location').value;

    if (fullName && bio && interests && location) {
        const userProfile = {
            fullName: fullName,
            bio: bio,
            interests: interests,
            location: location
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));

        alert('Profile saved successfully!');
        window.location.href = 'completedProfile.html';
    } else {
        alert('Please fill in all fields');
    }
}

// Load the profile form with existing data on page load
window.onload = loadProfileForm;
