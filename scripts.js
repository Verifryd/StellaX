function handleVideoClick() {
  // Open Manifold connect widget
  window.manifold.open();

  // Wait for successful connection
  window.manifold.on('connected', function() {
    var video = document.getElementById('stellax-video');

    // Play the video
    video.play();

    // Listen for the video ended event
    video.addEventListener('ended', function() {
      window.location.href = "homepage.html"; // Redirect to the homepage
    });
  });
}

// Initialize Manifold connect widget
window.manifold.init({
  // Configuration parameters
});

// Add event listeners to trigger the above functions when appropriate
window.addEventListener('load', handleCutscene);
});


// When the video ends
video.addEventListener('ended', function () {
  // Hide the video
  video.style.display = 'none';

  // Show the buttons
  buttonsContainer.style.display = 'flex';
});

// Event listener for the button click
document.getElementById('button1').addEventListener('click', function () {
  // Redirect to the homepage
  window.location.href = 'homepage.html'; // Change this to the correct URL of your homepage
});


  /* Check if the cutscene has been viewed before (using local storage)
  if (localStorage.getItem('cutsceneViewed') !== 'true') {
    // Play the cutscene
    introAnimation.play();

    // Mark the cutscene as viewed
    localStorage.setItem('cutsceneViewed', 'true');
  } else {
    // Optionally, hide or skip the cutscene if viewed before
    introAnimation.style.display = 'none'; */

// Function to handle the pixel split transition
function handlePixelSplit() {
  var pixelVideo = document.getElementById('stellaX-pixel');

  // Code to create the pixel splitting animation (e.g., using CSS animations or JavaScript)

  // Code to handle the transition to different pages based on user interaction with the pixels

// Add event listeners to trigger the above functions when appropriate
window.addEventListener('load', handleCutscene);
// Other event listeners can be added as needed

// Call the handleCutscene function when the page loads
window.addEventListener('load', handleCutscene);

}
