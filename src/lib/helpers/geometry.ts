import THREE from "three";
import { Vec3 } from "../types/common";

export type GeoType = "sphere-buffer";

export const useGeometry = (type: GeoType, size: Vec3) => {
  switch (type) {
    case "sphere-buffer":
      return new THREE.SphereBufferGeometry(...size);

    default:
      break;
  }
};
