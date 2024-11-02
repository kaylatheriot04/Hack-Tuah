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
  