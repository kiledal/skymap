import * as THREE from 'three';

export default function (el) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  el.appendChild(renderer.domElement);

  return renderer;
}
