import {
  create3dSketch,
  createParams,
  load3dSketch,
  useGeometry,
  useLight,
} from "./lib";
import { useAmbient, useMaterial, useMesh } from "./lib";

const params = createParams({
  containerId: "root",
  dimensions: [600, 600],
  animate: true,
});

const sketch = create3dSketch(({ scene, camera }) => {
  scene.add(useAmbient());
  scene.add(useLight(0xffffff, 0.4, [-1, 1, -1]));
  const mesh = useMesh(
    useGeometry("box", [1, 1, 1]),
    useMaterial("standard", 0x89cad0)
  );
  scene.add(mesh);

  return ({ time, dt }) => {
    mesh.rotation.y += dt;
    params.renderer.render(scene, camera);
  };
});

load3dSketch(sketch, params);
