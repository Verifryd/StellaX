import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

window.startThreeJsAnimation = function() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer( { alpha: true } );
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('threejs-container').appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('Assets/HomepagePlaceholder.png');
        const material = new THREE.MeshBasicMaterial({ map: texture });

        const geometry = new THREE.BoxGeometry();
        const cube1 = new THREE.Mesh(geometry, material);
        const cube2 = new THREE.Mesh(geometry, material);
// Raycaster and mouse vector for selecting cubes
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedCube = null;
let isDragging = false;

// Mouse down event
window.addEventListener('mousedown', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([cube1, cube2]);

    if (intersects.length > 0) {
        selectedCube = intersects[0].object;
        isDragging = true;
initiateSpin();
    }
});

// Mouse move event
window.addEventListener('mousemove', (event) => {
    if (isDragging && selectedCube) {
        const rotationSpeed = 0.01; // Adjust this value for desired rotation speed

        selectedCube.rotation.x += event.movementY * rotationSpeed;
        selectedCube.rotation.y += event.movementX * rotationSpeed;
    }
});

// Mouse up event
window.addEventListener('mouseup', () => {
    isDragging = false;
    selectedCube = null;
});


        cube1.position.x = -2;
        cube2.position.x = 2;

        scene.add(cube1);
        scene.add(cube2);
// Adjust cube positions based on screen width
if (window.innerWidth < 600) {
    // Position cubes vertically for mobile screens without any horizontal offset
    cube2.position.set(0, cube1.position.y - 4.5, 0);
} else {
    // Position cubes horizontally for desktop screens
    cube2.position.set(cube1.position.x + 4, 0, 0);
}


        const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

        function onMouseClick(event) {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);

            if (intersects.length > 0) {
                if (intersects[0].object === cube1) {

setTimeout(function() {
    window.location.href = "game-overview.html";
}, 2000);

                } else if (intersects[0].object === cube2) {
                    window.location.href = "community-puzzles.html";
                }
            }
        }

        window.addEventListener('click', onMouseClick, false);

        const animate = function () {
            requestAnimationFrame(animate);
            cube1.rotation.x += 0.01;
            cube1.rotation.y += 0.01;
            cube2.rotation.x += 0.01;
            cube2.rotation.y += 0.01;
            
            renderer.render(scene, camera);
decelerateSpin(cube1);
decelerateSpin(cube2);
        };
  animate();
};

let isMouseDown = false;
let previousMousePosition = { x: 0, y: 0 };

window.addEventListener('mousedown', function() {
    isMouseDown = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
});

window.addEventListener('mouseup', function() {
    isMouseDown = false;
});

window.addEventListener('mousemove', function(event) {
    if (!isMouseDown) return;

    const dx = event.clientX - previousMousePosition.x;
    const dy = event.clientY - previousMousePosition.y;

    const rotationSpeed = 0.005;

    cube1.rotation.x += dy * rotationSpeed;
    cube1.rotation.y += dx * rotationSpeed;
    cube2.rotation.x += dy * rotationSpeed;
    cube2.rotation.y += dx * rotationSpeed;

    previousMousePosition = { x: event.clientX, y: event.clientY };
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('intro-animation').addEventListener('ended', function() {
    // ... Your existing code ...
    startThreeJsAnimation();
  });
})
let spinVelocity = 0;
let isSpinning = false;

function initiateSpin() {
    spinVelocity = 0.15;  // Initial rotation speed
    isSpinning = true;
}

function decelerateSpin(cube) {
    if (isSpinning) {
        spinVelocity *= 0.98;  // Deceleration factor

        // Rotate the cube
        cube.rotation.y += spinVelocity;

        // If rotation is slow enough, snap to the nearest face
        if (spinVelocity < 0.01) {
            isSpinning = false;
            cube.rotation.y = Math.round(cube.rotation.y / (Math.PI / 2)) * (Math.PI / 2);
        }
    }
}
;