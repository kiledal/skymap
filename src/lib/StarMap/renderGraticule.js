import * as d3 from 'd3';
import * as THREE from 'three';
import { GeoJsonGeometry } from 'three-geojson-geometry';

export default function () {
  const graticuleObj = new THREE.LineSegments(
    new GeoJsonGeometry(d3.geoGraticule10(), this.alt),
    new THREE.LineBasicMaterial({
      color: 'lime',
      transparent: true,
      opacity: 0.05,
    }),
  );
  this.scene.add(graticuleObj);
}
