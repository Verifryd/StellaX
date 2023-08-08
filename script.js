// Function to handle the animated cutscene (optional view or one-time display)
function handleCutscene() {
  var introAnimation = document.getElementById('intro-animation');

  // Check if the cutscene has been viewed before (using local storage)
  if (localStorage.getItem('cutsceneViewed') !== 'true') {
    // Play the cutscene
    introAnimation.play();

    // Mark the cutscene as viewed
    localStorage.setItem('cutsceneViewed', 'true');
  } else {
    // Optionally, hide or skip the cutscene if viewed before
    introAnimation.style.display = 'none';
  }
}

// Function to handle the pixel split transition
function handlePixelSplit() {
  var pixelVideo = document.getElementById('stellaX-pixel');

  // Code to create the pixel splitting animation (e.g., using CSS animations or JavaScript)

  // Code to handle the transition to different pages based on user interaction with the pixels
}

// Add event listeners to trigger the above functions when appropriate
window.addEventListener('load', handleCutscene);
// Other event listeners can be added as needed
