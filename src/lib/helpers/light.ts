import * as THREE from "three";

export const useLight = (color: string | number = "#fff", intensity = 0.5) => {
  return new THREE.DirectionalLight(color, intensity);
};

export const useAmbient = (
  color: string | number = "#fff",
  intensity = 0.5
) => {
  return new THREE.AmbientLight(color, intensity);
};
