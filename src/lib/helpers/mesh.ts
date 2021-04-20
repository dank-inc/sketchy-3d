import * as THREE from "three";

export const useMesh = (geo: THREE.BufferGeometry, material: THREE.Material) =>
  new THREE.Mesh(geo, material);
