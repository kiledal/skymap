import TrackballControls from 'three-trackballcontrols';

export default function () {
  const tbControls = new TrackballControls(
    this.camera,
    this.renderer.domElement,
  );

  tbControls.minDistance = 1;
  tbControls.maxDistance = this.alt;
  tbControls.rotateSpeed = -2;
  tbControls.zoomSpeed = 2.8;
  tbControls.noPan = true;
  tbControls.staticMoving = false;
  tbControls.dynamicDampingFactor = 0.8;

  return tbControls;
}
