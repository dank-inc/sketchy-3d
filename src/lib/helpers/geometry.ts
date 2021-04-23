import * as THREE from 'three'
import { Vec3 } from '../types/common'

export type GeoType = 'sphere-buffer' | 'box'

export const useGeometry = (type: GeoType, size: Vec3) => {
  switch (type) {
    case 'sphere-buffer':
      return new THREE.SphereBufferGeometry(...size)
    case 'box':
      return new THREE.BoxGeometry(...size)

    default:
      break
  }
}

export const useCircle = (rad = 5, segments = 32) => {
  return new THREE.CircleGeometry(rad, segments)
}
