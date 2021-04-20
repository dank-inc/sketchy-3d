import * as THREE from "three";

export const useMaterial = (
  type: "standard" | "basic",
  color: number | string = 0xffffff
) => {
  switch (type) {
    case "standard":
      return new THREE.MeshStandardMaterial({
        color,
        flatShading: true,
      });
    case "basic":
      return new THREE.MeshBasicMaterial({
        color,
      });
    default:
      break;
  }
};
