import THREE from "three";

export const useMaterial = (
  type: "standard",
  color: number | string = 0xffffff
) => {
  switch (type) {
    case "standard":
      return new THREE.MeshStandardMaterial({
        color,
        flatShading: true,
      });
    default:
      break;
  }
};
