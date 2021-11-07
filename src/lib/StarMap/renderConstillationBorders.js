import constillations from '../../data/constellations.borders.json';
import * as THREE from 'three';
import { GeoJsonGeometry } from 'three-geojson-geometry';

export default function () {

  constillations.features.forEach((feature) => {
    const { geometry } = feature;

    const asterism = new THREE.LineSegments(
      new GeoJsonGeometry(geometry, this.alt),
      new THREE.LineBasicMaterial({
        color: 'steelblue',
        opacity: 0.35,
        transparent: true,
      }),
    );

    this.scene.add(asterism);
  });
}
