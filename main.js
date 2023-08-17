import * as THREE from 'node_modules/three/build/three.module.js';
import { OrbitControls } from 'node_modules/three/examples/jsm/controls/OrbitControls.js';

// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry
var geometry = new THREE.BoxGeometry();

// Create a material
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create a mesh
var cube = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
