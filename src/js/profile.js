// Function to save profile information
function saveProfile(event) {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const bio = document.getElementById("bio").value;
    const interests = document.getElementById("interests").value;
    const location = document.getElementById("location").value;


    if (fullName && bio && interests && location) {
        const userProfile = {
            fullName: fullName,
            bio: bio,
            interests: interests,
            location: location
        };
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        alert("Profile created successfully!");
        window.location.href = "completedProfile.html";
    } else {
        alert("Please fill in all fields");
    }
}
