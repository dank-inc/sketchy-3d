import { PerspectiveCamera, OrthographicCamera } from "three";

export const useCamera = (type: "perspective" | "ortho"): THREE.Camera => {
  return type === "perspective"
    ? new PerspectiveCamera(55, 1, 0.01, 30)
    : new OrthographicCamera(-1, 1, 1, -1);
};
