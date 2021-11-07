import * as THREE from 'three';

export default function () {
  const camera = new THREE.PerspectiveCamera();

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.position.z = this.alt;

  return camera;
}
