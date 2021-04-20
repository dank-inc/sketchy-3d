import * as THREE from "three";
import { Vec3 } from "../types/common";

export const useLight = (
  color: string | number = "#fff",
  intensity = 0.5,
  position: Vec3 = [0, 2, 0]
) => {
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(...position);
  return light;
};

export const useAmbient = (
  color: string | number = "#fff",
  intensity = 0.5
) => {
  return new THREE.AmbientLight(color, intensity);
};
