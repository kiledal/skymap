import * as THREE from 'three';
import camera from './camera';
import cameraControls from './cameraControls';
import renderConstillationBorders from './renderConstillationBorders';
import renderConstillations from './renderConstillations';
import renderer from './renderer';
import renderGraticule from './renderGraticule';
import renderStars from './renderStars';

export default class StarMap {
  constructor(el) {
    this.alt = 20;

    // Setup renderer
    this.renderer = renderer.call(this, el);

    // Setup scene
    this.scene = new THREE.Scene();

    this.render();

    // Setup camera
    this.camera = camera.call(this);

    // Setup controls
    this.tbControls = cameraControls.call(this);

    // Kick-off renderer
    (function animate() {
      this.tbControls.update();
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(animate.bind(this));
    }.call(this));
  }

  render() {
    renderGraticule.call(this);
    renderConstillations.call(this);
    renderConstillationBorders.call(this);
    // renderStars.call(this);
  }
}
