import * as THREE from 'three';
import { OrbitControls } from './lib/OrbitControls.js';

            document.getElementById('threejs-container').style.display = 'block';
            startThreeJsAnimation();
        });
    </script>
    <div id="scene-container" class="hidden">
        <div class="buttons-container">
            <a href="index.html" class="button">Start</a>
            <a href="community-puzzles.html" class="button">Community Puzzles</a>
        </div>
    </div>
    <div id="scene-container"></div>
<script>
        function startThreeJsAnimation() {
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

          const renderer = new THREE.WebGLRenderer({ alpha: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setClearColor(0xffffff, 0);  // The second argument is the alpha (transparency) and is set to 0 for full transparency
          document.getElementById('threejs-container').appendChild(renderer.domElement);

          const textureLoader = new THREE.TextureLoader();
          const texture = textureLoader.load('Assets/HomepagePlaceholder.png'); // Load the cube texture
          const material = new THREE.MeshBasicMaterial({ map: texture }); // Apply the texture to the material

          const geometry = new THREE.BoxGeometry();

          const cube1 = new THREE.Mesh(geometry, material);
          const cube2 = new THREE.Mesh(geometry, material);

          cube1.position.x = -2; // Position the cubes
          cube2.position.x = 2;

          scene.add(cube1);
          scene.add(cube2);

          camera.position.z = 5;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// Function to handle click event
function onMouseClick(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    if (intersects[0].object === cube1) {
      window.location.href = "game-overview.html"; // Redirect to the desired page for cube1
    } else if (intersects[0].object === cube2) {
      window.location.href = "community-puzzles.html"; // Redirect to the desired page for cube2
    }
  }
}

// Add the click event listener
window.addEventListener('click', onMouseClick, false);

          const animate = function () {
            requestAnimationFrame(animate);

            cube1.rotation.x += 0.01;
            cube1.rotation.y += 0.01;

            cube2.rotation.x += 0.01;
            cube2.rotation.y += 0.01;

            renderer.render(scene, camera);
          };

          animate();
        }

        document.getElementById('intro-animation').addEventListener('ended', function() {
     document.body.classList.add('threejs-shown');
          document.getElementById('threejs-container').style.display = 'block';
          startThreeJsAnimation();
        });
</script>
