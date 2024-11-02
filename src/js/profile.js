// Function to save profile information
function saveProfile(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const bio = document.getElementById('bio').value;
    const interests = document.getElementById('interests').value;

    if (fullName && bio && interests) {
        const userProfile = { fullName, bio, interests };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));

        alert('Profile created successfully!');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
}
