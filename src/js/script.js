/*profile creation
function createProfile() {
    // Get values from form inputs
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let interests = document.getElementById("interests").value;
    let languages = document.getElementById("languages").value;

    // Check if all fields have been filled
    if (name && location && interests && languages) {
        // Display profile details
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayLocation").innerText = location;
        document.getElementById("displayInterests").innerText = interests;
        document.getElementById("displayLanguages").innerText = languages;

        // Hide the form and show the profile
        document.getElementById("profileCreation").style.display = "none";
        document.getElementById("profileDisplay").style.display = "block";

        // Optionally, save the profile data in localStorage so it persists after page reload
        localStorage.setItem("profile", JSON.stringify({ name, location, interests, languages }));
    } else {
        alert("Please fill in all fields!");
    }
}

// Optional: Load profile if it exists in localStorage
window.onload = function() {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
        document.getElementById("name").value = savedProfile.name;
        document.getElementById("location").value = savedProfile.location;
        document.getElementById("interests").value = savedProfile.interests;
        document.getElementById("languages").value = savedProfile.languages;
        createProfile(); // Automatically display saved profile
    }
};


//user and guide profiles w interest based matching
let userInterests = ["hiking", "food", "art"];
let guideInterests = ["hiking", "history", "food"];

function findMatches(userinterests, guideinterests) {
    let matches = [];
    userInterests.forEach(interest => {
        if (guideInterests.includes(interest)) {
            matches.push(interest);
        }
    });
    return matches.length > 0 ? true:false;
}
if (findMatches(userInterests, guideInterests)) {
    console.log("Match found!");
}
else {
    console.log("No match.")
}

message sending
let messages = [];

function sendMessage() {
    let message = document.getElementById("messageInput").value;
    if (message !== " ") {
        messages.push(message);
        displayMessages();
        document.getElementById("messageInput").value = " ";
    }
}
function displayMessages() {
    let messageList = document.getElementById("messageList");
    messageList.innerHTML = " ";
    messages.forEach(msg => {
        messageList.innerHTML += `<div class="message">${msg}</div>`;
    });
}

//reviews
function submitReview() {
    let rating = document.getElementById("rating").value;
    let reviewText = document.getElementById("reviewText").value;
    if (rating && reviewText) {
        reviews.push({rating: rating, text: reviewText});
        displayReviews();
    }
}

function displayReviews() {
    let reviewSection = document.getElementById("reviewSection");
    reviewSection.innerHTML = " ";
    reviews.forEach(review => {
        reviewSection.innerHTML += `<div class="review">
            <p>Rating: ${review.rating}</p>
            <p>${review.text}</p>
        </div>`;
    });
}

//reporting
let reports = [];
function showReportForm() {
    document.getElementById("reportForm").style.display = "block";
}
function submitReport() {
    let reportReason = document.getElementById("reportReason").value;
    if (reportReason) {
        reports.push({reason: reportReason, timestamp: new Date() });
        document.getElementById("reportReason").value = " ";
        document.getElementById("reportForm").style.display = "none";
        document.getElementById("reportConfirmation").style.display = "block";
        setTimeout(() => {
            document.getElementById("reportConfirmation").style.display = "none";
        }, 3000);
    }
    else {
        alert("Please provide a reason for the report.");
    }
}

//tours and itineraries
let tours = [];
function createTour() {
    let name = document.getElementById("tourName").value;
    let description = document.getElementById("tourDescription");
} */