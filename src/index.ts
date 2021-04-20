import * as THREE from "three";
import { create3dSketch, createParams, load3dSketch, useGeometry } from "./lib";
import { useAmbient, useMaterial, useMesh } from "./lib";

const params = createParams({
  containerId: "root",
  dimensions: [600, 600],
  animate: true,
});

const sketch = create3dSketch(({ scene, camera }) => {
  scene.add(useAmbient());

  const mesh = useMesh(useGeometry("box", [1, 1, 1]), useMaterial("basic"));
  scene.add(mesh);

  return ({ time }) => {
    mesh.rotation.z = time;
    params.renderer.render(scene, camera);
  };
});

load3dSketch(sketch, params);
