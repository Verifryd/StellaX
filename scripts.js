// Function to handle the animated cutscene (optional view or one-time display)
// Function to handle the animated cutscene (optional view or one-time display)
function handleCutscene() {
  var introAnimation = document.getElementById('intro-animation');
  var buttonsContainer = document.getElementById('buttons-container');

  // When the video ends
  introAnimation.addEventListener('ended', function() {
    // Hide the video
    introAnimation.style.display = 'none';

    // Show the buttons
    buttonsContainer.style.display = 'flex';
  });
}

// Function to handle the pixel split transition
function handlePixelSplit() {
  var pixelVideo = document.getElementById('stellaX-pixel');

  // Code to create the pixel splitting animation (e.g., using CSS animations or JavaScript)

  // Code to handle the transition to different pages based on user interaction with the pixels
}

// Add event listeners to trigger the above functions when appropriate
window.addEventListener('load', handleCutscene);

  var video = document.getElementById('intro-animation');
  var buttonsContainer = document.getElementById('buttons-container');

  // When the video ends
  video.addEventListener('ended', function() {
    // Hide the video
    video.style.display = 'none';

    // Show the buttons
    buttonsContainer.style.display = 'flex';
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

import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();