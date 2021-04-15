import THREE from "three";

export const useCamera = (type: "perspective" | "ortho"): THREE.Camera => {
  return type === "perspective"
    ? new THREE.PerspectiveCamera(55, 1, 0.01, 30)
    : new THREE.OrthographicCamera(-1, 1, 1, -1);
};
