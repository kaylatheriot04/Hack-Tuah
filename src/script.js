// Wait for the page to fully load
window.addEventListener('load', function() {
    // Add a delay to keep the loading screen visible longer
    setTimeout(function() {
      // Hide the loading screen
      document.getElementById('loading-screen').style.display = 'none';
      
      // Show the main content
      document.getElementById('main-content').style.display = 'block';
    }, 2000); // Adjust the delay time in milliseconds (2000ms = 2 seconds)
  });
  
function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value;

    if (messageText.trim() !== "") {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;

        document.getElementById('messages').appendChild(messageElement);

        input.value = "";
    }
}

document.getElementById('messageInput').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});