// Function to load profile data from local storage and display it
function loadProfile() {
    console.log("loadProfilefunction is running");
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (userProfile) {
        document.getElementById("display-name").textContent = userProfile.fullName;
        document.getElementById("display-bio").textContent = userProfile.bio;
        document.getElementById("display-interests").textContent = userProfile.interests;
        document.getElementById("display-location").textContent = userProfile.location;

    } else {
        alert("No profile found. Please create your profile.");
        window.location.href = "profile.html"; // Redirect to profile creation if no profile exists
    }
}

function editProfile() {
    window.location.href = 'profile.html';
}

// Load the profile data on page load
window.onload = loadProfile;
