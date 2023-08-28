import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export function startThreeJsAnimation() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff); // White background

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // First cube
  const geometry1 = new THREE.BoxGeometry();
  const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube1 = new THREE.Mesh(geometry1, material1);
  scene.add(cube1);
  cube1.position.x = -2; // Positioning the first cube to the left

  // Second cube
  const geometry2 = new THREE.BoxGeometry();
  const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const cube2 = new THREE.Mesh(geometry2, material2);
  scene.add(cube2);
  cube2.position.x = 2; // Positioning the second cube to the right

  // Orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);

  const animate = function () {
    requestAnimationFrame(animate);

    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
  };

  animate();

  // Event listeners for cubes
  // TODO: Add click event listeners to navigate to respective pages
}

