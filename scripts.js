// Function to handle the animated cutscene (optional view or one-time display)
function handleCutscene() {
  var introAnimation = document.getElementById('intro-animation');
  introAnimation.play();

  // Listen for the 'ended' event to know when the video has finished playing
  introAnimation.addEventListener('ended', function() {
    // Hide the intro animation
    document.getElementById('animated-cutscene').style.display = 'none';
    
    // Show the pixel buttons
    document.getElementById('pixel-buttons').style.display = 'flex';
  });
}

// Add event listeners to trigger the above functions when appropriate
window.addEventListener('load', function() {
  var video = document.getElementById('intro-animation');
  var placeholder = document.getElementById('placeholder-image');

  // Preload the video
  video.preload = 'auto';

  // When the video is ready to play
  video.oncanplay = function() {
    // Hide the placeholder
    placeholder.style.display = 'none';

    // Show the video
    video.style.display = 'block';

    // Play the video
    video.play();
  };

  // Trigger the loading of the video
  video.load();
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
