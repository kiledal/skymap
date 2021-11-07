import constillations from '../../data/constellations.lines.json';
import * as THREE from 'three';
import { GeoJsonGeometry } from 'three-geojson-geometry';

export default function () {
  constillations.features.forEach((feature) => {
    const { geometry } = feature;

    const asterism = new THREE.LineSegments(
      new GeoJsonGeometry(geometry, this.alt),
      new THREE.LineBasicMaterial({ color: 'blue' }),
    );

    this.scene.add(asterism);
  });
}
