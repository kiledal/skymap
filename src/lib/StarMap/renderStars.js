import stars14 from '../../data/stars.14.json';
import stars6 from '../../data/stars.6.json';
import * as THREE from 'three';
import { GeoJsonGeometry } from 'three-geojson-geometry';

export default function () {
  stars14.features.forEach((feature) => {
    const { geometry } = feature;

    const star = new THREE.Points(
      new GeoJsonGeometry(geometry, this.alt),
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.75,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
        depthTest: false,
      }),
    );

    this.scene.add(star);
  });

  stars6.features.forEach((feature) => {
    const { geometry } = feature;

    const star = new THREE.Points(
      new GeoJsonGeometry(geometry, this.alt),
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2.25,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        depthTest: false,
      }),
    );

    this.scene.add(star);
  });
}
